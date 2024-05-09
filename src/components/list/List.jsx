'use client';
import { useEffect, useRef, useState } from 'react';
import Card from '../card/Card';

const List = ({ title }) => {
  const wrapperRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => prev);
      wrapperRef.current.style.transform = `translateX(${-slideIndex * 50}%)`;
    }, 1000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const handleDirection = (direction) => {
    if (direction === 'left')
      setSlideIndex((prev) => (prev <= 0 ? 6 : prev - 1));
    else if (direction === 'right')
      setSlideIndex((prev) => (prev >= 6 ? 0 : prev + 1));
  };

  return (
    <div className='p-2 relative overflow-hidden'>
      <p className='mb-4 font-semibold'>{title} Movies</p>
      <span
        className='absolute top-1/2 left-0 z-20 text-black/50 bg-white/60 p-2 rounded-full cursor-pointer hover:scale-125 transition-all duration-75 ease-in'
        onClick={() => handleDirection('left')}
      >
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 512 512'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
          className=' rotate-180'
        >
          <path d='M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z'></path>
        </svg>
      </span>
      <span
        className='absolute top-1/2 right-0 z-20 text-black/50 bg-white/60 p-2 rounded-full cursor-pointer hover:scale-125 transition-all duration-75 ease-in'
        onClick={() => handleDirection('right')}
      >
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 512 512'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z'></path>
        </svg>
      </span>
      <div
        className='flex flex-row gap-2 transition-all duration-500 ease-out'
        ref={wrapperRef}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default List;
