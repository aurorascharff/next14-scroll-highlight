import React from 'react';
import Sections from '@/components/Sections';
import SectionsOverview from '@/components/SectionsOverview';

export default function Home() {
  return (
    <div className="grid place-content-center">
      <div className="flex flex-row gap-10">
        <SectionsOverview />
        <Sections />
      </div>
    </div>
  );
}
