"use client";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import BookRideNavbar from './BookRideNavbar'; // Adjust the path as necessary
import AvailableCab from './AvailableCab';
import SearchResults from './SearchResults';

const validateSchema = Yup.object().shape({
  pickupLocation: Yup.string().required('Pickup Location is required'),
  destinationLocation: Yup.string().required('Destination Location is required'),
});

const BookRide = () => {
  const [activeFeild, setActiveFeild] = useState('');

  const handleOnSubmit = (values) => {
    // Handle form submission logic here
    console.log('Submitted values:', values);
  };

  const onFocused = (e) => {
    const name = e.target.name;
    setActiveFeild(name);
    // Handle focus logic here
  };

  const formik = useFormik({
    initialValues: {
      pickupLocation: '',
      destinationLocation: '',
    },
    validationSchema: validateSchema,
    onSubmit: handleOnSubmit,
  });

  return (
    <div className='w-full'>
      <BookRideNavbar />
      {/* Add other content for BookRide if necessary */}
      <div className='px-3 lg:px-5 mt-10'>
        <form onSubmit={formik.handleSubmit}>
          {/* Pickup Location Input */}
          <div className='mb-6'>
            <div className='border p-2 flex items-center relative'>
              <p className='pr-3'>From</p>
              <input
                name='pickupLocation'
                placeholder='Enter Pickup Location'
                value={formik.values.pickupLocation}
                onChange={(event) => {
                  const value = event.target.value;
                  formik.setFieldValue('pickupLocation', value);
                  // dispatch(searchLocation(value));
                }}
                onBlur={formik.handleBlur}
                className='border-none outline-none flex-grow'
                onFocus={onFocused}
              />

              {activeFeild === 'pickupLocation' &&

                formik.values.pickupLocation && (
                  <div className=''>
                    <SearchResults
                      setActiveFeild={setActiveFeild}
                      latitude_key={'pickup_latitude'}
                      longitude_key={'pickup_longitude'}
                      area_key={'pickup_area'}
                    />
                  </div>
                )}

            </div>
            {formik.touched.pickupLocation && formik.errors.pickupLocation && (
              <div className=''>
                <p className='text-xs text-red-500 px-2 '>
                  {formik.errors.pickupLocation}
                </p>
              </div>
            )}
          </div>

          {/* Destination Location Input */}
          <div className='mb-6'>
            <div className='border p-2 flex items-center relative'>
              <p className='pr-3'>To</p>
              <input
                name='destinationLocation'
                placeholder='Enter Destination Location'
                value={formik.values.destinationLocation}
                onChange={(event) => {
                  const value = event.target.value;
                  formik.setFieldValue('destinationLocation', value);
                  // dispatch(searchLocation(value));
                }}
                onBlur={formik.handleBlur}
                className='border-none outline-none flex-grow'
                onFocus={onFocused}
              />

              {activeFeild === 'destinationLocation' &&
                formik.values.destinationLocation && (
                  <div className=''>
                    <SearchResults
                      setActiveFeild={setActiveFeild}
                      latitude_key={'destination_latitude'}
                      longitude_key={'destination_longitude'}
                      area_key={'destination_area'}
                    />
                  </div>
                )}

            </div>
            {formik.touched.destinationLocation && formik.errors.destinationLocation && (
              <div className=''>
                <p className='text-xs text-red-500 px-2 '>
                  {formik.errors.destinationLocation}
                </p>
              </div>
            )}
          </div>

          <button className='relative inline-flex items-center justify-center w-full mx-5 p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'>
            <span className='w-full text-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
              Find Driver
            </span>
          </button>
        </form>
      </div>

      <div className='-z-10 px-2 py-5 lg:px-5 mt-5 '>
        <p className='text-2xl my-5'>Available Cabs</p>
        <div className='space-y-5 '>
          <AvailableCab />
          <AvailableCab />
          <AvailableCab />
          <AvailableCab />
        </div>
      </div>
    </div>
  );
};

export default BookRide;
