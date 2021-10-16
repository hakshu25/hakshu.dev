import { Link } from '@mui/material';
import { GitHub } from '../components/svgs/github';
import { SvgProps } from '../lib/svg-props';
import { Twitter } from './svgs/twitter';

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
    component: GitHub,
  },
  twitter: {
    link: 'https://twitter.com/fly_highup_air',
    component: Twitter,
  },
};

interface Props {
  iconName: IconName;
}

export const IconLink = ({ iconName }: Props) => {
  const icon = links[iconName];
  const IconComponent = icon.component;

  return (
    <Link
      href={icon.link}
      target="_blank"
      rel="noopener"
      sx={{
        ':hover': {
          opacity: 0.7,
        },
      }}
    >
      <IconComponent width={100} height={100} />
    </Link>
  );
};
