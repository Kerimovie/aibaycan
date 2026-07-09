import type { ComponentType, ReactElement } from 'react';

/**
 * withModalGuard — MƏRKƏZİ modal qoruyucusu (#102 — SƏRT QAYDA).
 *
 * ⛔ İstifadəçi qaydası: "heç vaxt modal açılmadan modal içindəki request getməsin."
 *
 * Problem: React-də komponent render olunanda gövdəsindəki hooklar (useQuery/useMutation)
 * DƏRHAL işləyir. `<MyModal open={false} />` yazılsa belə `MyModal` funksiyası çağırılır →
 * daxili sorğular gedir. `if (!open) return null` İŞLƏMİR (React: hook return-dən əvvəl olmalı).
 *
 * Həll: bu HOC komponenti `open===false` olanda ÜMUMİYYƏTLƏ render etmir (`null`), yəni
 * gövdədəki hooklar heç çağırılmır. `open===true` olanda komponent normal render olunur.
 *
 * ⛔ HƏR feature modalı bununla export olunmalıdır (mərkəzi, #070 — hər yerdə `enabled:open`
 * yazmağı unutmaq bug riskidir; HOC strukturca qarşısını alır):
 *
 *   function MyModalImpl({ open, ... }: Props) { const q = useFoo(); ... }
 *   export const MyModal = withModalGuard(MyModalImpl);
 *
 * Bax: docs/08-frontend-architecture.md, decisions-log #102.
 */
export function withModalGuard<P extends { open: boolean }>(
  Component: ComponentType<P>,
): ComponentType<P> {
  function ModalGuard(props: P): ReactElement | null {
    if (!props.open) return null;
    return <Component {...props} />;
  }
  const name = Component.displayName ?? Component.name ?? 'Modal';
  ModalGuard.displayName = `ModalGuard(${name})`;
  return ModalGuard;
}
