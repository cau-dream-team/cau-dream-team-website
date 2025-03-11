'use client';

import { Loading } from '@/components/atoms/loading';
import { useCallback, useEffect, useState } from 'react';
import Iframe from 'react-iframe';

export const Course = ({ code, name }: { code: string; name: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dimensions, setDimensions] = useState({
    height: '100dvh',
    width: '100%',
  });

  const updateSize = useCallback(() => {
    const height = window.innerHeight;

    setDimensions({
      height: `${height - 1}px`,
      width: '100%',
    });
  }, []);

  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    window.addEventListener('orientationchange', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('orientationchange', updateSize);
    };
  }, [updateSize]);

  const handleIframeLoad = () => setIsLoading(false);

  return (
    <div className="safe-top safe-bottom touch-scroll relative h-full w-full overflow-hidden">
      {isLoading && (
        <div className="bg-background/80 absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm">
          <Loading />
        </div>
      )}
      <Iframe
        url=""
        src={`/courses/${code}/${name}.html`}
        className="mobile-container w-full overflow-hidden border-0 md:px-0"
        height={dimensions.height}
        width={dimensions.width}
        title={`Course: ${name}`}
        sandbox={['allow-same-origin', 'allow-scripts', 'allow-popups', 'allow-forms']}
        onLoad={handleIframeLoad}
      />
    </div>
  );
};
