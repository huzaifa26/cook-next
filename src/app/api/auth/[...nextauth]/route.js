import { User } from "@/models/User";
import connect from "@/utils/db";
import NextAuth from "next-auth"
import bcrypt from "bcryptjs"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import LinkedInProvider from "next-auth/providers/linkedin";
import { getServerSession } from "next-auth";

export const authOptions={
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email })

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            )

            if (isPasswordCorrect) {
              return user
            } else {
              return false
            }
          }
        } catch (err) {
          return false
        }
      },
    })
  ],
  session: {
    jwt: true,
    maxAge: 14 * 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: 14 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({token,user, account, profile, isNewUser}){
      console.log(token,user, account, profile, isNewUser)
      token.user=user
      return token
    },
    async redirect({ url, baseUrl  }) {
      return baseUrl + '/student-dashboard';
    },
    async signIn({ profile, account }) {
      if (account.provider === "credentials") {
        return true
      }

      await connect();

      try {
        const user = await User.findOne({ email: profile.email })
        if (account.provider === 'google' || account.provider === 'facebook' || account.provider === 'linkedin') {
          if (user) {
            if (user.provider === account.provider) {
              return true
            } else {
              return '/signin'
            }
          } else {
            const newUser = new User({
              email: profile.email,
              email_verified: profile.email_verified,
              picture: profile.picture,
              name: profile.name,
              provider: account.provider,
            })

            try {
              await newUser.save();
              return true
            } catch (error) {
              console.log(error);
              return '/signin'
            }
          }
        }
      } catch (err) {
        throw new Error(err)
      }
      return '/signin'
    },
    async session({ session, token, user }) {
      const expirationTime = new Date();
      expirationTime.setMinutes(expirationTime.getMinutes() + 2);

      await connect();
      const dbUser = await User.findOne({ email: session.user.email })
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      // session.expires=expirationTime.toISOString()
      session.data = dbUser
      return session
    },

  },
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
