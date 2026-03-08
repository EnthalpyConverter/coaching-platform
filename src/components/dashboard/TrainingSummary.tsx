import type { Workout } from '../../types';
import { Card } from '../ui/Card';

interface TrainingSummaryProps {
  workouts: Workout[];
}

export function TrainingSummary({ workouts }: TrainingSummaryProps) {
  const totalMinutes = workouts.reduce((sum, w) => sum + w.durationMinutes, 0);
  const totalElevation = workouts.reduce((sum, w) => sum + (w.elevationGainM || 0), 0);
  const totalCalories = workouts.reduce((sum, w) => sum + w.nutrition.estimatedCalories, 0);
  const avgRpe = workouts.length > 0
    ? (workouts.reduce((sum, w) => sum + w.rpe, 0) / workouts.length).toFixed(1)
    : '0';

  const stats = [
    { label: 'Volume', value: `${Math.round(totalMinutes / 60 * 10) / 10}`, unit: 'hrs' },
    { label: 'Elevation', value: `${totalElevation.toLocaleString()}`, unit: 'm' },
    { label: 'Calories', value: `${totalCalories.toLocaleString()}`, unit: 'cal' },
    { label: 'Avg RPE', value: avgRpe, unit: '' },
  ];

  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-slate-100">Week Summary</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <p className="text-xs text-slate-500">{s.label}</p>
            <p className="text-xl font-bold text-slate-100">
              {s.value}
              {s.unit && <span className="ml-1 text-xs font-normal text-slate-500">{s.unit}</span>}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
