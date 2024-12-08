import { fetchWrapper, UpdateVisiter } from "@/lib";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URI}/visiters`;

export const visiterService  = {
    add,
    getById,
    update,
};

async function getById(id: string) {
    return await fetchWrapper.get(`${baseUrl}/${id}`);
}

async function add() {
    return await fetchWrapper.post(`${baseUrl}`);
}

async function update(id: string, params: UpdateVisiter) {
    await fetchWrapper.put(`${baseUrl}/${id}`, params);
}