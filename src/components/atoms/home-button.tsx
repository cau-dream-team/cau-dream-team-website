import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import Link from 'next/link';

export const HomeButton = () => {
  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href="/">
        <Home className="h-5 w-5" />
      </Link>
    </Button>
  );
};
