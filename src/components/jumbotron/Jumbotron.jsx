import Image from 'next/image';

const Jumbotron = () => {
  return (
    <div className='aspect-video max-h-[720px] m-auto relative rounded-lg mb-8'>
      <Image
        alt='jumbo photo'
        src='https://images.unsplash.com/photo-1592780828756-c418d71faa1f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        fill
        className='object-cover rounded-lg hue-rotate-180'
      />
      <div className='w-full h-full absolute z-10'>
        <div className='w-full h-full flex flex-col items-center justify-center gap-6 text-rose-800'>
          <h4 className='text-2xl lg:text-5xl font-bold'>Search and Explore</h4>
          <p className='w-full lg:w-2/3 px-4 lg:px-0 m-auto mt-0 mb-0 text-justify text-sm lg:text-base font-semibold text-white/70'>
            Dolore commodo fugiat labore nostrud nostrud cupidatat ex enim ad
            ullamco nostrud officia et. Reprehenderit non voluptate quis culpa
            incididunt cillum duis deserunt.Reprehenderit non voluptate quis
            culpa incididunt cillum duis deserunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
