/**
 * Koop's calorie estimation formula:
 * - 1 cal/kg/km on flat terrain
 * - 1:10 ratio for vertical: 1m gain = 10m horizontal equivalent
 */
export function estimateCalories(
  weightKg: number,
  distanceKm: number,
  elevationGainM: number = 0,
): number {
  const verticalEquivalentKm = elevationGainM / 100;
  const effectiveDistanceKm = distanceKm + verticalEquivalentKm;
  return Math.round(weightKg * effectiveDistanceKm);
}

/**
 * Estimate hourly calorie burn rate from duration and total calories.
 */
export function caloriesPerHour(totalCalories: number, durationMinutes: number): number {
  if (durationMinutes === 0) return 0;
  return Math.round(totalCalories / (durationMinutes / 60));
}

/**
 * Koop recommends 30-40% of hourly expenditure as carb intake.
 * Returns grams of carbohydrate per hour.
 */
export function carbTargetGPerHr(caloriesPerHr: number, percentage: number = 0.35): number {
  const carbCalories = caloriesPerHr * percentage;
  return Math.round(carbCalories / 4); // 4 cal per gram of carb
}
