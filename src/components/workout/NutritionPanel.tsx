import type { WorkoutNutrition } from '../../types';
import { Card } from '../ui/Card';

interface NutritionPanelProps {
  nutrition: WorkoutNutrition;
  durationMinutes: number;
}

export function NutritionPanel({ nutrition, durationMinutes }: NutritionPanelProps) {
  const showFueling = durationMinutes > 75;

  return (
    <Card className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
        Nutrition
      </h3>
      <div className="grid grid-cols-2 gap-3">
        <Stat label="Est. Calories" value={`${nutrition.estimatedCalories}`} unit="cal" />
        <Stat label="Fluid" value={`${nutrition.fluidOzPerHr}`} unit="oz/hr" />
        {showFueling && (
          <>
            <Stat label="Carbs" value={`${nutrition.carbTargetGPerHr}`} unit="g/hr" />
            <Stat label="Sodium" value={`${nutrition.sodiumMgPerHr}`} unit="mg/hr" />
          </>
        )}
      </div>
      {nutrition.notes && (
        <p className="text-xs text-slate-500">{nutrition.notes}</p>
      )}
    </Card>
  );
}

function Stat({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-lg font-semibold text-slate-200">
        {value} <span className="text-xs font-normal text-slate-500">{unit}</span>
      </p>
    </div>
  );
}
