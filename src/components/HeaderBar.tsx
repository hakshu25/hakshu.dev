import Link from 'next/link';

export const headerTitles = {
  about: 'About',
  blog: 'Blog',
  error: 'Error',
} as const;

type HeaderTitleKey = keyof typeof headerTitles;
type Props = {
  headerTitle: typeof headerTitles[HeaderTitleKey];
};

export const HeaderBar = ({ headerTitle }: Props) => {
  return (
    <header className="bg-midnight h-60 text-white px-4 pt-2 grid grid-cols-12 grid-rows-3">
      <div className="text-2xl col-start-1 col-span-4">
        Hakshu&apos;s Portfolio
      </div>
      <nav className="row-start-1 col-start-12 sm:col-start-11 sm:col-span-2">
        <ul className="list-none grid grid-cols-3 place-items-end">
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
          <li>
            <a href="/rss" target="_blank" rel="noopener noreferrer">
              RSS
            </a>
          </li>
        </ul>
      </nav>
      <h1 className="text-7xl font-bold text-center row-start-2 col-span-12">
        {headerTitle}
      </h1>
    </header>
  );
};
