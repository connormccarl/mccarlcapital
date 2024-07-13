export interface NewUser {
    email: string,
    password?: string,
    firstName?: string,
    lastName?: string
};

export interface UpdateUser {
    email?: string,
    password?: string,
    firstName?: string,
    lastName?: string,
    updatedAt: Date
};