import { authMiddleware } from "@clerk/nextjs";
  
export default authMiddleware({
  publicRoutes: "/public-route"
});
 
export const config = {

  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
