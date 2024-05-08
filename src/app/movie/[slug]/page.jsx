import Image from 'next/image';
import React from 'react';

const MovieDetails = ({ params }) => {
  const { slug } = params;

  return (
    <div className=''>
      <div className='w-full h-[720px] lg:h-[520px] relative'>
        <Image
          alt='movie'
          src='https://images.unsplash.com/photo-1714891203404-b25f32706e0a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          fill
          className='object-cover opacity-50'
        />
        <div className='absolute z-10 w-full h-full'>
          <div className='w-full h-full p-4 px-8 flex flex-col lg:flex-row items-center lg:items-stretch gap-4 lg:gap-24'>
            <div className='relative w-64 lg:aspect-[9/16] h-full'>
              <Image
                alt='movie'
                src='https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdmllfGVufDB8fDB8fHww'
                fill
                className='object-cover'
              />
            </div>
            <div className='flex flex-col gap-2 max-w-2xl'>
              <h2 className='text-2xl xl:text-4xl font-semibold'>
                The Lord Of The Rings
              </h2>
              <p className='text-sm lg:text-base text-justify font-medium'>
                Anim aliquip duis sunt nostrud. Officia cillum proident sit
                eiusmod commodo velit aliquip eiusmod eu ad sit do amet id.
                Nostrud aliquip reprehenderit consectetur nisi Lorem veniam
                dolor laborum. Exercitation Lorem pariatur esse eiusmod sunt
                enim qui id consequat proident ea nisi.
              </p>
              <p>
                Release date: <b>May 17 2018</b>
              </p>
              <p>
                Rated: <b>5/5</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 p-4 px-8'>
        <div className='flex flex-col md:flex-row items-start gap-2'>
          <span>Categories:</span>
          <ul className='flex flex-wrap items-center gap-2'>
            <li className='text-sm bg-cyan-600 text-white rounded-lg p-2 px-4 cursor-pointer hover:scale-105 hover:bg-cyan-600/70'>
              #Action
            </li>
            <li className='text-sm bg-cyan-600 text-white rounded-lg p-2 px-4 cursor-pointer hover:scale-105 hover:bg-cyan-600/70'>
              #Sci-Fi
            </li>
            <li className='text-sm bg-cyan-600 text-white rounded-lg p-2 px-4 cursor-pointer hover:scale-105 hover:bg-cyan-600/70'>
              #Comedy
            </li>
          </ul>
        </div>
        <div className='flex flex-col md:flex-row items-start gap-2'>
          <span>Artists:</span>
          <ul className='flex flex-wrap items-center gap-2'>
            <li className='text-sm bg-cyan-600 text-white rounded-lg p-2 px-4 cursor-pointer hover:scale-105 hover:bg-cyan-600/70'>
              Selma Hayek
            </li>

            <li className='text-sm bg-cyan-600 text-white rounded-lg p-2 px-4 cursor-pointer hover:scale-105 hover:bg-cyan-600/70'>
              Christian Bale
            </li>

            <li className='text-sm bg-cyan-600 text-white rounded-lg p-2 px-4 cursor-pointer hover:scale-105 hover:bg-cyan-600/70'>
              Christopher Nolan
            </li>
          </ul>
        </div>
        <div className='flex flex-col md:flex-row items-start gap-2'>
          <span>Producers:</span>
          <ul className='flex flex-wrap items-center gap-2'>
            <li className='text-sm bg-cyan-600 text-white rounded-lg p-2 px-4 cursor-pointer hover:scale-105 hover:bg-cyan-600/70'>
              Selma Hayek
            </li>

            <li className='text-sm bg-cyan-600 text-white rounded-lg p-2 px-4 cursor-pointer hover:scale-105 hover:bg-cyan-600/70'>
              Christian Bale
            </li>

            <li className='text-sm bg-cyan-600 text-white rounded-lg p-2 px-4 cursor-pointer hover:scale-105 hover:bg-cyan-600/70'>
              Christopher Nolan
            </li>
          </ul>
        </div>
        <div className='flex flex-col md:flex-row items-start gap-2'>
          <span>Tickets:</span>
          <ul className='flex flex-wrap items-center gap-2'>
            <li className='text-sm bg-cyan-600 text-white rounded-lg p-2 px-4 cursor-pointer hover:scale-105 hover:bg-cyan-600/70'>
              #Action
            </li>

            <li className='text-sm bg-cyan-600 text-white rounded-lg p-2 px-4 cursor-pointer hover:scale-105 hover:bg-cyan-600/70'>
              #Sci-Fi
            </li>

            <li className='text-sm bg-cyan-600 text-white rounded-lg p-2 px-4 cursor-pointer hover:scale-105 hover:bg-cyan-600/70'>
              #Comedy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
