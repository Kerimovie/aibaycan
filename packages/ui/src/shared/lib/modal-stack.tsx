import * as React from 'react';

/**
 * Mərkəzi Modal Stack (#186) — modal-içində-modal düzgün stacking.
 *
 * ⛔ SƏRT QAYDA (bütün sistemə aid): bir modalın içindən başqa modal açılanda, içəri modal
 * bağlananda MÜTLƏQ əvvəlki modal görünməlidir. Bu, mərkəzi mexanizmlə AVTOMATİK həll olunur —
 * hər modal komponenti `useModalStackEntry` işlədir, feature HEÇ NƏ "unutmur".
 *
 * Radix Dialog nested-dialog rəsmi pattern-i YOX (disc #3667) → özümüz həll edirik:
 *  1. z-index depth-ə görə (BASE + depth×STEP) — üstdəki modal yuxarıda.
 *  2. YALNIZ ən üstdəki modal overlay (qaranlıq fon) göstərir — ikiqat qaranlıq/klik yox.
 *  3. Arxa modallar Radix `modal={false}` — focus-trap/scroll-lock/aria-hidden konflikti yox.
 */

/** Baza z-index (mövcud modal z-50 ilə uyğun). Hər dərinlik +STEP. */
const BASE_Z = 50;
const STEP = 10;

interface ModalStackContextValue {
  /** Açıq modalların sıralı id-ləri (dib→üst). */
  stack: string[];
  register: (id: string) => void;
  unregister: (id: string) => void;
}

const ModalStackContext = React.createContext<ModalStackContextValue | null>(null);

/** App kökündə bir dəfə — bütün modallar bura qeydiyyatdan keçir. */
export function ModalStackProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [stack, setStack] = React.useState<string[]>([]);

  const register = React.useCallback((id: string) => {
    setStack((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);
  const unregister = React.useCallback((id: string) => {
    setStack((prev) => prev.filter((x) => x !== id));
  }, []);

  const value = React.useMemo(
    () => ({ stack, register, unregister }),
    [stack, register, unregister],
  );
  return <ModalStackContext.Provider value={value}>{children}</ModalStackContext.Provider>;
}

export interface ModalStackEntry {
  /** Stack-də dərinlik (0 = ən alt açıq modal). */
  depth: number;
  /** Bu modal ən üstdədir? (overlay + focus-trap yalnız üstdə). */
  isTop: boolean;
  /** Content z-index (overlay = zIndex-1). */
  zIndex: number;
  /** Radix Dialog.Root modal prop — yalnız üstdəki true (arxa false → konflikt yox). */
  modal: boolean;
  /** Overlay göstərilsin? (yalnız üstdəki — ikiqat qaranlıq yox). */
  showOverlay: boolean;
}

let counter = 0;
function nextId(): string {
  counter += 1;
  return `modal-${counter}`;
}

/**
 * Modal komponenti bunu işlədir (open=true olanda stack-ə qeydiyyat). Qaytarır: depth/isTop/
 * zIndex/modal/showOverlay — komponent bunları Radix Dialog + overlay + content-ə tətbiq edir.
 *
 * Provider yoxdursa (test/izolyasiya) fallback: tək modal (depth 0, isTop, z-50, modal=true).
 */
export function useModalStackEntry(open: boolean): ModalStackEntry {
  const ctx = React.useContext(ModalStackContext);
  const idRef = React.useRef<string>('');
  if (!idRef.current) idRef.current = nextId();

  // ⛔ register/unregister sabit (useCallback) — effect deps-ə YALNIZ onlar (ctx obyekti YOX,
  // çünki stack dəyişəndə ctx yenilənir → effect təkrar → register/unregister loop, #103).
  const register = ctx?.register;
  const unregister = ctx?.unregister;
  React.useEffect(() => {
    if (!register || !unregister || !open) return undefined;
    const id = idRef.current;
    register(id);
    return () => unregister(id);
  }, [register, unregister, open]);

  // Fallback (provider yox): tək modal.
  if (!ctx) {
    return { depth: 0, isTop: true, zIndex: BASE_Z, modal: true, showOverlay: true };
  }

  const depth = ctx.stack.indexOf(idRef.current);
  // Hələ qeydiyyatdan keçməyibsə (ilk render, effekt işləməyib) — üst kimi davran (flicker yox).
  const effectiveDepth = depth === -1 ? ctx.stack.length : depth;
  const isTop = effectiveDepth === ctx.stack.length - 1 || ctx.stack.length === 0 || depth === -1;
  const zIndex = BASE_Z + effectiveDepth * STEP;

  // ⛔ #209f — `modal` HƏMİŞƏ true (əvvəl `isTop` idi). Radix Dialog `modal` prop-u
  // dəyişəndə Content-i FƏRQLİ komponentlə render edir → arxadakı modalın içi TAM
  // REMOUNT olurdu: vizual "bağlanıb-açılma" + content state itkisi (#209d tələsi).
  // Sabit true ilə remount YOX; arxa-modal konfliktlərini (Esc/kənar-klik/fokus) onsuz
  // da DialogContent-in isTop qoruyucuları (#204b) kəsir; Radix FocusScope öz daxili
  // stack-i ilə yalnız üstdəkini aktiv saxlayır (nested rəsmi dəstəklənir).
  return { depth: effectiveDepth, isTop, zIndex, modal: true, showOverlay: isTop };
}
