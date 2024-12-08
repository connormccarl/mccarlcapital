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
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    type: z.string().optional(),
    streetAddress1: z.string().optional(),
    streetAddress2: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
    country: z.string().optional(),
})