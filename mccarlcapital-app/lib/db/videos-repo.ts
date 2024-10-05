import prisma from "@/prisma/db";
import { NewVideo } from "../models";

import { videoSchema } from "./schemas";

export const videosRepo = {
    add,
    getAll,
    getAllToMatch,
    getById,
};

async function add(params: NewVideo) {
    const validation = videoSchema.safeParse(params);
    if(!validation.success)
        throw validation.error.errors;

    const video = await prisma.video.findUnique({
        where: { youtubeId: params.youtubeId }
    });

    if(!video)
        await prisma.video.create({
            data: params
        });
}

async function getAll() {
    return await prisma.video.findMany();
}

async function getAllToMatch() {
    const videosWithCount = await prisma.video.findMany({
        include: {
            _count: {
                select: { posts: true }
            }
        }
    });

    return videosWithCount;
}

async function getById(id: string) {
    const video = await prisma.video.findUnique({
        where: { id: id }
    });

    if(!video)
        throw 'Video not found';

    return video;
}