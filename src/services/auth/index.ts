import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import EmailProvider from 'next-auth/providers/nodemailer'
import { prisma } from '../database'

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  pages: {
    signIn: '/auth/',
    signOut: '/auth/',
    error: '/auth/',
    verifyRequest: '/auth/',
    newUser: '/app'
  },
  debug: true,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const sessionModel = prisma.session
      await sessionModel.deleteMany({ where: { userId: user.id } })
      return true
    },
    async session({ session, user, token }) {
      if (session?.user && !session.user.id && token?.sub) {
        session.user.id = token.sub.toString()
      }
      return session
    }
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXAUTH_JWT_SECRET, // required
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    })
  ]
})
