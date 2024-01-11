import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';

const SignupForm = () => {
  const { signup } = useSignup()
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required').matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    ),
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      first_name: '',
      last_name: ''
    },
    validationSchema,
    onSubmit: (values) => {
      signup(values)
    },
  });

  return (
    <div className='min-w-full min-h-[100vh] flex justify-center align-middle items-center'>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Signup</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="first_name" className="block text-gray-600">First Name</label>
            <input
              type="text"
              id="first_name"
              className="w-full mt-1 p-2 border rounded"
              {...formik.getFieldProps('first_name')}
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <div className="text-red-500">{formik.errors.first_name}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label htmlFor="last_name" className="block text-gray-600">Last Name</label>
            <input
              type="last_name"
              id="last_name"
              className="w-full mt-1 p-2 border rounded"
              {...formik.getFieldProps('last_name')}
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <div className="text-red-500">{formik.errors.last_name}</div>
            ) : null}
          </div>
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
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Signup</button>
          <div className="mt-4 text-center">
            {/* Link to the signup form */}
            <p className="text-gray-600">
              Already have an account? <Link to="/" className="text-blue-500">Login here</Link>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
