'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSectionIsInView } from '@/hooks/useSectionIsInView';

type Props = {
  children: React.ReactNode;
  sectionId: string;
};

export default function Section({ children, sectionId, ...otherProps }: Props) {
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [ref] = useSectionIsInView(sectionId, containerHeight);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  return (
    <div ref={containerRef} className="w-[500px] rounded bg-slate-300 p-4">
      <div id={sectionId} ref={ref} {...otherProps}>
        {children}
      </div>
    </div>
  );
}
