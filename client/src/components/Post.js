import React from "react"

const Post = props => {
    const {title, summary, imgUrl, votes, user, thread, timeStamp, tags,
    comments} = props
    let image = imgUrl || "https://picsum.photos/200?random"
    return (
        <div className={"post"}>
            {title} <br/>
            {summary}
            {/*<div className={"postImage"} style={{backgroundImage:`url(${image})`}}/>*/}
            <br/>
            Votes: {votes} <br/>
            User: {user}
            <hr/>

        </div>
    )
}

export default Post