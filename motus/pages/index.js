import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App!</h1>
      <p>This is the main index page.</p>
      <Link href="/about">
      Oii</Link>
    </div>
  );
}
