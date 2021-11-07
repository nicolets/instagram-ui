import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '../common/Avatar/Avatar';
import Post from '../common/Post/Post';
import { getPosts } from '../services/post.service';
import './Profile.scss';
import ProfileHeader from './ProfileHeader/ProfileHeader';

function Profile(props) {

    const [posts, setPosts] = useState([]);

    const { username } = useParams();

    useEffect(() => {
        async function initUser() {
            const posts = await getPosts(username);
            setPosts(posts);
        }
        initUser();
    }, [username])

    return (
        <div className="Profile">
            <ProfileHeader username={username} postNum={posts.length} />
            <h2 className="postsH2">Posts: </h2>
            <div className="Profile__posts">
                {posts.map(post => (
                    <Post key ={post._id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Profile;