import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div className='mt-5 bg-black'>
      <div className='container mx-auto py-8 px-4 md:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='footer-links'>
            <img src='https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/OLA.svg' alt='Ola Cabs Logo' className='w-32 mx-auto md:mx-0'/>
            <div className='flex items-center justify-center md:justify-start mt-5'>
              <InstagramIcon style={{ fontSize: 40 }} />
              <YouTubeIcon className='ml-5' style={{ fontSize: 40 }} />
              <XIcon className='ml-5' style={{ fontSize: 40 }} />
            </div>
          </div>
          <div className='footer-links'>
            <h3 className='text-lg font-semibold text-white'>Services</h3>
            <ul className='mt-4'>
              {['Book a cab', 'Drive with us', 'Outstation', 'Rental', 'Ola Money', 'Corporate'].map((item, index) => (
                <li key={index} className='mb-2'>
                  <a href='#' className='text-gray-400 hover:text-white'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='footer-links'>
            <h3 className='text-lg font-semibold text-white'>Company</h3>
            <ul className='mt-4'>
              {['About Us', 'Contact Us', 'Support', 'Careers', 'Media Centre'].map((item, index) => (
                <li key={index} className='mb-2'>
                  <a href='#' className='text-gray-400 hover:text-white'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='footer-links'>
            <h3 className='text-lg font-semibold text-white'>More</h3>
            <ul className='mt-4'>
              {['Ola S1', 'Futurefactory', 'Electric', 'Investor Relations'].map((item, index) => (
                <li key={index} className='mb-2'>
                  <a href='#' className='text-gray-400 hover:text-white'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-gray-800 py-4'>
        <div className='container mx-auto flex flex-col items-center'>
          <p className='text-center text-gray-400 text-sm'>&copy; 2022 Ola Electric Mobility Pvt Ltd. All Rights Reserved.</p>
          <div className='flex mt-2 flex-wrap justify-center'>
            <a href='#' className='text-gray-400 hover:text-white mx-2'>Notices</a>
            <a href='#' className='text-gray-400 hover:text-white mx-2'>Privacy Policy</a>
            <a href='#' className='text-gray-400 hover:text-white mx-2'>Terms of Service</a>
            <a href='#' className='text-gray-400 hover:text-white mx-2'>India</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
