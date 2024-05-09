import Jumbotron from '@/components/jumbotron/Jumbotron';
import List from '@/components/list/List';
import { Suspense } from 'react';
import Loading from './loading';

export default function Home() {
  return (
    <main className='p-8 lg:px-24'>
      <Jumbotron />
      <Suspense fallback={<Loading />}>
        <List title='Popular' />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <List title='Trend' />
      </Suspense>
    </main>
  );
}
