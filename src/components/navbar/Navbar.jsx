import React from 'react';
import Mobile from './mobile/Mobile';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-cyan-700 text-white h-20 p-4 px-12'>
      <div className='flex items-center justify-between'>
        <div>
          <Link href='/'>
            <h1 className='text-3xl font-bold'>Movie DB</h1>
          </Link>
        </div>
        <div className='hidden md:block'>
          <ul className='flex items-center gap-8'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/'>Random</Link>
            </li>
          </ul>
        </div>
        <Mobile />
      </div>
    </nav>
  );
};

export default Navbar;
