import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [posts, setPosts] = useState([])
    
    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             setPosts(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data)
        }
        fetchPosts();
    }, [])

    return (
        <>
            <h1>List of Posts</h1>
            {posts.map(post => <div key={post.id}>{post.body}</div>)}
        </>
    )
}

export default DataFetching