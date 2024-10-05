import { fetchWrapper, UpdatePost, NewPost } from "@/lib";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URI}/posts`;

export const postService  = {
    add,
    getAll,
    getById,
    update,
    delete: _delete
};

async function add(post: NewPost) {
    await fetchWrapper.post(`${baseUrl}`, post);
}

async function getAll() {
    return fetchWrapper.get(`${baseUrl}`);
}

async function getById(id: string) {
    return await fetchWrapper.get(`${baseUrl}/${id}`);
}

async function update(id: string, params: UpdatePost) {
    await fetchWrapper.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id: string) {
    await fetchWrapper.delete(`${baseUrl}/${id}`);
}