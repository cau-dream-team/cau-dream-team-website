'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Moon, Sun } from 'lucide-react';
import { useTheme, type UseThemeProps } from 'next-themes';
import { useState } from 'react';

export default function Home() {
  const { theme, setTheme }: UseThemeProps = useTheme();

  const [inputValue, setInputValue] = useState<string>('');
  const [name, setName] = useState<string>('');

  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-xl font-bold">Enter your name</h1>
        <div className="flex items-center gap-5">
          <Input
            placeholder="Name"
            value={inputValue || ''}
            onChange={e => setInputValue(e.target.value)}
          />
          <Button onClick={() => setName(inputValue)}>Submit</Button>
        </div>
        <Separator />
        <h1 className="text-4xl font-bold">{name ? `Hello ${name}` : 'Hello World'}</h1>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="absolute top-5 right-5"
      >
        {theme === 'light' ? <Sun /> : <Moon />}
      </Button>
    </>
  );
}
