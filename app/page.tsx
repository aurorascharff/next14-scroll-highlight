import React from 'react';
import Sections from '@/components/Sections';
import SectionsOverview from '@/components/SectionsOverview';

export default function Home() {
  return (
    <div className="flex justify-center p-20">
      <div className="flex flex-row gap-10">
        <SectionsOverview />
        <Sections />
      </div>
    </div>
  );
}
