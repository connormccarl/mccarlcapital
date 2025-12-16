import { NextRequest, NextResponse } from "next/server";
import { postsRepo } from "@/lib";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    /*
    try {
        const post = await postsRepo.getById(params.id);
        return NextResponse.json(post);
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 404 });
    }
    */ return NextResponse.json({})
}


export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    /*
    const body = await request.json();

    try {
        const updatedPost = await postsRepo.update(params.id, body);
        return NextResponse.json(updatedPost, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 404 });
    }
    */ return NextResponse.json({})
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    /*
    try {
        await postsRepo.delete(params.id);
        return NextResponse.json({});
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 404 });
    }
    */ return NextResponse.json({})
}