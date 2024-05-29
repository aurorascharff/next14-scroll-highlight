'use client';

import React from 'react';
import { sections } from '@/constants/sections';
import { useSectionStore } from '@/store/sectionStore';

export default function SectionsOverview() {
  const { sectionInView } = useSectionStore();

  return (
    <div className="sticky top-20 flex h-fit flex-col gap-4 rounded bg-slate-500 p-5 text-white">
      Sections Overview
      <div className="flex flex-col gap-2">
        {sections.map(({ id, title }) => {
          return (
            <a className={sectionInView === id ? 'font-bold' : ''} key={id} href={`#${id}`}>
              {title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
