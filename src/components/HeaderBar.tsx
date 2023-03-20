import Image from 'next/image';
import Link from 'next/link';
import { siteTitle } from '../lib/site-info';

export const headerTitles = {
  about: 'About',
  blog: 'Blog',
  error: 'Error',
} as const;

const pageTitles = {
  about: siteTitle,
  blog: "Hakshu's Blog",
  error: 'Error Page',
} as const;
type PageTitleType = keyof typeof pageTitles;

type Props = {
  type?: PageTitleType;
};

export const HeaderBar = ({ type = 'about' }: Props) => {
  return (
    <div className="bg-midnight h-16 text-white px-4 py-4 flex justify-between">
      <div className="text-2xl flex flex-1 items-center gap-2">
        <Image src="/img/header-icon.png" alt="icon" width={40} height={40} />
        <span>{pageTitles[type]}</span>
      </div>
      <nav>
        <ul className="list-none flex gap-4">
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
    </div>
  );
};
