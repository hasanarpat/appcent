import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
  const { id } = params;
  const url = `https://api.themoviedb.org/3/movie/${id}&api_key=${process.env.AUTH_API_KEY}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.AUTH_BEARER}`,
    },
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();

    return new NextResponse(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new NextResponse({ status: 500, message: 'Failed to get movies!' });
  }
};
