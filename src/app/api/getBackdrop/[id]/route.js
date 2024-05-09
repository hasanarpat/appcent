import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
  const { id } = params;

  const url = `https://image.tmdb.org/t/p/original/${id}`;

  try {
    return new NextResponse(JSON.stringify({ path: url }));
  } catch (error) {
    console.log(error);
    return new NextResponse({ status: 500, message: 'Failed to get movies!' });
  }
};
