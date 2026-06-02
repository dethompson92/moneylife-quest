const TEACHER_UNLOCK_KEY = "moneylife.teacher.unlocked.v1";

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
  return Boolean(getTeacherPasswordHash());
}

export async function validateTeacherPassword(input: string): Promise<boolean> {
  const configuredHash = getTeacherPasswordHash();
  if (!configuredHash) return false;
  const candidateHash = await sha256Hex(input.trim());
  return timingSafeEqual(candidateHash, configuredHash);
}

function getTeacherPasswordHash(): string {
  return import.meta.env.VITE_TEACHER_PASSWORD_HASH?.trim().toLowerCase() ?? "";
}

async function sha256Hex(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqual(left: string, right: string): boolean {
  if (left.length !== right.length) return false;
  let mismatch = 0;
  for (let index = 0; index < left.length; index += 1) {
    mismatch |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return mismatch === 0;
}
