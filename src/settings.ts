import { config } from "dotenv";
config();
export const SETTINGS = {
  PORT: process.env.PORT || 3004,
  PASS: { VIDEO: "/videos" },
};
