import { NextRequest, NextResponse } from "next/server";
import { usersRepo } from "@/lib";

export default {
    get: getAll,
    post: create

};

async function getAll(request: NextRequest) {
    const users = await usersRepo.getAll();

    return NextResponse.json(users);
}

async function create(request: NextRequest) {
    const body = await request.json();

    try {
        const newUser = await usersRepo.create(body);
        return NextResponse.json(newUser, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 400 });
    }

}