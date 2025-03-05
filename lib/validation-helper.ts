export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .replace(/[\u200B-\u200D\uFEFF]/g, ""); // Remove zero-width spaces
};

export const normalizeEmail = (email: string): string => {
  return email.toLowerCase().trim().replace(/\s+/g, ""); // Remove all whitespace
};
