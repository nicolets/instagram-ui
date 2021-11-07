import React, { useEffect, useState } from 'react';
import { getFeed } from '../services/post.service';
import config from '../config/index';
import './Feed.scss';
import Post from '../common/Post/Post';

function Feed(props) {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
         const getPosts = async () => {
            try {
                const posts = await getFeed();
                setPosts(posts);
            } catch (err) {
                console.log(err)
            }
        }
        getPosts();
    }, []);

    console.log(posts);

    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}} className="Feed">
            <div className='Feed__wrapper'>
                {posts.map((post) => <Post post={post} key={post._id} />)}
            </div>
        </div>
    );
}

export default Feed;
