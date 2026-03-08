import type { WorkoutType } from '../../types';
import { getWorkoutTypeColor, getWorkoutTypeLabel, getWorkoutTypeAbbrev } from '../../lib/rpe';
import { Badge } from '../ui/Badge';

interface WorkoutTypeBadgeProps {
  type: WorkoutType;
  abbreviated?: boolean;
}

export function WorkoutTypeBadge({ type, abbreviated = false }: WorkoutTypeBadgeProps) {
  return (
    <Badge className={`${getWorkoutTypeColor(type)} text-slate-950`}>
      {abbreviated ? getWorkoutTypeAbbrev(type) : getWorkoutTypeLabel(type)}
    </Badge>
  );
}
