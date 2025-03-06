'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';

const Courses: { name: string; url: string; code: string }[] = [
  { name: 'Algorithm', url: 'algorithm', code: 'ah' },
  { name: 'Compiler', url: 'compiler', code: 'cp' },
  { name: 'Computer Vision', url: 'computer-vision', code: 'cv' },
  { name: 'Korean Popular Culture', url: 'korean-popular-culture', code: 'kp' },
  { name: 'Korean Language', url: 'korean-language', code: 'kl' },
];

type CourseSelectionProps = {
  orientation: 'horizontal' | 'vertical';
  className?: string;
};

export const CourseSelection = ({ orientation, className }: CourseSelectionProps) => {
  const router: AppRouterInstance = useRouter();

  return (
    <div
      className={cn(
        'flex h-full w-full place-items-center justify-center gap-5',
        orientation === 'horizontal' ? 'flex-row' : 'flex-col',
        className,
      )}
    >
      {Courses.map(({ name, url, code }) => (
        <Button key={code} variant="outline" onClick={() => router.push(`/course/${url}`)}>
          {name}
        </Button>
      ))}
    </div>
  );
};
