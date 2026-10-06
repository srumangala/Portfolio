import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, profile } from "../../content";
import SiteShell from "../../components/site-shell";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? `${project.title} | ${profile.name}` : "Project not found", description: project?.description };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <SiteShell><main id="main" className="shell project-detail"><Link className="text-link" href="/projects">← All projects</Link><p className="eyebrow">{project.type} / {project.example ? "SAMPLE CASE STUDY" : "CASE STUDY"}</p><h1>{project.title}</h1><p className="page-intro">{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="button-row detail-actions">{project.githubUrl ? <a className="button" href={project.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub ↗</a> : <span className="button unavailable" aria-disabled="true">GitHub link coming soon</span>}{project.demoUrl && <a className="button secondary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo ↗</a>}</div>{project.details.map((detail) => <section className="detail-section" key={detail.heading}><h2>{detail.heading}</h2><p>{detail.text}</p></section>)}<Link className="button" href="/#contact">Contact me ↗</Link></main></SiteShell>;
}
