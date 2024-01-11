import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

const LoginForm = () => {
  const {login} = useLogin()
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      login(values)
    },
  });

  return (
    <div className='min-w-full min-h-[100vh] flex justify-center align-middle items-center'>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border rounded"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border rounded"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
          <div className="mt-4 text-center">
            {/* Link to the signup form */}
            <p className="text-gray-600">
              Don't have an account? <Link to="/signup" className="text-blue-500">Sign up here</Link>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
