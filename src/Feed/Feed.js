import React, { useContext, useEffect, useState } from 'react';
import { getFeed } from '../services/post.service';
import config from '../config/index';
import './Feed.scss';
import Post from '../common/Post/Post';
import {deletePostApi} from '../services/post.service';
import { UserContext } from '../App';

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

    async function deletePost(id) {
        const newPosts = [...posts]
        const filteredPosts = newPosts.filter(post => post._id !== id) //אם הפוסט איידי שונה מהאיידי שמחקתי-תכניס אותו.
        setPosts(filteredPosts)
        await deletePostApi(id)
   }

    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}} className="Feed">
            <div className='Feed__wrapper'>
                {posts.map((post) => <Post post={post} key={post._id} deletePost={deletePost} />)}
            </div>
        </div>
    );
}

export default Feed;
