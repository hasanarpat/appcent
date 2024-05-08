import React from 'react';

const MovieDetails = ({ params }) => {
  const { slug } = params;
  console.log(slug);

  return <div>MovieDetails</div>;
};

export default MovieDetails;
