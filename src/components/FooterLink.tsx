import { IconLink } from './IconLink';

export const FooterLink = () => {
  return (
    <div className="flex justify-around">
      <IconLink iconName={'github'}></IconLink>
      <IconLink iconName={'twitter'}></IconLink>
    </div>
  );
};
