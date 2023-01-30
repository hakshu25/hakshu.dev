import Image from 'next/image';

export const HeaderImage = () => {
  return (
    <div className="relative h-96">
      <Image src="/img/header-image.png" alt="Picture of top image" fill />
      <div className="relative h-full text-white text-right pr-10">
        <p className="flex justify-end items-center h-full text-7xl font-bold font-sans">
          You Only Live Once
        </p>
      </div>
    </div>
  );
};
