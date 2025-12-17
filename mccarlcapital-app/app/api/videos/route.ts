import { NextRequest, NextResponse } from "next/server";
import { videosRepo } from "@/lib";

export async function POST(request: NextRequest) {
    /*
    const apiUrl = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${process.env.YOUTUBE_CHANNEL_UPLOAD_ID}&key=${process.env.YOUTUBE_API_KEY}`;

    const res = await fetch(apiUrl);
    const data = await res.json();

    data.items.forEach((video: any) => {
        videosRepo.add({
            title: video.snippet.title,
            youtubeId: video.snippet.resourceId.videoId,
            publishedAt: new Date(video.snippet.publishedAt)
        });
    });

    return NextResponse.json({})
    */ return NextResponse.json({});
}

export async function GET(request: NextRequest) {
    /*
    const videos = await videosRepo.getAll();

    return NextResponse.json(videos);
    */ return NextResponse.json({})
}