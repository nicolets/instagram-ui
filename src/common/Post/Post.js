import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config/index';
import { createComment, deletePostApi, getComments } from '../../services/post.service';
import Avatar from '../Avatar/Avatar';
import './Post.scss';
import PostComment from './PostComment/PostComment';
import PostDate from './PostDate/PostDate';
import PostLike from './PostLike/PostLike';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Post({ post, deletePost }) {
    
    const [comments, setComments] = useState([]);
    const [commentValue, setCommentValue] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
           try {
               const comments = await getComments(post._id);
               setComments(comments);
           } catch (err) {
               console.log(err)
           }
       }
       fetchComments();
   }, [post._id]);

   const submit = useCallback(async (e) => {
        e.preventDefault();
        const newComment = await createComment(post._id, commentValue);
        setComments([newComment, ...comments]);
        setCommentValue('')
   }, [post._id, commentValue, comments]);


    return (
        <div className="Post">
            <div className="PostUser">
                <Avatar size="md" />
                <Link className="postUserName" to={'/profile/' + post.author.username}>
                    <div>{post.author.username}</div>
                </Link>
                <div className="dateAndDelete">
                    <div className="PostDate">
                    <PostDate date={post.createdAt} />
                    </div>
                    <span className="trash">
                        <FontAwesomeIcon icon={faTrashAlt} onClick={() => deletePost(post._id)} />
                    </span>
                </div>
            </div>
            <Link to={'/post/' + post._id}>
                <img width='100%' className="postPhoto" src={config.apiUrl + '/' + post.image} />
            </Link>
            <p className='postContent'>{post.body}</p>
            <div className="likes">
                <PostLike postId={post._id} likes={post.likes} />
            </div>
            <div className="Post__footer">
                <form className="Post__createComment" onSubmit={submit}>
                    <input value={commentValue} onChange={e => setCommentValue(e.target.value)} type='text' placeholder="write your comment..." /> 
                    <button className="btnCreateComment" type="submit">Create Comment</button>
                </form>
                <div>
                    {comments.map(comment => {
                        return <PostComment key={comment._id} comment={comment} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Post;