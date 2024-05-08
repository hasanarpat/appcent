import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-indigo-900 text-white h-18 p-4 px-12'>
      <div className='flex items-center justify-between'>
        <h3 className='text-xl'>Movie DB</h3>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-xl'>Appcent</h3>
          <p className='text-sm text-gray-400'>Test Case</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
