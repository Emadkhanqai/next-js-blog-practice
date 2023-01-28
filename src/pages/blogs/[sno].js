import { Router, useRouter } from 'next/router'
import React from 'react'

const Post = () => {
    const router = useRouter();
    const { sno } = router.query;
    return (
        <div>Post {sno}</div>
    )
}

export default Post