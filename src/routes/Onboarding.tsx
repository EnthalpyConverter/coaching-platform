import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const steps = [
  { title: 'Goals', description: 'What are you training for?' },
  { title: 'Experience', description: 'Tell us about your running background' },
  { title: 'Availability', description: 'How much time can you dedicate to training?' },
  { title: 'Races', description: 'Any upcoming races on the calendar?' },
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const current = steps[step];

  return (
    <div className="mx-auto max-w-lg space-y-6 py-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-50">Welcome</h1>
        <p className="mt-1 text-sm text-slate-400">Let's set up your athlete profile</p>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i <= step ? 'bg-sky-500' : 'bg-slate-700'
            }`}
          />
        ))}
      </div>

      <Card className="space-y-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-sky-400">
            Step {step + 1} of {steps.length}
          </p>
          <h2 className="mt-1 text-lg font-semibold text-slate-100">{current.title}</h2>
          <p className="text-sm text-slate-400">{current.description}</p>
        </div>

        {step === 0 && (
          <div className="space-y-3">
            <label className="block">
              <span className="text-sm text-slate-300">Primary goal</span>
              <select className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 focus:border-sky-500 focus:outline-none">
                <option>Complete my first ultra</option>
                <option>Improve race time</option>
                <option>Podium finish</option>
                <option>General fitness</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm text-slate-300">Tell us more</span>
              <textarea
                rows={3}
                placeholder="Describe your goals in your own words..."
                className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:border-sky-500 focus:outline-none"
              />
            </label>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-3">
            <label className="block">
              <span className="text-sm text-slate-300">Experience level</span>
              <select className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 focus:border-sky-500 focus:outline-none">
                <option>Beginner (first ultra)</option>
                <option>Intermediate (a few ultras)</option>
                <option>Advanced (many ultras, competitive)</option>
                <option>Elite (podium-level)</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm text-slate-300">Years running</span>
              <input type="number" placeholder="e.g., 5" className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 focus:border-sky-500 focus:outline-none" />
            </label>
            <label className="block">
              <span className="text-sm text-slate-300">Recent weekly mileage (km)</span>
              <input type="number" placeholder="e.g., 60" className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 focus:border-sky-500 focus:outline-none" />
            </label>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3">
            <label className="block">
              <span className="text-sm text-slate-300">Hours per week available for training</span>
              <input type="number" placeholder="e.g., 10" className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 focus:border-sky-500 focus:outline-none" />
            </label>
            <label className="block">
              <span className="text-sm text-slate-300">Days per week you can run</span>
              <select className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 focus:border-sky-500 focus:outline-none">
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm text-slate-300">Preferred long run day</span>
              <select className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 focus:border-sky-500 focus:outline-none">
                <option>Saturday</option>
                <option>Sunday</option>
              </select>
            </label>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3">
            <p className="text-sm text-slate-400">
              Add your goal race and any B/C races. We'll build the plan around your A race.
            </p>
            <label className="block">
              <span className="text-sm text-slate-300">Goal race (A race)</span>
              <input type="text" placeholder="e.g., Western States 100" className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 focus:border-sky-500 focus:outline-none" />
            </label>
            <label className="block">
              <span className="text-sm text-slate-300">Race date</span>
              <input type="date" className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 focus:border-sky-500 focus:outline-none" />
            </label>
          </div>
        )}

        <div className="flex justify-between pt-2">
          <Button
            variant="ghost"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            Back
          </Button>
          {step < steps.length - 1 ? (
            <Button onClick={() => setStep((s) => s + 1)}>Continue</Button>
          ) : (
            <Button onClick={() => navigate('/dashboard')}>Finish Setup</Button>
          )}
        </div>
      </Card>
    </div>
  );
}
