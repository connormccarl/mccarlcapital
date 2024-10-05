import prisma from "@/prisma/db";
import { NewUser, UpdateUser } from "../models";

import { userSchema } from "./schemas";

const secret = process.env.SECRET as string;

export const usersRepo = {
    getAll,
    getById,
    getByEmail,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await prisma.user.findMany();
}

async function getById(id: number) {
    const user = await prisma.user.findUnique({
        where: { id: id }
    });

    if(!user)
        throw 'User not found';

    return user;
}

async function getByEmail(email: string) {
    const user = await prisma.user.findUnique({
        where: { email: email.toLowerCase() }
    });

    if(!user)
        throw 'Email not found';

    return user;
}

async function create(params: NewUser) {
    const validation = userSchema.safeParse(params);
    if(!validation.success)
        throw validation.error.errors;

    params.email = params.email.toLowerCase();

    // validate
    const user = await prisma.user.findUnique({
        where: { email: params.email }
    });
    if(user)
        throw 'Email "' + params.email + '" is already taken';

    const newUser = await prisma.user.create({
        data: params
    });

    return newUser;
}

async function update(id: number, params: UpdateUser) {
    const validation = userSchema.safeParse(params);
    if(!validation.success)
        throw validation.error.errors;

    if(params.email)
        params.email = params.email.toLowerCase();
    
    const user = await prisma.user.findUnique({
        where: { id: id }
    });

    // validate
    if(!user)
        throw 'User not found';
    if(user.email !== params.email && await prisma.user.findUnique({ where: { email: params.email }}))
        throw 'Email "' + params.email + '" is already taken';

    params.updatedAt = new Date();

    const updatedUser = await prisma.user.update({
        where: { id: id },
        data: params
    });

    return updatedUser;
}

async function _delete(id: number) {
    const user = await prisma.user.findUnique({
        where: { id: id }
    });

    // validate
    if(!user)
        throw 'User not found';

    await prisma.user.delete({
        where: { id: id }
    });
}
