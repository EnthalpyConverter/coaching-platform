import athleteData from '../data/athletes/travis.json';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export default function Profile() {
  const a = athleteData;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-50">Profile</h1>

      {/* Header */}
      <Card>
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-600 text-2xl font-bold text-white">
            {a.name[0]}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-100">{a.name}</h2>
            <p className="text-sm capitalize text-slate-400">{a.experienceLevel} runner</p>
            <p className="text-xs text-slate-500">{a.weightKg}kg &middot; {a.weeklyAvailableHours}hr/week &middot; {a.availableDaysPerWeek} days/week</p>
          </div>
        </div>
      </Card>

      {/* Goals */}
      <Card>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Goals</h3>
        <ul className="space-y-2">
          {a.goals.map((g, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="mt-1 text-sky-400">&#8226;</span>
              {g}
            </li>
          ))}
        </ul>
      </Card>

      {/* Training History */}
      <Card>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Training History</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat label="Weekly Volume" value={`${a.trainingHistory.recentWeeklyKm}`} unit="km" />
          <Stat label="Longest Run" value={`${a.trainingHistory.longestRunKm}`} unit="km" />
          <Stat label="Years Running" value={`${a.trainingHistory.yearsRunning}`} unit="" />
          <Stat label="Ultras Completed" value={`${a.trainingHistory.previousUltras.length}`} unit="" />
        </div>
        <div className="mt-4">
          <p className="mb-2 text-xs font-medium text-slate-500">Previous Ultras</p>
          <div className="flex flex-wrap gap-2">
            {a.trainingHistory.previousUltras.map((u, i) => (
              <Badge key={i} className="bg-slate-700/50 text-slate-300">{u}</Badge>
            ))}
          </div>
        </div>
      </Card>

      {/* Injury History */}
      <Card>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Injury History</h3>
        <p className="text-sm text-slate-300">{a.injuryHistory}</p>
      </Card>

      {/* Preferences */}
      <Card>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Preferences</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-xs text-slate-500">Terrain</p>
            <p className="capitalize text-slate-300">{a.preferences.preferredTerrain}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Long Run Day</p>
            <p className="text-slate-300">{a.preferences.preferredLongRunDay}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Trail Access</p>
            <p className="text-slate-300">{a.preferences.hasAccessToTrails ? 'Yes' : 'No'}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Track Access</p>
            <p className="text-slate-300">{a.preferences.hasAccessToTrack ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Stat({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-lg font-semibold text-slate-200">
        {value}{unit && <span className="ml-0.5 text-xs font-normal text-slate-500">{unit}</span>}
      </p>
    </div>
  );
}
