import Image from 'next/image';

export const SiteImage = () => {
  return (
    <div className="w-full h-1/2 relative  text-center">
      <Image
        src="/img/top.webp"
        alt="Picture of tokyo night view"
        layout="fill"
      />
    </div>
  );
};
