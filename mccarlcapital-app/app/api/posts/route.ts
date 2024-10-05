import { NextRequest, NextResponse } from "next/server";
import { postsRepo } from "@/lib";

export async function POST(request: NextRequest) {
    const body = await request.json();

    postsRepo.add({ 
        title: body.title,
        slug: body.slug,
        content: body.content,
        published: body.published,
        tag: body.tag.length !== 0 ? body.tag : null,
        videoId: body.videoId.length !== 0 ? body.videoId : null,
     });

    return NextResponse.json({})
}

export async function GET(request: NextRequest) {
    const videos = await postsRepo.getAll();

    return NextResponse.json(videos);
}

