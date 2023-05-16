
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Newsletter = () => {
  const handleSubmit = (values, {resetForm }) => {
    // Handle form submission
    console.log(values);


  // clear the form
  resetForm();

  };

  const validateForm = (values) => {
    const errors = {};

    // Perform form validation
    if (!values.email) {
      errors.email = 'Email is required';
    }

    return errors;
  };

  return (
    <div className='w-full py-16 text-white'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>
            Want tips and tricks to optimize your business?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <Formik initialValues={{ email: '' }} onSubmit={handleSubmit} validate={validateForm}>
            <Form>
              <Field
                className='p-3 flex w-full rounded-md text-black'
                type='email'
                name='email'
                placeholder='Enter Email'
              />
              <ErrorMessage name='email' component='div' className='text-red-500' />
              <button type='submit' className='bg-[#FBBF24] text-black rounded-md font-medium ml-4 my-6 px-6 py-3'>
                Subscribe
              </button>
            </Form>
          </Formik>
          <p>
            We care about the protection of your data. Read our{' '}
            <span className='text-[#FBBF24]'>Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
