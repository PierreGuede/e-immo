import authConfig from "./auth.config"
import NextAuth from "next-auth"
export const { auth } = NextAuth(authConfig)


export default auth((req) => {
    // req.auth
  })
   
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  } 