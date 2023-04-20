import { SvgProps } from '../_lib/svg-props';
import { GitHubIcon } from './svgs/GitHubIcon';
import { TwitterIcon } from './svgs/TwitterIcon';

export type IconName = 'github' | 'twitter';
interface LinkMapping {
  link: string;
  component: (props: SvgProps) => JSX.Element;
}
interface GithubLink {
  github: LinkMapping;
}
interface TwitterLink {
  twitter: LinkMapping;
}
type Links = GithubLink & TwitterLink;

const links: Links = {
  github: {
    link: 'https://github.com/flyhighair',
    component: GitHubIcon,
  },
  twitter: {
    link: 'https://twitter.com/fly_highup_air',
    component: TwitterIcon,
  },
};

interface Props {
  iconName: IconName;
}

export const IconLink = ({ iconName }: Props) => {
  const icon = links[iconName];
  const IconComponent = icon.component;

  return (
    <a
      href={icon.link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-70"
    >
      <IconComponent width={100} height={100} />
    </a>
  );
};
