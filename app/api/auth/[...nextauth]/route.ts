import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import { db } from "../../../_lib/prisma";
import { Adapter } from "next-auth/adapters";
const handler = NextAuth({
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ]
})

export {handler as GET, handler as POST}