import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MovieDetails = async ({ params }) => {
  const { slug } = params;

  const res = await fetch(`http://localhost:3000/api/getMovie/${slug}`);
  const data = await res.json();

  const imgRes = await fetch(
    `http://localhost:3000/api/getPoster/${data.poster_path}`
  );
  const img = await imgRes.json();

  const bgImgRes = await fetch(
    `http://localhost:3000/api/getBackdrop/${data.backdrop_path}`
  );
  const bgImg = await bgImgRes.json();
  console.log(data);

  return (
    <div className=''>
      <div className='w-full h-[720px] lg:h-[420px] relative'>
        <Image
          alt='movie'
          src={bgImg.path}
          fill
          className='object-cover opacity-50'
        />
        <div className='absolute z-10 w-full h-full'>
          <div className='w-full h-full p-4 px-8 flex flex-col lg:flex-row items-center lg:items-stretch lg:max-w-max lg:m-auto gap-4 lg:gap-24'>
            <div className='relative w-64 lg:aspect-[9/16] h-full'>
              <Image
                alt='movie'
                src={img.path}
                fill
                className='object-cover rounded-md'
              />
            </div>
            <div className='flex flex-col gap-2 max-w-2xl justify-center'>
              <h2 className='text-2xl xl:text-4xl font-semibold'>
                {data.title}
              </h2>
              <p className='text-sm lg:text-base text-justify font-medium'>
                {data.overview}
              </p>
              <p>
                Release date: <b>{data.release_date}</b>
              </p>
              <p className='flex items-center gap-px'>
                Rated: <b className='ml-2'>{data.vote_average} </b>{' '}
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
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 lg:gap-6 p-4 px-8 max-w-max m-auto'>
        <div className='flex flex-col md:flex-row items-start gap-2'>
          <span>Categories:</span>
          <ul className='flex flex-wrap items-center gap-2'>
            {data.genres.map((genre) => (
              <li
                key={genre.id}
                className='text-sm bg-cyan-600 text-white rounded-lg p-2 px-4 cursor-pointer hover:scale-105 hover:bg-cyan-600/70'
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col md:flex-row items-start gap-2'>
          <span>Producers:</span>
          <ul className='flex flex-wrap items-center gap-2'>
            {data.production_companies.map((comp) => (
              <li
                key={comp.id}
                className=' bg-cyan-600 text-white rounded-lg p-2 px-4 cursor-pointer hover:scale-105 hover:bg-cyan-600/70'
              >
                <Link href={data.homepage} className='text-sm'>
                  {comp.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex justify-center mb-6'>
        <video
          controls
          autoPlay
          muted
          src={
            data.video_url ||
            'https://imdb-video.media-imdb.com/vi1951123225/1434659607842-pgv4ql-1707582799965.mp4?Expires=1715276845&Signature=lh1XzBrXZjPRWGIQ96UYtU2PJ-e5vSYS52h-nHWODFwCfnrjsLLpNLAgfrNOLNS9UCaRJ1RvQWAUD13V9DSGdZO~Q3GbcZDKPnk27ZcLAOz3~XP6pxab3X3z3H-OcCdHtHK0ruvXJPuEZLsi-DOD22byuPKruHwfxKmS6lAb7KCgdJgtSQZSHWsjdlyK1Emui~yxJ5Id~5B-x~stQBGEgA7uUlgApvOOXJN-i~cYBmINAlIh8wa0FlorJhF1bk44NNleW7uPCWJAkbDr9xySYeNegbP65glkU031fVgS3kOivoOHIoWdm5P7lZtfDK~vteLQiVdjNl-MM-As5vjSQQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'
          }
        ></video>
      </div>
    </div>
  );
};

export default MovieDetails;
