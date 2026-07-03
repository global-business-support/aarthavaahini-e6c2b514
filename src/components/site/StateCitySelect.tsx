import { Label } from "@/components/ui/label";
import { INDIA_STATES, citiesForState } from "@/data/india-cities";

type Props = {
  state: string;
  city: string;
  onChange: (next: { state: string; city: string }) => void;
  className?: string;
  selectClassName?: string;
  labels?: { state?: string; city?: string };
};

export function StateCitySelect({
  state,
  city,
  onChange,
  className,
  selectClassName = "h-10 w-full rounded-md border border-input bg-white px-3 text-sm",
  labels,
}: Props) {
  const cities = citiesForState(state);
  return (
    <div className={className ?? "grid gap-3 sm:grid-cols-2"}>
      <div>
        <Label className="mb-1 block text-xs font-medium">{labels?.state ?? "State"}</Label>
        <select
          className={selectClassName}
          value={state}
          onChange={(e) => onChange({ state: e.target.value, city: "" })}
        >
          <option value="">Select state</option>
          {INDIA_STATES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <Label className="mb-1 block text-xs font-medium">{labels?.city ?? "City"}</Label>
        <select
          className={selectClassName}
          value={city}
          onChange={(e) => onChange({ state, city: e.target.value })}
          disabled={!state}
        >
          <option value="">{state ? "Select city" : "Select state first"}</option>
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
