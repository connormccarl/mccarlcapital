import { NextRequest, NextResponse } from "next/server";
import { visitersRepo } from "@/lib";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  /*
  try {
    const visiter = await visitersRepo.getById(params.id);
    return NextResponse.json(visiter);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 404 });
  }
    */
   return NextResponse.json({});
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  /*
  const body = await request.json();

  try {
    const updatedVisiter = await visitersRepo.update(params.id, body);
    return NextResponse.json(updatedVisiter, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 404 });
  }
  */ return NextResponse.json({});
}
