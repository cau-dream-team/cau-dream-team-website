import { HomeButton } from '@/components/atoms/home-button';
import type { ReactNode } from 'react';

const CourseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full">
      {children}
      <div className="absolute top-0 right-0 left-0 flex h-[48px] place-items-center justify-center md:h-[70px]">
        <HomeButton />
      </div>
    </div>
  );
};

export default CourseLayout;
