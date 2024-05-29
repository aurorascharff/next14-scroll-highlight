import React from 'react';
import { sections } from '@/constants/sections';
import Section from './Section';

export default function Sections() {
  return (
    <div className="flex flex-col gap-10">
      {sections.map(({ id, title, description }) => {
        return (
          <Section key={id} sectionId={id}>
            <h2>{title}</h2>
            <p>{description}</p>
          </Section>
        );
      })}
    </div>
  );
}
