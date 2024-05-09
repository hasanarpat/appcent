import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
  const { id } = params;
  console.log(id, 'imgpath----------');

  const url = `http://image.tmdb.org/t/p/original/${id}`;

  try {
    const res = await fetch(url);
    const img = await res.blob();

    return new NextResponse(img);
  } catch (error) {
    console.log(error);
    return new NextResponse({ status: 500, message: 'Failed to get movies!' });
  }
};
