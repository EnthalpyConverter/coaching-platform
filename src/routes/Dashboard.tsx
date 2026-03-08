import { WeekOverview } from '../components/dashboard/WeekOverview';
import { UpcomingRaces } from '../components/dashboard/UpcomingRaces';
import { TrainingSummary } from '../components/dashboard/TrainingSummary';
import athleteData from '../data/athletes/travis.json';
import workoutsData from '../data/workouts/week1-mar-9-2026/workouts.json';
import type { Workout } from '../types';
import type { Race } from '../types';

const workouts = workoutsData as Workout[];
const races = athleteData.races as Race[];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-50">
          Welcome back, {athleteData.name}
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          TempoRun phase &middot; Week 1
        </p>
      </div>

      <TrainingSummary workouts={workouts} />
      <WeekOverview workouts={workouts} weekLabel="Mar 9 - Mar 15" />
      <UpcomingRaces races={races} />
    </div>
  );
}
