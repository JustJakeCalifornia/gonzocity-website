export const GONZO_MODULES = [
  "GullyGonzo",
  "RatGonzo",
  "StreetGonzo",
  "ParkGonzo",
] as const;

export type GonzoModule = (typeof GONZO_MODULES)[number];
