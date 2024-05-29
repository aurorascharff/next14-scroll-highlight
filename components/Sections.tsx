import React from 'react';
import Section from './Section';

export default function Sections() {
  return (
    <div className="flex flex-col gap-10">
      <Section sectionId="section-1">Section 1</Section>
      <Section sectionId="section-2">Section 2</Section>
      <Section sectionId="section-3">Section 3</Section>
      <Section sectionId="section-4">Section 4</Section>
      <Section sectionId="section-5">Section 5</Section>
    </div>
  );
}
