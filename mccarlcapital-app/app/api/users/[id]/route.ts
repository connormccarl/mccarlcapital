import { NextRequest, NextResponse } from "next/server";
import { usersRepo } from "@/lib";

export default {
    get: getById,
    put: update,
    delete: _delete
}

async function getById(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const newUser = await usersRepo.getById(parseInt(params.id));
        return NextResponse.json(newUser);
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 404 });
    }
}


async function update(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const body = await request.json();

    try {
        const updatedUser = await usersRepo.update(parseInt(params.id), body);
        return NextResponse.json(updatedUser, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 404 });
    }
}

async function _delete(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await usersRepo.delete(parseInt(params.id));
        return NextResponse.json({});
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 404 });
    }
}