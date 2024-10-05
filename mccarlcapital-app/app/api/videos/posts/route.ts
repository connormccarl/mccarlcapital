import { NextRequest, NextResponse } from "next/server";
import { videosRepo } from "@/lib";

export async function GET(request: NextRequest) {
    const videos = await videosRepo.getAllToMatch();

    return NextResponse.json(videos);
}