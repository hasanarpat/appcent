'use client';
import { useEffect, useRef, useState } from 'react';
import Card from '../card/Card';

const List = ({ title }) => {
  const wrapperRef = useRef(null);
  const itemRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const itemWidth = itemRef.current?.offsetWidth;
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translateX(${
          -slideIndex * itemWidth
        }px)`;
      }
    }, 500);

    return () => clearInterval(interval);
  }, [slideIndex]);

  useEffect(() => {
    const getData = async () => {
      let res;
      if (title === 'Popular') res = await fetch('/api/popular');
      else if (title === 'Trend') res = await fetch('/api/topRated');
      const data = await res.json();
      setData(data);
      setLoading(false);
    };

    getData();
  }, [title]);

  const handleDirection = (direction) => {
    if (direction === 'left')
      setSlideIndex((prev) => (prev <= 0 ? 18 : prev - 1));
    else if (direction === 'right')
      setSlideIndex((prev) => (prev >= 18 ? 0 : prev + 1));
  };

  return (
    <div className='p-2 relative overflow-hidden snap-x snap-mandatory list'>
      <p className='mb-4 font-semibold'>{title} Movies</p>
      <span
        className='absolute top-1/2 left-0 z-20 text-black/50 bg-white/60 shadow-xl p-2 rounded-full cursor-pointer hover:scale-125 transition-all duration-75 ease-in'
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
        className='absolute top-1/2 right-0 z-20 text-black/50 bg-white/60 shadow-xl p-2 rounded-full cursor-pointer hover:scale-125 transition-all duration-75 ease-in'
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
      {loading ? ( // Check loading state
        <div className='text-7xl w-full h-[420px]'>
          <div className='w-full h-full flex gap-2 items-stretch p-8'>
            <div className='animate-pulse w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-gray-400/50 rounded-lg'></div>
            <div className='animate-pulse hidden md:block w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-gray-400/50 rounded-lg'></div>
            <div className='animate-pulse hidden lg:block w-full lg:w-1/3 xl:w-1/4 bg-gray-400/50 rounded-lg'></div>
            <div className='animate-pulse hidden xl:block w-full xl:w-1/4 bg-gray-400/50 rounded-lg'></div>
          </div>
        </div>
      ) : (
        <div
          className='flex flex-row transition-all duration-500 ease-out'
          ref={wrapperRef}
        >
          {data.results?.map((item) => (
            <div ref={itemRef} className='flex' key={item.id}>
              <Card movie={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
