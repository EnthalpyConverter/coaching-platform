import { HashRouter, Routes, Route, Navigate } from 'react-router';
import { AppShell } from './components/layout/AppShell';
import Dashboard from './routes/Dashboard';
import WeeklyWorkouts from './routes/WeeklyWorkouts';
import WorkoutDetail from './routes/WorkoutDetail';
import LongRangePlan from './routes/LongRangePlan';
import Activities from './routes/Activities';
import Profile from './routes/Profile';
import Onboarding from './routes/Onboarding';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="workouts" element={<WeeklyWorkouts />} />
          <Route path="workouts/:id" element={<WorkoutDetail />} />
          <Route path="plan" element={<LongRangePlan />} />
          <Route path="activities" element={<Activities />} />
          <Route path="profile" element={<Profile />} />
          <Route path="onboarding" element={<Onboarding />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
