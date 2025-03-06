import { HomeButton } from '@/components/atoms/home-button';
import type { ReactNode } from 'react';

const CourseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full">
      {children}
      <div className="absolute top-[30px] left-1/2 -translate-x-1/2 transform">
        <HomeButton />
      </div>
    </div>
  );
};

export default CourseLayout;
