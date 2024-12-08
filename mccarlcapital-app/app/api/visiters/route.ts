import { NextRequest, NextResponse } from "next/server";
import { visitersRepo } from "@/lib";

export async function POST(request: NextRequest) {
    const visiter = await visitersRepo.add();

    return NextResponse.json(visiter)
}