"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@headlessui/react'
import Link from 'next/link'

import { videoService } from '@/services'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const Posts = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [loadingVideos, setLoadingVideos] = useState(false);

  useEffect(() => {
    videoService.getAll()
      .then(x => setVideos(x.sort((a: any, b: any) => b.publishedAt.localeCompare(a.publishedAt))));
  }, []);

  const getVideos = async () => {
    setLoadingVideos(true);
    await videoService.loadVideos()
      .then(() => setLoadingVideos(false));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Videos</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all videos or posts.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 flex">
          <Button onClick={getVideos} className="block rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-black me-2">
              {loadingVideos ? 
                <svg className="animate-spin text-gray-300 h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              : ''}
              Load Videos
          </Button>
          <Button
            type="button"
            className="block rounded-md bg-gold-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 hover:text-white"
          >
            Add Post
          </Button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            { videos ?
            (
              <table className="min-w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-16 z-10 border-b border-gray-300 bg-white py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                    >
                      <span className="sr-only">Number</span>
                    </th>
                    <th
                      scope="col"
                      className="sticky top-16 z-10 border-b border-gray-300 bg-white py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="sticky top-16 z-10 border-b border-gray-300 bg-white py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {videos.map((video: any, videoIdx: number) => (
                    <tr key={video.id}>
                      <td
                        className={classNames(
                          videoIdx !== videos.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                        )}
                      >
                        {videos.length - videoIdx}
                      </td>
                      <td
                        className={classNames(
                          videoIdx !== videos.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                        )}
                      >
                        {video.title}
                      </td>
                      <td
                        className={classNames(
                          videoIdx !== videos.length - 1 ? 'border-b border-gray-200' : '',
                          'relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-8 lg:pr-8',
                        )}
                      >
                        <Link href="#" className="text-gold-400 hover:text-green">
                          Make a Post<span className="sr-only">, {video.title}</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) :
            (
              <div className="flex justify-center">
                <svg className="animate-spin text-gray-300 h-10 w-10 mr-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts