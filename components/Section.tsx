'use client';

import React from 'react';
import { useSectionIsInView } from '@/hooks/useSectionIsInView';
import { cn } from '@/utils/cn';

type Props = {
  children: React.ReactNode;
  className?: string;
  sectionId: string;
};

export default function Section({ children, sectionId, className, ...otherProps }: Props) {
  const [ref] = useSectionIsInView(sectionId);
  const classNames = cn(className, 'p-40 rounded bg-slate-300');

  return (
    <div ref={ref} className={classNames} {...otherProps}>
      {children}
    </div>
  );
}
