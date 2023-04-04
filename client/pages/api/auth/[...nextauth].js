import NextAuth from "next-auth"
import LinkedinProvider from "next-auth/providers/linkedin"
export default NextAuth({
    // Configure one or more authentication providers
    providers: [
      LinkedinProvider({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        
      }),
      // ...add more providers here
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            console.log("🚀 ~ file: [...nextauth].js:15 ~ jwt ~ account:", account)
            console.log("🚀 ~ file: [...nextauth].js:16 ~ jwt ~ token:", token)
            console.log("🚀 ~ file: [...nextauth].js:16 ~ jwt ~ profile:", profile)
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
              token.accessToken = account.access_token
              token.id = profile.id
            }


            
            return token
        }
    }
    
  })