import { useNavigate } from 'react-router';
import type { Workout } from '../../types';
import { Card } from '../ui/Card';
import { RPEBadge } from '../ui/RPEBadge';
import { WorkoutTypeBadge } from './WorkoutTypeBadge';
import { getDayOfWeek, formatDateShort } from '../../lib/dates';

interface WorkoutCardProps {
  workout: Workout;
}

export function WorkoutCard({ workout }: WorkoutCardProps) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/workouts/${workout.id}`)} className="group">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-sm font-medium text-slate-400">
              {getDayOfWeek(workout.date)}
            </span>
            <span className="text-xs text-slate-500">{formatDateShort(workout.date)}</span>
          </div>
          <h3 className="truncate text-base font-semibold text-slate-100 group-hover:text-white">
            {workout.title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <WorkoutTypeBadge type={workout.type} />
            <RPEBadge rpe={workout.rpe} />
            <span className="text-xs text-slate-400">
              {workout.durationMinutes} min
            </span>
            {workout.elevationGainM ? (
              <span className="text-xs text-slate-500">
                +{workout.elevationGainM}m
              </span>
            ) : null}
          </div>
        </div>
        <div className="text-slate-600 transition-colors group-hover:text-slate-400">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Card>
  );
}
