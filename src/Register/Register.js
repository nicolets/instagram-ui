import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from './register.schema';
import { register } from '../services/user.service';
import './Register.scss';

function Register() {

    async function submit(values) {
        try {
            const user = await register(values);
            console.log(user);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="Register">
            <h1 className="Register__title">Registration</h1>
            <Formik
                initialValues={{ username: '', email: '', password: '' }}
                validationSchema={registerSchema}
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
                        <label htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email" placeholder="Your email" />
                        <div className="error">
                            <ErrorMessage name="email" />
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
                        <button type="submit" className="btn-register">Register</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Register;