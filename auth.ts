import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { getUsersCollection } from "@/lib/mongodb"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          const users = await getUsersCollection();
          const user = await users.findOne({ email: credentials.email });

          if (!user) {
            // Create new user if doesn't exist (auto-register)
            const newUser = {
              email: credentials.email,
              password: credentials.password, // In production, hash this!
              name: credentials.email.split("@")[0],
              createdAt: new Date(),
              mealPlan: null,
            };
            
            const result = await users.insertOne(newUser);
            return {
              id: result.insertedId.toString(),
              email: newUser.email,
              name: newUser.name,
            };
          }

          // In production, verify password hash!
          if (user.password === credentials.password) {
            return {
              id: user._id.toString(),
              email: user.email,
              name: user.name,
            };
          }

          return null;
        } catch (error) {
          console.error("Auth error:", error);
          // Fallback to demo mode if MongoDB fails
          return {
            id: "1",
            name: "Demo Bruger",
            email: credentials.email,
          };
        }
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
})
