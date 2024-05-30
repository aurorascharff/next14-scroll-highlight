'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSectionIsInView } from '@/hooks/useSectionIsInView';
import useWindowDimensions from '@/hooks/useWindowDimentions';

type Props = {
  children: React.ReactNode;
  sectionId: string;
};

export default function Section({ children, sectionId, ...otherProps }: Props) {
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height: windowHeight } = useWindowDimensions();

  const scalingFactor = 2; // Increase to make thresholds smaller, decrease to make them larger
  const containerScale = containerHeight / windowHeight;
  const rawThreshold = 1 / containerScale;
  const adjustedThreshold = Math.min(1, Math.max(0, rawThreshold / scalingFactor));

  // Ensure the adjusted threshold doesn't go below a certain value (e.g., 0.1)
  const minimumThreshold = 0.1;
  const scrollThreshold = Math.max(minimumThreshold, adjustedThreshold);

  const [ref] = useSectionIsInView(sectionId, scrollThreshold);

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
