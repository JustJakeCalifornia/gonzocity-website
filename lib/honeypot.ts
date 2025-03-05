export function generateHoneypotField() {
  return {
    name: `contact_me_by_${Math.random().toString(36).slice(2)}`,
    timestamp: Date.now(),
  };
}

export function validateHoneypot(value: string) {
  return value === "";
}
