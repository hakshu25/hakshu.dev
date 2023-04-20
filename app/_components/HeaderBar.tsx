import Image from 'next/image';
import Link from 'next/link';

const pageTitles = {
  blog: "Hakshu's Blog",
  error: 'Error Page',
} as const;
type PageTitleType = keyof typeof pageTitles;

type Props = {
  type?: PageTitleType;
};

export const HeaderBar = ({ type = 'blog' }: Props) => {
  return (
    <div className="bg-midnight h-16 text-white px-4 py-4 flex justify-between">
      <div className="text-2xl flex flex-1 items-center gap-2">
        <Image src="/img/header-icon.png" alt="icon" width={40} height={40} />
        <span>{pageTitles[type]}</span>
      </div>
      <nav>
        <ul className="list-none flex gap-4">
          <li>
            <Link href="/" passHref={true} prefetch={false}>
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
