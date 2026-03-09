import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["en", "zh"];
let defaultLocale = "en";

function getLocale(request: NextRequest): string {
    const headers = { "accept-language": request.headers.get("accept-language") || "" };
    const languages = new Negotiator({ headers }).languages();
    try {
        return match(languages, locales, defaultLocale);
    } catch (e) {
        return defaultLocale;
    }
}

export function proxy(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;

    // Skip public files (images, etc) if not caught by config matcher
    if (pathname.startsWith('/_next') || pathname.includes('.')) return;

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        // Skip all API routes
        // Skip static files
        "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|.*\\..*).*)",
    ],
};
