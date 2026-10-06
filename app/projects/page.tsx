import type { Metadata } from "next";
import Link from "next/link";
import { projects, profile } from "../content";
import ProjectCard from "../components/project-card";
import SiteShell from "../components/site-shell";

export const metadata: Metadata = { title: `Projects | ${profile.name}`, description: "AI applications, agentic systems, reinforcement learning, and cloud engineering projects." };

export default function ProjectsPage() {
  return <SiteShell><main id="main" className="shell projects-page"><Link className="text-link" href="/">← Back to home</Link><p className="eyebrow">PROJECT COLLECTION / 05</p><h1>Ideas into<br /><em>working systems.</em></h1><p className="page-intro">Five sample projects across AI applications, reinforcement learning, and infrastructure. Open a card to explore its case study.</p><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></main></SiteShell>;
}
