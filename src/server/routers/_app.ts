import { procedure, router } from "../trpc";

export const appRouter = router({
  message: procedure.query(() => "hello"),
  now: procedure.query(() => new Date()),
});

export type AppRouter = typeof appRouter;
