import React from 'react';

const MovieDetails = ({ params }) => {
  const { slug } = params;
  console.log(slug);

  return <div className=''>MovieDetails</div>;
};

export default MovieDetails;
