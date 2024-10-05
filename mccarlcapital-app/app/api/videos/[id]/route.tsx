import { NextRequest, NextResponse } from "next/server";
import { videosRepo } from "@/lib";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const video = await videosRepo.getById(params.id);
        return NextResponse.json(video);
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 404 });
    }
}