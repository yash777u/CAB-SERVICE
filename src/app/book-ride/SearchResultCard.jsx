"use client";

import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const SearchResultCard = ({ item, latitude_key,longitude_key, setActiveFeild, area_key }) => {
 
  const pickup_lattitude = 19.0785451
  const pickup_longitude = 72.8767179
  const pickup_area = "Mumbai, Mumbai Sunderban, Maharashtra, India"
  const destination_latitude =42.2781401
  const destination_longitude = 74.9159946
  const destination_area = "Delhi, Town of Delhi, Delware Country, New York, United States"

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSelect = () => {
    const params = new URLSearchParams(searchParams);
    params.set([latitude_key], pickup_lattitude);
    params.set([longitude_key], pickup_longitude);
    params.set([area_key], pickup_area);
    
    router.replace(pathname + "?" + params.toString());

    console.log("Handle select");
    /* console.log("search params", searchParams, " path name", pathname); */
    // Add logic for selection, such as updating state or making API calls
  };

  return (
    <div onClick={handleSelect} className='flex items-center py-2 z-10 bg-white cursor-pointer'>
      <div className='pr-5'>
        <LocationOnIcon />
      </div>
      <div>
        <p className='font-semibold'>{pickup_area}</p>
        <p className='font-semibold opacity-60'>
        {item ? item.display_name : `${pickup_latitude}, ${pickup_longitude}`}
        </p>
      </div>
    </div>
  )
}

export default SearchResultCard