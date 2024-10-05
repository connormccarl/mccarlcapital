import prisma from "@/prisma/db";
import { NewPost, UpdatePost } from "../models";

import { postSchema } from "./schemas";

export const postsRepo = {
    add,
    getAll,
    getById,
    update,
    delete: _delete
};

async function add(params: NewPost) {
    const validation = postSchema.safeParse(params);
    if(!validation.success)
        throw validation.error.errors;

    const post = await prisma.post.findUnique({
        where: { slug: params.slug }
    });

    if(!post) {
        await prisma.post.create({
            data: params
        });
    } else {
        throw 'Post already exists with that slug.';
    }
}

async function getAll() {
    return await prisma.post.findMany();
}

async function getById(id: string) {
    const post = await prisma.post.findUnique({
        where: { id: id }
    });

    if(!post)
        throw 'Post not found';

    return post;
}

async function update(id: string, params: UpdatePost) {
    const validation = postSchema.safeParse(params);
    if(!validation.success)
        throw validation.error.errors;
    
    const post = await prisma.post.findUnique({
        where: { id: id }
    });

    // validate
    if(!post)
        throw 'Post not found.';
    if(post.slug !== params.slug && await prisma.post.findUnique({ where: { slug: params.slug }}))
        throw 'Slug "' + params.slug + '" is already taken.';

    params.updatedAt = new Date();

    const updatePost = await prisma.post.update({
        where: { id: id },
        data: params
    });

    return updatePost;
}

async function _delete(id: string) {
    const post = await prisma.post.findUnique({
        where: { id: id }
    });

    // validate
    if(!post)
        throw 'Post not found.';

    await prisma.post.delete({
        where: { id: id }
    });
}
