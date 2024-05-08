import Card from '../card/Card';

const List = ({ title }) => {
  return (
    <div className='p-2'>
      <p className='mb-4 font-semibold'>{title} Movies</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-2'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default List;
