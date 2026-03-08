import type { WorkoutType } from '../types';

export function getRpeColor(rpe: number): string {
  if (rpe <= 3) return 'text-rpe-low';
  if (rpe <= 6) return 'text-rpe-mid';
  if (rpe <= 8) return 'text-rpe-high';
  return 'text-rpe-max';
}

export function getRpeBgColor(rpe: number): string {
  if (rpe <= 3) return 'bg-rpe-low';
  if (rpe <= 6) return 'bg-rpe-mid';
  if (rpe <= 8) return 'bg-rpe-high';
  return 'bg-rpe-max';
}

export function getRpeLabel(rpe: number): string {
  if (rpe <= 2) return 'Very Easy';
  if (rpe <= 4) return 'Easy';
  if (rpe <= 6) return 'Moderate';
  if (rpe <= 7) return 'Hard';
  if (rpe <= 8) return 'Very Hard';
  if (rpe <= 9) return 'Near Max';
  return 'Maximum';
}

export function getRpeBreathing(rpe: number): string {
  if (rpe <= 5) return 'Conversational, full sentences';
  if (rpe <= 6) return 'Deep and rhythmic, short phrases';
  if (rpe <= 7) return 'Labored but controlled';
  if (rpe <= 8) return 'Deep, labored, losing speech ability';
  return 'Short, rapid, near-maximal';
}

export function getWorkoutTypeColor(type: WorkoutType): string {
  const colors: Record<WorkoutType, string> = {
    RecoveryRun: 'bg-recovery',
    EnduranceRun: 'bg-endurance',
    SteadyStateRun: 'bg-steady-state',
    TempoRun: 'bg-tempo',
    RunningIntervals: 'bg-intervals',
    RunningStrides: 'bg-strides',
  };
  return colors[type];
}

export function getWorkoutTypeTextColor(type: WorkoutType): string {
  const colors: Record<WorkoutType, string> = {
    RecoveryRun: 'text-recovery',
    EnduranceRun: 'text-endurance',
    SteadyStateRun: 'text-steady-state',
    TempoRun: 'text-tempo',
    RunningIntervals: 'text-intervals',
    RunningStrides: 'text-strides',
  };
  return colors[type];
}

export function getWorkoutTypeLabel(type: WorkoutType): string {
  const labels: Record<WorkoutType, string> = {
    RecoveryRun: 'Recovery',
    EnduranceRun: 'Endurance',
    SteadyStateRun: 'Steady State',
    TempoRun: 'Tempo',
    RunningIntervals: 'Intervals',
    RunningStrides: 'Strides',
  };
  return labels[type];
}

export function getWorkoutTypeAbbrev(type: WorkoutType): string {
  const abbrevs: Record<WorkoutType, string> = {
    RecoveryRun: 'RR',
    EnduranceRun: 'ER',
    SteadyStateRun: 'SSR',
    TempoRun: 'TR',
    RunningIntervals: 'RI',
    RunningStrides: 'RS',
  };
  return abbrevs[type];
}
