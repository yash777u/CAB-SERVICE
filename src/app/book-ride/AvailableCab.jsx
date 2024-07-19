import React from 'react'

const AvailableCab = () => {
  return (
    <div className='flex items-center border rounded-md py-3 px-5 cursor-pointer -z-10'>
        <div>
            <img src='https://www.deepamcabs.com/images/welcome-img.jpg' alt='' className='w-7' />
            <p className='font-semibold text-xs'>1 min</p>
        </div>
        <div className='pl-5 text-sm'>
            <p className='font-semibold'> Prime Suv</p>
            <p className='text-xs -z-10'> Suv with Free Wifi</p>
        </div>
    </div>
  )
}

export default AvailableCab
