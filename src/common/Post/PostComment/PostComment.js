import React from 'react';
import './PostComment.scss';

function PostComment({ comment }) {
   
    return (
        <ul className="PostCommentUl">
            <div style={{overflow:'auto '}}>
            <div><strong>{comment.author.username}</strong></div>
            <div>{comment.content}</div></div>
        </ul>
    );
}

export default PostComment;