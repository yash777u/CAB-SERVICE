import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './Banner.css';

const Banner = () => {
  return (
    <div className='h-[90vh]'>
      <div className='cropped-image'></div>

      <div className='bannerMiniContainer container mx-auto px-4'>
        <p className='text-5xl font-bold text-white w-[25rem] mb-5'>Moving People and the World</p>

        <div className='py-5 bg-white w-[25rem] flex space-x-7 justify-around'>
          <p>Daily</p>
          <p>Rental</p>
          <p>Oustation</p>
        </div>

        <div className='p-5 banner-options'>
          <div className='flex items-center justify-start mt-5'>
            <div className='option-item'>
              <CircleIcon className='text-green-800 ' style={{ fontSize: 10 }} />
              <p className='text-xl text-slate-400'>Current Location</p>
            </div>
            <div className='option-item'>
              <CircleIcon className='text-red-800' style={{ fontSize: 10 }} />
              <p className='text-xl text-slate-400' >Current Location</p>
            </div>
              <div className='searchOlaCabButton cursor-pointer rounded-2xl flex items-center bg-white py-2 px-4 border border-s-slate-900'>
                <p className='text-white font-semibold mr-2'>Search</p>
                <span className='text-green-400'>Cab</span>
                <ArrowRightAltIcon className='text-green-800 ml-2' />
              </div>
            </div>
        </div>

        <div className='mt-10 border mb-20'>
          <img className='w-full' src='https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/index_banner.png' alt=''>
          </img>
        </div>


      </div>
    </div>
  );
}

export default Banner;
