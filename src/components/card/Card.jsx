import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <Link
      href={`/movie/123`}
      className='min-w-64 mr-2 border border-gray-500 rounded-lg shadow-lg shadow-cyan-200 lg:hover:scale-105 hover:z-10 transition-all duration-200 ease-linear basis-1/2 lg:basis-1/4 xl:basis-1/5'
    >
      <div className='w-full aspect-[4/5] lg:aspect-[5/7] relative'>
        <Image
          alt='movie'
          src='https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdmllfGVufDB8fDB8fHww'
          fill
          className='rounded-t-lg object-cover'
        />
      </div>
      <div className='p-3 rounded-b-lg flex flex-col items-center gap-1 bg-white'>
        <h4 className='font-bold'>Spectre 007</h4>
        <div className='flex items-center justify-between w-full'>
          <span className='text-sm font-normal'>2018</span>
          <span className='text-sm font-normal'>7.7</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
