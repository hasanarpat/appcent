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
              <Image alt='movie' src={img.path} fill className='object-cover' />
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
              <p>
                Rated: <b>{data.vote_average}</b>
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
