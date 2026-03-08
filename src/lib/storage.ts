const PREFIX = 'coaching_';

export function getItem<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    console.warn('Failed to write to localStorage:', key);
  }
}

export function removeItem(key: string): void {
  localStorage.removeItem(PREFIX + key);
}
