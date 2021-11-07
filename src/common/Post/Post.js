import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config/index';
import Avatar from '../Avatar/Avatar';
import './Post.scss';
import PostDate from './PostDate/PostDate';

function Post({post}) {

    return (
        <div className="Post">
            <div className="PostUser">
                <Avatar size="md" />
                <Link to={'/profile/' + post.author.username}>
                    <div className="postUserName">{post.author.username}</div>
                </Link>
                <div className="PostDate">
                <PostDate date={post.createdAt} />
                </div>
            </div>
            <Link to={'/post/' + post._id}>
                <img width='100%' className="postPhoto" src={config.apiUrl + '/' + post.image} />
            </Link>
            <p className='postContent'>{post.body}</p>
            <div className="likes">likes: {post.likes.length}</div>
        </div>
    );
}

export default Post;