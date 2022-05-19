import React from 'react'
import PostItem from './PostItem'
import './Posts.css'
export default function Posts() {
    const posts = [
        {
            upvote : 547,
            image : "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1503&q=80",
            title : "Questions about new wallet",
            user: "theindependentonline",
            subreddit: "politics",
            comment_count: 284,
        }
    ]
    return (
        <div>
            { posts.map(post => (
                <PostItem post={post} />
                ))}
        </div>
    )
}