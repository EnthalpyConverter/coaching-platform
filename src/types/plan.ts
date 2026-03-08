export type TrainingPhase = 'RI' | 'TR' | 'SSR' | 'ER';

export interface Phase {
  id: string;
  type: TrainingPhase;
  startDate: string;
  endDate: string;
  focusDescription: string;
  weeklyFrequency: number;
  notes?: string;
}

export interface WeeklySchedule {
  weekStartDate: string;
  phaseId: string;
  isRecoveryWeek: boolean;
  workoutIds: string[];
  plannedVolumeMinutes: number;
  notes?: string;
}

export interface TrainingPlan {
  id: string;
  athleteId: string;
  season: string;
  goalRaceId: string;
  phases: Phase[];
  weeklySchedules: WeeklySchedule[];
}
