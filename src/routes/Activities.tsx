import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Activities() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-50">Activities</h1>
        <Button variant="primary" size="sm">
          Log Activity
        </Button>
      </div>

      <Card className="py-12 text-center">
        <svg className="mx-auto h-12 w-12 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
        <p className="mt-4 text-sm text-slate-400">
          No activities logged yet.
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Upload a .fit file or manually log your workout to get started.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button variant="primary" size="sm">Upload .fit</Button>
          <Button variant="secondary" size="sm">Manual Entry</Button>
        </div>
      </Card>
    </div>
  );
}
