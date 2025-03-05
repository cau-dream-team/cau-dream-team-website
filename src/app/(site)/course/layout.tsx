import type { ReactNode } from 'react';

const CourseLayout = ({ children }: { children: ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

export default CourseLayout;
