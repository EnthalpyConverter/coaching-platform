export type RacePriority = 'A' | 'B' | 'C';

export interface Race {
  id: string;
  name: string;
  date: string;
  distanceKm: number;
  elevationGainM: number;
  location: string;
  priority: RacePriority;
  courseProfile?: 'mountainous' | 'rolling' | 'flat';
  crewAccessible: boolean;
  pacerAllowed: boolean;
  cutoffHours?: number;
  notes?: string;
}
