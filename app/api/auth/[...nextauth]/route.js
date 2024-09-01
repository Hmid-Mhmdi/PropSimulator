import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  async session({ session }) {
    return session;
  },
  async signIn({ profile }) {
    return true;
  },
});

const GET = (request) => {
  return new Response("Hello, Next.js!");
};

export { GET };
