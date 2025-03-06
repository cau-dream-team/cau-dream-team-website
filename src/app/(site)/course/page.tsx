import { ThemeButton } from '@/components/atoms/theme-button';
import { CourseSelection } from '@/components/course/course-selection';
import { Separator } from '@/components/ui/separator';

const CoursePage = () => {
  return (
    <div className="w-full">
      <h1 className="text-center text-2xl font-bold">Select your course</h1>
      <div className="mx-auto my-5 w-96">
        <Separator />
      </div>
      <CourseSelection orientation="vertical" className="flex-col md:flex-row" />
      <ThemeButton />
    </div>
  );
};

export default CoursePage;
