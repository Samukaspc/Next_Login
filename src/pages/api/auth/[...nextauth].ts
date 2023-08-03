import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";

type ICredentials = {
  email: string,
  password: string
}

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      credentials: {},
      async authorize({ email, password }: ICredentials) {
        const reponse = await fetch('http://localhost:8000/user/session', {
          method: 'POST',
          body: new URLSearchParams({ email, password })
        })
        const data = await reponse.json();
        if (data) {
          return { ...data, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],
  secrect: process.env.SECRET,
}
export default NextAuth(authOptions)    