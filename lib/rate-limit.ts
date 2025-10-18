type RateLimitEntry = {
  count: number;
  expires: number;
};

const WINDOW_MS = 60 * 1000;
const MAX_ATTEMPTS = 5;

const store = new Map<string, RateLimitEntry>();

export function checkRateLimit(identifier: string) {
  const now = Date.now();
  const entry = store.get(identifier);

  if (entry && entry.expires > now) {
    if (entry.count >= MAX_ATTEMPTS) {
      const retryAfter = Math.ceil((entry.expires - now) / 1000);
      return {
        success: false,
        retryAfter,
      };
    }

    store.set(identifier, {
      count: entry.count + 1,
      expires: entry.expires,
    });

    return { success: true };
  }

  store.set(identifier, {
    count: 1,
    expires: now + WINDOW_MS,
  });

  return { success: true };
}
