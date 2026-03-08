import planData from '../data/plans/travis-2026.json';
import athleteData from '../data/athletes/travis.json';
import type { TrainingPlan, Phase, TrainingPhase } from '../types';
import type { Race } from '../types';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { formatDateShort, daysUntil } from '../lib/dates';

const plan = planData as TrainingPlan;
const races = athleteData.races as Race[];

const phaseColors: Record<TrainingPhase, { bg: string; text: string; label: string }> = {
  RI: { bg: 'bg-intervals/20', text: 'text-intervals', label: 'RunningIntervals' },
  TR: { bg: 'bg-tempo/20', text: 'text-tempo', label: 'TempoRun' },
  SSR: { bg: 'bg-steady-state/20', text: 'text-steady-state', label: 'SteadyStateRun' },
  ER: { bg: 'bg-endurance/20', text: 'text-endurance', label: 'EnduranceRun' },
};

export default function LongRangePlan() {
  const goalRace = races.find((r) => r.id === plan.goalRaceId);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-50">{plan.season} Training Plan</h1>
        {goalRace && (
          <p className="mt-1 text-sm text-slate-400">
            Goal: {goalRace.name} &middot; {formatDateShort(goalRace.date)} &middot; {daysUntil(goalRace.date)} days away
          </p>
        )}
      </div>

      {/* Phase Timeline */}
      <Card>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
          Phase Timeline
        </h2>
        <div className="space-y-2">
          {plan.phases.map((phase) => (
            <PhaseRow key={phase.id} phase={phase} races={races} />
          ))}
        </div>
      </Card>

      {/* Phase Details */}
      <div className="space-y-3">
        {plan.phases.map((phase) => {
          const colors = phaseColors[phase.type];
          const weeks = getWeekCount(phase.startDate, phase.endDate);

          return (
            <Card key={phase.id}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Badge className={`${colors.bg} ${colors.text}`}>
                      {phase.type}
                    </Badge>
                    <span className="text-sm font-medium text-slate-300">
                      {colors.label}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{phase.focusDescription}</p>
                  {phase.notes && (
                    <p className="mt-1 text-xs text-slate-500">{phase.notes}</p>
                  )}
                </div>
                <div className="text-right text-sm text-slate-400">
                  <p>{formatDateShort(phase.startDate)} - {formatDateShort(phase.endDate)}</p>
                  <p className="text-xs text-slate-500">{weeks} weeks &middot; {phase.weeklyFrequency}x/wk</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function PhaseRow({ phase, races }: { phase: Phase; races: Race[] }) {
  const colors = phaseColors[phase.type];
  const phaseRaces = races.filter((r) => r.date >= phase.startDate && r.date <= phase.endDate);
  const isActive = new Date().toISOString().split('T')[0] >= phase.startDate &&
    new Date().toISOString().split('T')[0] <= phase.endDate;

  return (
    <div className={`flex items-center gap-3 rounded-lg px-3 py-2.5 ${isActive ? 'ring-1 ring-sky-500/50' : ''} ${colors.bg}`}>
      <span className={`w-10 text-center text-xs font-bold ${colors.text}`}>{phase.type}</span>
      <div className="flex-1">
        <div className="h-3 rounded-full bg-slate-700/50">
          <div className={`h-full rounded-full ${colors.bg} border ${colors.text.replace('text-', 'border-')}`} style={{ width: '100%' }} />
        </div>
      </div>
      <span className="text-xs text-slate-500">
        {formatDateShort(phase.startDate)} - {formatDateShort(phase.endDate)}
      </span>
      {phaseRaces.map((r) => (
        <Badge key={r.id} className="bg-rose-500/20 text-rose-400 text-xs">
          {r.priority}: {r.name.split(' ').slice(0, 2).join(' ')}
        </Badge>
      ))}
    </div>
  );
}

function getWeekCount(start: string, end: string): number {
  const ms = new Date(end).getTime() - new Date(start).getTime();
  return Math.round(ms / (7 * 24 * 60 * 60 * 1000));
}
