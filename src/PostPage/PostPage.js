import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getComments, getOne } from '../services/post.service';
import config from '../config/index';
import './PostPage.scss';
import PostComment from '../common/Post/PostComment/PostComment';

function PostPage(props) {

    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
       getOne(id)
        .then(data => setPost(data))
        .catch(console.log)
    }, [id])

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
   }, [comments, post]);

    return (
        <div className="PostPage">
            {post && <div>
                <h1>{post.body}</h1>
                <img className="PostPage__postPhoto" src={config.apiUrl + '/' + post.image} />
                <div className="PostPage__username">
                    <strong>{post.author.username}</strong>
                </div>
            </div>}
            <div className="PostPage__comments">
                <h1>comments: </h1>
                <hr />
                {comments.map(comment => {
                        return <PostComment key={comment._id} comment={comment} />
                })}
            </div>
            <div className="backdrop"></div>
        </div>
    );
}

export default PostPage;
