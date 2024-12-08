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

export const visiterSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string(),
    type: z.string(),
    streetAddress1: z.string(),
    streetAddress2: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    country: z.string(),
})