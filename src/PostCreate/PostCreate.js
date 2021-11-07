import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { postCreateSchema } from './postCreate.schema';
import './PostCreate.scss';;
import { create } from '../services/post.service';
import { useHistory } from 'react-router-dom';

function PostCreate(props) {

    const history = useHistory();

    async function submit(values) {
        try {
            console.log(values)
            const post = await create(values);
            history.push('/');
            console.log(post);
        } catch (e) {
            console.log(e);
        }
    }

    return (
<div className="PostCreate">
            <h1 className="PostCreate__title">Create new post</h1>
            <Formik
                initialValues={{ body: '', image: null }}
                validationSchema={postCreateSchema}
                onSubmit={submit}>
                {({ values, setFieldValue }) => (
                    <Form>
                        <div className="form-group">
                            <input type="file" name="image" onChange={e => {
                                setFieldValue('image', e.currentTarget.files[0])
                            }} />
                            <div className="error">
                                <ErrorMessage name="image" />
                            </div>
                        </div>
                        { values.image && <img src={URL.createObjectURL(values.image)} alt="preview" width="200px" height="200px" /> }
                        <div className="form-group">
                            <label htmlFor="body"></label>
                            <Field id="body" name="body" placeholder="Write your post" className="post" />
                            <div className="error">
                                <ErrorMessage name="body" />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn-postCreate">Create Post</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default PostCreate;
