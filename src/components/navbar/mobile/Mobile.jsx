'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Mobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='flex md:hidden'>
      <div
        className='flex flex-col gap-2 cursor-pointer'
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <div className='w-8 h-1 bg-white rounded' />
        <div className='w-8 h-1 bg-white rounded' />
        <div className='w-8 h-1 bg-white rounded' />
      </div>
      <div
        className={`${
          openMenu ? 'absolute' : 'hidden'
        } z-10 w-screen h-screen bg-red-500 left-0 top-20`}
      >
        <div className='w-full h-full bg-indigo-400 flex items-center justify-center'>
          <ul className='flex flex-col items-center gap-8'>
            <li>
              <Link href='/' className='text-2xl font-semibold'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about' className='text-2xl font-semibold'>
                About
              </Link>
            </li>
            <li>
              <Link href='/' className='text-2xl font-semibold'>
                Random
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
