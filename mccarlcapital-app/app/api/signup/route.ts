import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/db";
import bcrypt from "bcrypt";

const schema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().min(5)
});

export async function POST(request: NextRequest) {
    /*
    const body = await request.json();

    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });

    body.email = body.email.toLowerCase();
    const user = await prisma.user.findUnique({ where: { email: body.email }});

    if(user) 
        return NextResponse.json({ error: 'User already exists' }, { status: 400 });

    const password = await bcrypt.hash(body.password, 10);

    let newUser = await prisma.user.create({
        data: {
            name: body.firstName + ' ' + body.lastName,
            email: body.email,
            password
        }
    });

    return NextResponse.json({ email: newUser.email });
    */ return NextResponse.json({})
}