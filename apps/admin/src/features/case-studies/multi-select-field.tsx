import type { Paginated } from '@aibaycan/shared';
import { Badge, Checkbox, Label } from '@aibaycan/ui';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

interface Option {
  id: string;
  name?: string;
  title?: string;
}

interface Props {
  label: string;
  resource: string;
  labelKey?: 'name' | 'title';
  value: string[];
  onChange: (ids: string[]) => void;
}

/**
 * Çoxseçimli sahə — resursdan (categories/tags/services) checkbox siyahısı.
 * Native checkbox QADAĞAN → @aibaycan/ui Checkbox (docs/30).
 */
export function MultiSelectField({ label, resource, labelKey = 'name', value, onChange }: Props) {
  const { data } = useQuery({
    queryKey: [resource, 'options'],
    queryFn: () => api.get<Paginated<Option>>(`/admin/${resource}?page=1&pageSize=100`),
  });

  const options = data?.items ?? [];

  function toggle(id: string) {
    onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id]);
  }

  return (
    <div>
      <Label className="mb-1.5">{label}</Label>
      {options.length === 0 ? (
        <p className="text-sm text-text-tertiary">Seçim yoxdur</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {options.map((opt) => {
            const selected = value.includes(opt.id);
            const text = opt[labelKey] ?? opt.name ?? opt.title ?? opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => toggle(opt.id)}
                className="inline-flex items-center gap-1.5"
              >
                <Checkbox checked={selected} />
                <Badge variant={selected ? 'default' : 'secondary'}>{text}</Badge>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
