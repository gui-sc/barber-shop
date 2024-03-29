import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import { db } from "../../../_lib/prisma";
import { Adapter } from "next-auth/adapters";

export const authOptions = {
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async session({ session, user }: any) {
            session.user = { ...session.user, id: user.id } as {
                id: string;
                name: string;
                email: string;
            };
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }