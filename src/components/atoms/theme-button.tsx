'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme, type UseThemeProps } from 'next-themes';

export const ThemeButton = () => {
  const { theme, setTheme }: UseThemeProps = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="absolute top-5 right-5"
    >
      {theme === 'light' ? <Sun /> : <Moon />}
    </Button>
  );
};
