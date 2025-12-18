import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
  console.log("👉 CREDENTIALS RECEIVED:", credentials)
  console.log("👉 ENV EMAIL:", process.env.ADMIN_EMAIL)
  console.log("👉 ENV PASSWORD:", process.env.ADMIN_PASSWORD)

  if (!credentials?.email || !credentials?.password) {
    console.log("❌ Missing credentials")
    return null
  }

  const isValidUser =
    credentials.email === process.env.ADMIN_EMAIL &&
    credentials.password === process.env.ADMIN_PASSWORD

  console.log("👉 IS VALID USER:", isValidUser)

  if (isValidUser) {
    return {
      id: "1",
      name: "Admin",
      email: credentials.email,
    }
  }

  return null
}

    })
  ],
  pages: {
    signIn: "/login", // Custom login page path
  },
  session: {
    strategy: "jwt", // JSON Web Token strategy (stateless)
  },
  secret: process.env.NEXTAUTH_SECRET,
};