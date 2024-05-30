import React from 'react';
import Section from './Section';

export default function Sections() {
  return (
    <div className="flex flex-col gap-10">
      <Section sectionId="home">
        <h2>Home</h2>
        <div className="h-[300px]">Welcome to my website!</div>
      </Section>
      <Section sectionId="about">
        <h2>About</h2>
        <div className="h-[1000px]">This is the about section.</div>
      </Section>
      <Section sectionId="projects">
        <h2>Projects</h2>
        <div className="h-[200px]">This is the projects section.</div>
      </Section>
      <Section sectionId="contact">
        <h2>Contact</h2>
        <div className="h-[700px]">This is the contact section.</div>
      </Section>
    </div>
  );
}
