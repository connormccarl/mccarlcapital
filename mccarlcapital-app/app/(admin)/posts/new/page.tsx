'use client'
import React, { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

import AddEditPost from '@/components/AddEditPost'
import { videoService } from '@/services'

const NewPost = () => {
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
    <Suspense>
      <AddEditPost video={video} />
    </Suspense>
  )
}

export default NewPost