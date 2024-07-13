import { BehaviorSubject } from 'rxjs';

import { NewUser, UpdateUser } from '@/lib';

const baseUrl = `${process.env.NEXT_PUBLIC_API_URI}/users`;
const userSubject = new BehaviorSubject(typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') as string));

export const userService = {
    user: userSubject.asObservable(),
    get userValue() { return userSubject.value },
    getAll,
    getById,
    update,
    delete: _delete
};

async function create(user: NewUser) {
    await fetch(`${baseUrl}/register`, user);
}

async function getAll() {
    return await fetchWrapper.get(baseUrl);
}

async function getById(id: string) {
    return await fetchWrapper.get(`${baseUrl}/${id}`);
}

async function update(id: string, params: UpdateUser) {
    await fetchWrapper.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id: string) {
    await fetchWrapper.delete(`${baseUrl}/${id}`);
}