import { initTRPC } from "@trpc/server";
import SuperJSON from "superjson";

const t = initTRPC.create({ transformer: SuperJSON });

// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;
