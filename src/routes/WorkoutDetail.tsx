import { useParams, useNavigate } from 'react-router';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import workoutsData from '../data/workouts/week1-mar-9-2026/workouts.json';
import type { Workout } from '../types';
import { WorkoutTypeBadge } from '../components/workout/WorkoutTypeBadge';
import { RPEBadge } from '../components/ui/RPEBadge';
import { NutritionPanel } from '../components/workout/NutritionPanel';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { formatDate } from '../lib/dates';
import { getRpeBreathing } from '../lib/rpe';

const workouts = workoutsData as Workout[];

export default function WorkoutDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const workout = workouts.find((w) => w.id === id);

  if (!workout) {
    return (
      <div className="py-12 text-center">
        <p className="text-slate-400">Workout not found.</p>
        <Button variant="ghost" onClick={() => navigate('/workouts')} className="mt-4">
          Back to workouts
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-slate-200"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      <div>
        <p className="text-sm text-slate-400">{formatDate(workout.date)}</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-50">{workout.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <WorkoutTypeBadge type={workout.type} />
          <RPEBadge rpe={workout.rpe} showLabel />
          <span className="text-sm text-slate-400">{workout.durationMinutes} min</span>
          {workout.elevationGainM ? (
            <span className="text-sm text-slate-500">+{workout.elevationGainM}m</span>
          ) : null}
          {workout.environment && (
            <span className="text-sm capitalize text-slate-500">{workout.environment}</span>
          )}
        </div>
      </div>

      {/* Intervals breakdown */}
      {workout.intervals && workout.intervals.length > 0 && (
        <Card>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
            Intervals
          </h3>
          <div className="space-y-2">
            {workout.warmup && (
              <IntervalRow label="Warmup" interval={workout.warmup} />
            )}
            {workout.intervals.map((interval, i) => (
              <IntervalRow key={i} label={`Set ${i + 1}`} interval={interval} />
            ))}
            {workout.cooldown && (
              <IntervalRow label="Cooldown" interval={workout.cooldown} />
            )}
          </div>
        </Card>
      )}

      {/* Breathing cue */}
      <Card className="border-sky-900/50 bg-sky-950/30">
        <p className="text-xs font-medium uppercase tracking-wider text-sky-400">
          Target Breathing
        </p>
        <p className="mt-1 text-sm text-slate-300">
          {getRpeBreathing(workout.rpe)}
        </p>
      </Card>

      {/* Nutrition */}
      <NutritionPanel nutrition={workout.nutrition} durationMinutes={workout.durationMinutes} />

      {/* Markdown description */}
      <Card>
        <div className="prose prose-invert prose-sm max-w-none prose-headings:text-slate-200 prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-slate-200">
          <Markdown remarkPlugins={[remarkGfm]}>{workout.descriptionMd}</Markdown>
        </div>
      </Card>
    </div>
  );
}

function IntervalRow({ label, interval }: { label: string; interval: { durationMinutes: number; rpe: number; description: string } }) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-slate-900/50 px-3 py-2">
      <span className="w-16 flex-shrink-0 text-xs font-medium text-slate-500">{label}</span>
      <div className="flex-1">
        <p className="text-sm text-slate-300">{interval.description}</p>
      </div>
      <span className="text-xs text-slate-400">{interval.durationMinutes} min</span>
      <RPEBadge rpe={interval.rpe} />
    </div>
  );
}
