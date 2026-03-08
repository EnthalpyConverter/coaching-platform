import type { Race } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { formatDate, daysUntil } from '../../lib/dates';

interface UpcomingRacesProps {
  races: Race[];
}

export function UpcomingRaces({ races }: UpcomingRacesProps) {
  const sorted = [...races].sort((a, b) => a.date.localeCompare(b.date));
  const upcoming = sorted.filter((r) => daysUntil(r.date) >= 0).slice(0, 3);

  if (upcoming.length === 0) return null;

  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-slate-100">Upcoming Races</h2>
      <div className="space-y-3">
        {upcoming.map((race) => {
          const days = daysUntil(race.date);
          const priorityColors: Record<string, string> = {
            A: 'bg-rose-500/20 text-rose-400',
            B: 'bg-amber-500/20 text-amber-400',
            C: 'bg-slate-500/20 text-slate-400',
          };

          return (
            <Card key={race.id}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-100">{race.name}</h3>
                    <Badge className={priorityColors[race.priority]}>
                      {race.priority} Race
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">
                    {formatDate(race.date)} &middot; {race.location}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {race.distanceKm}km &middot; +{race.elevationGainM}m
                    {race.cutoffHours ? ` &middot; ${race.cutoffHours}hr cutoff` : ''}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-slate-200">{days}</p>
                  <p className="text-xs text-slate-500">days</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
