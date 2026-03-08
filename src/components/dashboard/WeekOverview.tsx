import type { Workout } from '../../types';
import { WorkoutCard } from '../workout/WorkoutCard';

interface WeekOverviewProps {
  workouts: Workout[];
  weekLabel: string;
}

export function WeekOverview({ workouts, weekLabel }: WeekOverviewProps) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-100">This Week</h2>
        <span className="text-sm text-slate-400">{weekLabel}</span>
      </div>
      <div className="space-y-3">
        {workouts.map((w) => (
          <WorkoutCard key={w.id} workout={w} />
        ))}
      </div>
    </section>
  );
}
