import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import SuperJSON from "superjson";
import { AppRouter } from "../server/routers/_app";

// TODO
export const getBaseUrl = () => {
  return "http://localhost:3000";
};

export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: SuperJSON,
  links: [httpBatchLink({ url: `${getBaseUrl()}/api/trpc` })],
});
