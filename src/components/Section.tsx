import React, { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, children, className = "" }: SectionProps) => {
  return (
    <section
      id={id}
      className={`relative min-h-screen py-20 px-4 md:px-8 flex flex-col items-center justify-center ${className}`}
    >
        {/* Subtle background glow for every section - can be overridden or disabled if needed, 
            but keeps consistency */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-float opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/5 rounded-full filter blur-3xl animate-float-delay opacity-30"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
