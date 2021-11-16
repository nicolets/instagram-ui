import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getOne } from '../services/post.service';
import config from '../config/index';
import './PostPage.scss';

function PostPage(props) {

    const { id } = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
       getOne(id)
        .then(data => setPost(data))
        .catch(console.log)
    }, [id])

    return (
        <div className="PostPage">
            {post && <div>
                <h1>{post.body}</h1>
                <img src={config.apiUrl + '/' + post.image} />
                <div>
                    <strong>{post.author.username}</strong>
                </div>
            </div>}
            <div className="PostPage__comments">
                <h1>comments: </h1>
            </div>
        </div>
    );
}

export default PostPage;
