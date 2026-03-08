export type WorkoutType =
  | 'RecoveryRun'
  | 'EnduranceRun'
  | 'SteadyStateRun'
  | 'TempoRun'
  | 'RunningIntervals'
  | 'RunningStrides';

export interface Interval {
  durationMinutes: number;
  rpe: number;
  description: string;
}

export interface WorkoutNutrition {
  estimatedCalories: number;
  carbTargetGPerHr: number;
  sodiumMgPerHr: number;
  fluidOzPerHr: number;
  notes?: string;
}

export interface Workout {
  id: string;
  date: string;
  type: WorkoutType;
  title: string;
  rpe: number;
  durationMinutes: number;
  warmup?: Interval;
  cooldown?: Interval;
  intervals?: Interval[];
  descriptionMd: string;
  zwoPath?: string;
  nutrition: WorkoutNutrition;
  environment?: 'trail' | 'road' | 'track' | 'treadmill';
  elevationGainM?: number;
}
