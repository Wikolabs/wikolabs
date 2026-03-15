import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except:
  // - API routes
  // - Next.js internals (_next)
  // - Static files (images, favicon, etc.)
  // - Admin panel (stays in French, no locale prefix)
  matcher: ["/((?!api|_next|admin|.*\\..*).*)"],
};
