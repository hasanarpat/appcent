import Jumbotron from '@/components/jumbotron/Jumbotron';
import List from '@/components/list/List';

export default function Home() {
  return (
    <main className='p-8 lg:px-24'>
      <Jumbotron />
      <List />
      <List />
    </main>
  );
}
