import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signInSchema } from './Login.schema';
import { login } from '../services/user.service';
import { UserContext } from '../App';
import './Login.scss';

function Login() {

    const {loggedIn, setLoggedIn} = useContext(UserContext);
    console.log(loggedIn);

    async function submit(values) {
        try {
            const {token} = await login(values);
            setLoggedIn(true);
            localStorage.setItem('loggedIn', token);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="Login">
            <h1 className="Login__title">Sign-in</h1>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={signInSchema}
                onSubmit={submit}>
                <Form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <Field id="username" name="username" placeholder="Username" />
                        <div className="error">
                            <ErrorMessage name="username" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password:</label>
                        <Field type="password" id="password" name="password" placeholder="Password" />
                        <div className="error">
                            <ErrorMessage name="password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn-login">Sign-in</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Login;