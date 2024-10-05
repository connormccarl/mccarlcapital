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

export interface NewVideo {
    title: string,
    youtubeId: string,
    publishedAt: Date
}

export interface NewPost {
    title: string,
    slug: string,
    content: string,
    tag?: string,
    videoId?: string,
    published: boolean
}

export interface UpdatePost {
    title?: string,
    slug?: string,
    content?: string,
    tag?: string,
    videoId?: string,
    published?: boolean,
    [key: string]: any
}