import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [GoogleProvider({ clientId: "dummy", clientSecret: "dummy" })],
};

export default NextAuth(authOptions);
