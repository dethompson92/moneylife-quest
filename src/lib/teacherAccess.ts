const TEACHER_UNLOCK_KEY = "moneylife.teacher.unlocked.v1";
const DEFAULT_TEACHER_PASSWORD = "future-life-budget";

export function isTeacherUnlocked(): boolean {
  try {
    return sessionStorage.getItem(TEACHER_UNLOCK_KEY) === "true";
  } catch {
    return false;
  }
}

export function unlockTeacherMode(): void {
  try {
    sessionStorage.setItem(TEACHER_UNLOCK_KEY, "true");
  } catch {
    // The in-memory React state still unlocks the current view.
  }
}

export function lockTeacherMode(): void {
  try {
    sessionStorage.removeItem(TEACHER_UNLOCK_KEY);
  } catch {
    // No-op when sessionStorage is unavailable.
  }
}

export function teacherPasswordAvailable(): boolean {
  return Boolean(getTeacherPassword());
}

export function validateTeacherPassword(input: string): boolean {
  const configured = getTeacherPassword();
  return Boolean(configured) && input.trim() === configured;
}

function getTeacherPassword(): string {
  if (import.meta.env.VITE_TEACHER_PASSWORD?.trim()) return import.meta.env.VITE_TEACHER_PASSWORD.trim();
  return import.meta.env.DEV ? DEFAULT_TEACHER_PASSWORD : "";
}
