// Simple in-memory rate limiter (resets on server restart — fine for v1)
const store = new Map<string, { count: number; date: string }>()

const DAILY_LIMIT = 5

function today(): string {
  return new Date().toISOString().slice(0, 10)
}

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const key = ip
  const d = today()
  const entry = store.get(key)

  if (!entry || entry.date !== d) {
    store.set(key, { count: 1, date: d })
    return { allowed: true, remaining: DAILY_LIMIT - 1 }
  }

  if (entry.count >= DAILY_LIMIT) {
    return { allowed: false, remaining: 0 }
  }

  entry.count++
  return { allowed: true, remaining: DAILY_LIMIT - entry.count }
}
