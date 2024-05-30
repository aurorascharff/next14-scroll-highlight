'use client';

const sections = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

import React from 'react';
import { useSectionStore } from '@/store/sectionStore';
import { cn } from '@/utils/cn';

export default function SectionsOverview() {
  const { sectionInView } = useSectionStore();

  return (
    <div className="sticky top-20 flex h-fit flex-col gap-4 rounded bg-slate-500 p-5 text-white">
      <h2>Sections Overview</h2>
      <div className="flex flex-col gap-2">
        {sections.map(({ id, title }) => {
          return (
            <a
              className={cn(sectionInView === id && 'outline outline-white', 'rounded p-2 hover:bg-slate-400')}
              key={id}
              href={`#${id}`}
            >
              {title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
