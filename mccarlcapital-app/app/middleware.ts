import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    // track user with cookie
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    console.log("ip: " + ip)

    return NextResponse.next(); // Pass control to the next middleware
}