import type { Race } from './race';

export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced' | 'elite';

export interface Athlete {
  id: string;
  name: string;
  email: string;
  weightKg: number;
  experienceLevel: ExperienceLevel;
  weeklyAvailableHours: number;
  availableDaysPerWeek: number;
  goals: string[];
  races: Race[];
  injuryHistory: string;
  trainingHistory: {
    recentWeeklyKm: number;
    longestRunKm: number;
    yearsRunning: number;
    previousUltras: string[];
  };
  preferences: {
    preferredTerrain: string;
    hasAccessToTrails: boolean;
    hasAccessToTrack: boolean;
    preferredLongRunDay: 'Saturday' | 'Sunday';
  };
}
