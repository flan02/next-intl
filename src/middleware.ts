import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['mx', 'us', 'br', 'fr', 'jp', 'de'],

  // Used when no locale matches
  defaultLocale: 'mx'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(mx|us|br|fr|jp|de)/:path*']
};