'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Card = ({ movie }) => {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const getImg = async () => {
      const res = await fetch(`/api/getPoster${movie.poster_path}`);
      const data = await res.json();

      setImg(data);
    };
    getImg();
  }, [movie.poster_path]);

  return (
    <Link
      href={`/movie/${movie.id}`}
      className='min-w-64 mr-2 border border-gray-500 rounded-lg shadow-lg shadow-cyan-100 lg:hover:scale-105 hover:z-10 transition-all duration-200 ease-linear basis-1/2 lg:basis-1/4 xl:basis-1/5'
    >
      <div className='w-full aspect-[4/5] lg:aspect-[5/7] relative'>
        {img && (
          <Image
            alt='movie'
            src={img.path}
            fill
            className='rounded-t-lg object-cover'
          />
        )}
      </div>
      <div className='p-3 rounded-b-lg flex flex-col items-center gap-1 bg-white'>
        <h4 className='font-bold text-center'>{movie.title}</h4>
        <div className='flex items-center justify-between w-full px-2'>
          <span className='text-sm font-semibold'>{movie.release_date}</span>
          <span className='text-sm font-semibold flex items-center gap-px'>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 256 256'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
              className='text-yellow-500'
            >
              <path
                d='M229.06,108.79l-48.7,42,14.88,62.79a8.4,8.4,0,0,1-12.52,9.17L128,189.09,73.28,222.74a8.4,8.4,0,0,1-12.52-9.17l14.88-62.79-48.7-42A8.46,8.46,0,0,1,31.73,94L95.64,88.8l24.62-59.6a8.36,8.36,0,0,1,15.48,0l24.62,59.6L224.27,94A8.46,8.46,0,0,1,229.06,108.79Z'
                opacity='0.2'
              ></path>
              <path d='M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z'></path>
            </svg>
            {movie.vote_average}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
