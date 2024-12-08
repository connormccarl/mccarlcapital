import prisma from "@/prisma/db";
import { UpdateVisiter } from "../models";

import { visiterSchema } from "./schemas";

export const visitersRepo = {
    add,
    getById,
    update,
};

async function add() {
    const user = await prisma.visiter.create({
        data: {
            type: "general"
        }
    });

    return user.id;
}

async function getById(id: string) {
    const visiter = await prisma.visiter.findUnique({
        where: { id: id }
    });

    if(!visiter)
        throw 'Visiter not found';

    return visiter;
}

async function update(id: string, params: UpdateVisiter) {
    const validation = visiterSchema.safeParse(params);
    if(!validation.success)
        throw validation.error.errors;
    
    const visiter = await prisma.visiter.findUnique({
        where: { id: id }
    });

    // validate
    if(!visiter)
        throw 'Visiter not found.';
    if(visiter.email !== params.email && await prisma.visiter.findUnique({ where: { email: params.email }}))
        throw 'Email "' + params.email + '" is already taken.';

    params.updatedAt = new Date();

    const updateVisiter = await prisma.post.update({
        where: { id: id },
        data: params
    });

    return updateVisiter;
}