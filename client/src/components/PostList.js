import React from "react"
import Post from "./Post";
import "../styles/posts.css"

const PostList = props => {
    return(
        <div className={"postList"}>
            {props.posts.map(post =>
                <Post
                    {...post}
                    key={post._id}
                />)}
        </div>
    )
}

export default PostList