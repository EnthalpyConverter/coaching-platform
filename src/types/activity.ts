export type ActivitySource = 'fit_upload' | 'manual';

export interface Activity {
  id: string;
  athleteId: string;
  date: string;
  source: ActivitySource;
  distanceKm: number;
  durationMinutes: number;
  elevationGainM: number;
  rpe: number;
  avgHeartRate?: number;
  maxHeartRate?: number;
  calories?: number;
  notes?: string;
  matchedWorkoutId?: string;
}
