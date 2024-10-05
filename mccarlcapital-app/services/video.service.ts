import { fetchWrapper } from "@/lib";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URI}/videos`;

export const videoService  = {
    loadVideos,
    getAll,
    getAllToMatch,
    getById
};

async function loadVideos() {
    await fetchWrapper.post(`${baseUrl}`);
}

async function getAll() {
    return fetchWrapper.get(`${baseUrl}`);
}

async function getAllToMatch() {
    return fetchWrapper.get(`${baseUrl}/posts`);
}

async function getById(id: string) {
    return await fetchWrapper.get(`${baseUrl}/${id}`);
}