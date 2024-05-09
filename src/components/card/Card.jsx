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
        <div className='flex items-center justify-between w-full'>
          <span className='text-sm font-normal'>{movie.release_date}</span>
          <span className='text-sm font-normal'>{movie.vote_average}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
