"use client"
import Link from 'next/link';

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Home Page</h1>
        <Link href="socket">
          <h1>Go to Socket Page</h1>
        </Link>
      </div>
    </main>
  );
}

export default Home;
