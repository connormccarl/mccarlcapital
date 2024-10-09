'use client'
import React, { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

import AddEditPost from '@/components/AddEditPost'
import { videoService } from '@/services'

const Post = () => {
    const params = useSearchParams();
    const search = params.get('video');
    
    const [video, setVideo] = useState(null);

    useEffect(() => {
        if(!search) return;

        videoService.getById(search)
            .then(x => setVideo(x))
            .catch(alert);
    }, []);

  return (
      <AddEditPost video={video} />
  )
}

const NewPost = () => {
  return (
    <Suspense>
      <Post />
    </Suspense>
  )
}

export default NewPost