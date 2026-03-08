import { getRpeBgColor, getRpeLabel } from '../../lib/rpe';

interface RPEBadgeProps {
  rpe: number;
  showLabel?: boolean;
}

export function RPEBadge({ rpe, showLabel = false }: RPEBadgeProps) {
  const bgColor = getRpeBgColor(rpe);

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold text-slate-950 ${bgColor}`}>
      RPE {rpe}
      {showLabel && <span className="font-normal">/ {getRpeLabel(rpe)}</span>}
    </span>
  );
}
