import { z } from "zod";

export const userSchema = z.object({
    email: z.string().email()
});

export const videoSchema = z.object({
    title: z.string(),
    youtubeId: z.string(),
    publishedAt: z.date()
});

export const postSchema = z.object({
    title: z.string(),
    slug: z.string(),
    content: z.string(),
    published: z.boolean(),
});