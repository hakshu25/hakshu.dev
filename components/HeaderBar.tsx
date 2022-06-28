import Link from 'next/link';

export const HeaderBar = () => {
  return (
    <header className="bg-midnight h-60 text-white px-4 pt-2 grid grid-cols-12 grid-rows-3">
      <div className="text-2xl col-start-1 col-span-4">
        Hakshu&apos;s Portfolio
      </div>
      <nav className="col-start-12">
        <ul className="list-none grid grid-cols-2 place-items-end">
          <li>
            <Link href="/" passHref={true}>
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" passHref={true} prefetch={false}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="text-7xl font-bold text-center row-start-2 col-span-12">
        About
      </h1>
    </header>
  );
};
