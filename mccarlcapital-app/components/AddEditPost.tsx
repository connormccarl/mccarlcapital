'use client'
import React, { useState, useEffect, FormEvent } from 'react'
import { Button, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import Tiptap from '@/components/TipTap'

import { postService, videoService } from '@/services'

const publishingOptions = [
    { title: 'Published', description: 'This post can be viewed by anyone who has the link.', published: true },
    { title: 'Draft', description: 'This post will no longer be publicly accessible.', published: false },
];

const categories = [
    { name: 'None', value: '' },
    { name: 'Education', value: 'education' },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

const AddEditPost = (props: any) => {
    const [status, setStatus] = useState(publishingOptions[1]);
    const [title, setTitle] = useState(props?.video ? props?.video?.title : '');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');
    const [video, setVideo] = useState(props?.video ? props?.video?.id : '');
    const [videos, setVideos] = useState<any[]>([]);
    const [category, setCategory] = useState(categories[0].value);

    useEffect(() => {
        videoService.getAllToMatch()
            .then(x => setVideos(x.sort((a: any, b: any) => a.publishedAt.localeCompare(b.publishedAt))));
    }, []);

    useEffect(() => {
        setSlug(title.toLowerCase().replaceAll(" – ", " ").replaceAll(" ", "-"));
    }, [title]);

    const copyLink = () => {
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_URI + "/blog/" + slug);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const newPost = {
            title,
            slug,
            content,
            tag: category,
            videoId: video,
            published: status.published,
        };

        postService.add(newPost).then((x) => console.log("done"));
    }

  return (
    <form onSubmit={handleSubmit} noValidate className='group'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
            <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-4'>
                    <h2 className="text-base font-semibold leading-7 text-black">New Post</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Please fill out the following information for your new blog post.
                    </p>
                </div>
                <div className='sm:col-span-2 sm:col-start-5'>
                    <Listbox value={status} onChange={setStatus}>
                        <Label className="sr-only">Change published status</Label>
                        <div className="relative">
                            <div className="inline-flex divide-x divide-gold rounded-md shadow-sm">
                                <div className="inline-flex items-center gap-x-1.5 rounded-l-md bg-gold px-3 py-2 text-white shadow-sm">
                                    {status.published ? 
                                        <EyeIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
                                    :
                                        <EyeSlashIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
                                    }
                                   
                                    <p className="text-sm font-semibold">{status.title}</p>
                                </div>
                                <ListboxButton className="inline-flex items-center rounded-l-none rounded-r-md bg-gold p-2 hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-gray-50">
                                    <span className="sr-only">Change published status</span>
                                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-white" />
                                </ListboxButton>
                            </div>

                            <ListboxOptions
                            transition
                            className="absolute right-0 z-10 mt-10 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in"
                            >
                            {publishingOptions.map((option) => (
                                <ListboxOption
                                key={option.title}
                                value={option}
                                className="group cursor-default select-none p-4 text-sm text-black data-[focus]:bg-gold data-[focus]:text-white"
                                >
                                <div className="flex flex-col">
                                    <div className="flex justify-between">
                                    <p className="font-normal group-data-[status]:font-semibold">{option.title}</p>
                                    <span className="text-gold group-data-[focus]:text-white [.group:not([data-status])_&]:hidden">
                                        <CheckIcon aria-hidden="true" className="h-5 w-5" />
                                    </span>
                                    </div>
                                    <p className="mt-2 text-gray-500 group-data-[focus]:text-white">{option.description}</p>
                                </div>
                                </ListboxOption>
                            ))}
                            </ListboxOptions>
                        </div>
                    </Listbox>
                </div>
            </div>
          
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-black">
                        Title
                    </label>
                    <div className="mt-2">
                        <input
                        id="title"
                        name="title"
                        value={title}
                        onChange={e => {
                            setTitle(e.target.value);
                        }}
                        type="text"
                        autoComplete="title"
                        className="peer block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6 invalid:[&:not(:placeholder-shown):not(:focus)]:ring-red-500"
                        required
                        />
                        <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                            Required
                        </span>
                    </div>
                   
                </div>

                <div className="sm:col-span-full">
                <label htmlFor="slug" className="block text-sm font-medium leading-6 text-black">
                    Slug
                </label>
                <div className="mt-2 flex">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gold w-9/12">
                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">mccarlcapital.com/blog/</span>
                        <input
                            id="slug"
                            name="slug"
                            value={slug}
                            onChange={e => setSlug(e.target.value.replaceAll(" ","-"))}
                            type="text"
                            autoComplete="slug"
                            className="peer block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            required
                        />
                        <span className="mt-2 me-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                            Required
                        </span>
                    </div>
                    <Button className="ms-2 min-w-fit text-sm" onClick={copyLink}>Copy Link</Button>
                </div>
            </div>

            <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-black">
                    Content
                </label>
                <div className="mt-2">
                    <Tiptap 
                        content={content}
                        onChange={(newContent: string) => setContent(newContent)}
                        className=""
                    />
                    {/*<textarea
                    id="content"
                    name="content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    rows={10}
                    className="peer block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6 invalid:[&:not(:placeholder-shown):not(:focus)]:ring-red-500"
                    defaultValue={''}
                    required
                    />*/}
                    <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                        Required
                    </span>
                </div>
            </div>
                
            <div className="sm:col-span-4">
                <label htmlFor="video" className="block text-sm font-medium leading-6 text-black">
                    YouTube Video
                </label>
                <div className="mt-2">
                    {videos ? (
                        <select
                        id="video"
                        name="video"
                        value={video}
                        onChange={e => setVideo(e.target.value)}
                        autoComplete="video"
                        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gold sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option value=''>None</option>
                            {videos.map((option: any) => (
                                <option 
                                    key={option.id}
                                    value={option.id}
                                    className={classNames(
                                        option._count.posts > 0 ? 'text-red-600' : 'text-green'
                                    )}      
                                >{option.title}</option>
                            ))}
                        </select>
                    ) : (
                        <svg className="animate-spin text-gray-300 h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    )}
                </div>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="category" className="block text-sm font-medium leading-6 text-black">
                        Category
                    </label>
                    <div className="mt-2">
                        <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        autoComplete="category"
                        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gold sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            {categories.map((option) => (
                                <option key={option.value} value={option.value}>{option.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-black">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-gold px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold group-invalid:pointer-events-none group-invalid:opacity-30"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default AddEditPost