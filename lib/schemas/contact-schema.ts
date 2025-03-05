import * as z from "zod";
import { normalizeEmail, sanitizeInput } from "../validation-helper";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." })
    .max(50, { message: "First name must not exceed 50 characters." })
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, {
      message:
        "First name can only contain letters, spaces, hyphens, and apostrophes.",
    })
    .transform(sanitizeInput),

  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." })
    .max(50, { message: "Last name must not exceed 50 characters." })
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, {
      message:
        "Last name can only contain letters, spaces, hyphens, and apostrophes.",
    })
    .transform(sanitizeInput),

  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Please enter a valid email address.",
    })
    .transform(normalizeEmail),

  organization: z
    .string()
    .min(2, { message: "Organization must be at least 2 characters." })
    .max(50, { message: "Organization must not exceed 100 characters." })
    .regex(/^[a-zA-Z0-9À-ÿ\s'&,.-]+$/, {
      message:
        "Organization name can only contain letters, numbers, spaces, and basic punctuation.",
    })
    .transform(sanitizeInput),

  requestReason: z.enum(["contact", "trial"], {
    required_error: "Please select a request type.",
  }),

  modules: z
    .array(z.enum(["GullyGonzo", "RatGonzo", "StreetGonzo", "ParkGonzo"]))
    .min(1, { message: "Please select at least one module." }),

  message: z
    .string()
    .max(500, { message: "Message must not exceed 500 characters." })
    .optional()
    .transform((str) => (str ? sanitizeInput(str) : str)),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
