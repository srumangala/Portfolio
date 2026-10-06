import Link from "next/link";
import type { Project } from "../content";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className="project-card">
    <div className="card-topline"><span className="card-index">{String(index + 1).padStart(2, "0")} / {project.type}</span>{project.example && <span className="sample-label">Sample project</span>}</div>
    <h3><Link className="project-card-link" href={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{project.description}</p>
    <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    <div className="project-links">{project.links.map((kind) => {
      if (kind === "case-study") return <Link key={kind} href={`/projects/${project.slug}`}>Case Study →</Link>;
      const url = kind === "github" ? project.githubUrl : project.demoUrl;
      const label = kind === "github" ? "GitHub" : "Live Demo";
      return url ? <a key={kind} href={url} target="_blank" rel="noopener noreferrer">{label} →</a> : <span key={kind} className="pending-link" title={`${label} link has not been added yet`}>{label} <small>soon</small></span>;
    })}</div>
  </article>;
}
