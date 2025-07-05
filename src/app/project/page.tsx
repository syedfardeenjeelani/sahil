'use client'
import React, { useState, useEffect } from "react";

const projects = [
  {
    name: "Gindun Club Beta",
    url: "https://beta.gindun.club/",
    tech: [
      "RTK Query",
      "Next.js",
      "Tailwind",
      "ShadCN",
      "Zustand",
      "TypeScript",
      "Zod for validation",
    ],
    description:
      "A modern web app using RTK Query, Next.js, Tailwind, ShadCN, Zustand, TypeScript, and Zod for validation.",
  },
  {
    name: "LinkRush",
    url: "https://linkrush.co.uk",
    tech: [
      "Sanity for CMS",
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Zod for validation",
    ],
    description:
      "A link management platform powered by Sanity CMS, Next.js, Tailwind, TypeScript, and Zod.",
  },
  {
    name: "Sandrose Cashmere Gallery",
    url: "https://www.sandrosecashmeregallery.com/",
    tech: ["Sanity", "Next.js", "TypeScript", "Bootstrap"],
    description:
      "A luxury cashmere gallery site built with Sanity, Next.js, TypeScript, and Bootstrap.",
  },
  {
    name: "KoinX ETA Seven",
    url: "https://koin-x-eta-seven.vercel.app/",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Chart.js",
      "Swiper.js",
      "TradingView Widget",
    ],
    description:
      "A crypto dashboard with charts, built using Next.js, TypeScript, Tailwind, Redux Toolkit, Chart.js, Swiper.js, and TradingView Widget.",
  },
  {
    name: "Slides AI",
    url: "https://slides-ai-psi.vercel.app/",
    tech: [
      "Astro",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
    description:
      "An AI-powered slide generator using Astro, React, TypeScript, Tailwind, Framer Motion, and Vite.",
  },
];

export default function ProjectPage() {
  const [visibleProjects, setVisibleProjects] : any = useState([]);

  useEffect(() => {
    projects.forEach((_, index) => {
      setTimeout(() => {
        setVisibleProjects((prev:any) => [...prev, index]);
      }, index * 100);
    });
  }, []);

  return (
    <>
    <div
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          zIndex: 100,
          position: "relative",
        }}
      >
        <button
          style={{
          }}
          onClick={() => {
            
            window.history.back();
          }}
          className="border h-[32px] w-[32px] rounded-[50%] justify-center items-center flex border-gray-300 bg-gray-100 text-gray-800 cursor-pointer hover:shadow-md hover:bg-gray-200 transition"
        >
          ← 
        </button>
      </div>
    <div className="min-h-screen bg-background">
        
      <div className="container mx-auto" style={{ padding: '40px 20px' }}>
        {/* Header */}
        
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h1 className="text-4xl font-bold text-foreground tracking-tight" style={{ marginBottom: '12px' }}>
            Projects
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.url}
              className={`transform transition-all duration-500 ${
                visibleProjects.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md hover:border-border/60 hover:-translate-y-1">
                  <div className="flex flex-col h-full" style={{ padding: '24px' }}>
                    {/* Project Header */}
                    <div className="flex items-start justify-between" style={{ marginBottom: '16px' }}>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200" style={{ marginBottom: '8px' }}>
                          {project.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <svg 
                          className="w-4 h-4 text-muted-foreground" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground transition-colors duration-200 hover:bg-secondary/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}