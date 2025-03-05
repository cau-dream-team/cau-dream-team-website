'use client';

import { Loading } from '@/components/atoms/loading';
import { useCallback, useEffect, useState } from 'react';
import Iframe from 'react-iframe';

export const Course = ({ code, name }: { code: string; name: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dimensions, setDimensions] = useState({
    height: '100vh',
    width: '100vw',
  });

  const updateSize = useCallback(() => {
    setDimensions({
      height: `${window.innerHeight}px`,
      width: `${window.innerWidth}px`,
    });
  }, []);

  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [updateSize]);

  const handleIframeLoad = () => setIsLoading(false);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Loading />
        </div>
      )}
      <Iframe
        url=""
        src={`/courses/${code}/${name}.html`}
        className="w-full border-0"
        height={dimensions.height}
        width={dimensions.width}
        title={`Course: ${name}`}
        sandbox={['allow-same-origin', 'allow-scripts', 'allow-popups', 'allow-forms']}
        onLoad={handleIframeLoad}
      />
    </div>
  );
};
