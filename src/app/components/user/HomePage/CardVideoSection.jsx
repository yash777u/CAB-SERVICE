import React from 'react';

const CardVideoSection = () => {
  return (
    <div className='pt-40'>
      <h1 className='text-5xl font-bold my-10 text-center'>India's Most Ambitious Car</h1>
      <div className='relative' style={{ paddingTop: '56.25%' }}>
        <iframe
          title="India's Most Ambitious Car"
          className='absolute top-0 left-0 w-full h-full'
          src='https://www.youtube.com/embed/-0rBYhk7Fpw?autoplay=1&loop=1'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default CardVideoSection;
