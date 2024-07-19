'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import WestIcon from '@mui/icons-material/West';


const RideDetail = () => {
    const router = useRouter();
    console.log(router);

    const goBack = () => {
        window.history.back();
    };

    return (
        <div>
            <div className='flex items-center px-2 lg:px-5 py-2'>
                <WestIcon onClick={goBack} className='cursor-pointer' />
                <p className='text-center w-full '>HIHIHIHI</p>
            </div>
            <div className='px-2 lg:px-2 py-5' >
                <div className='border rounded-md'>
                    <div className='flex items-center border-b p-3'>
                        <span className='pr-5 opacity-70 text-xs font-semibold'>
                            PICKUP :{" "}
                        </span>
                        <span>Mumbai, Gokuldham</span>
                    </div>
                    <div className='flex items-center border-b p-3'>
                        <span className='pr-5 opacity-70 text-xs font-semibold'>
                            DROP :{" "}
                        </span>
                        <span>Delhi </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RideDetail;