import Link from "next/link";
import { profile, projects, education, techStack } from "./content";
import ContactForm from "./components/contact-form";
import FlipCard from "./components/flip-card";
import ProjectCard from "./components/project-card";
import SiteShell from "./components/site-shell";
import ExperienceSection from "./components/experience-section";

export default function Home() {
  return <SiteShell><main id="main">
    <section id="top" className="hero shell">
      <p className="eyebrow"><span className="status-dot" /> OPEN TO AI SOFTWARE ENGINEERING OPPORTUNITIES</p>
      <h1>{profile.name.toUpperCase()}</h1><p className="hero-role">{profile.headline}</p><p className="hero-description">{profile.intro}</p>
      <div className="button-row"><Link className="button" href="/projects">View Projects <span>↗</span></Link><a className="button secondary" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a><a className="button secondary" href={profile.resumeUrl || "#experience"} target={profile.resumeUrl ? "_blank" : undefined} rel={profile.resumeUrl ? "noopener noreferrer" : undefined}>Resume <span>↓</span></a></div>
      <div className="hero-footer"><span>STUTTGART, GERMANY</span><a href="#featured">EXPLORE SELECTED WORK ↓</a></div>
    </section>
    <section id="featured" className="shell content-section"><div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Featured projects</h2></div><Link className="text-link" href="/projects">All projects <span>05 ↗</span></Link></div><div className="project-grid">{projects.slice(0, 3).map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></section>
    <ExperienceSection />
    <section id="education" className="shell content-section"><div className="section-heading"><div><p className="eyebrow">03 / FOUNDATIONS</p><h2>Education</h2></div><p>The learning behind the work.<br />Flip a card for more details.</p></div><div className="education-grid">{education.map((entry, index) => <FlipCard key={entry.id} entry={entry} index={index} />)}</div></section>
    <section id="tech-stack" className="shell content-section stack-section"><div><p className="eyebrow">04 / TOOLKIT</p><h2>Skills & Languages</h2></div><dl className="stack-list">{techStack.map((group) => <div className="stack-row" key={group.label}><dt>{group.label}</dt><dd>{group.items.join(" · ")}</dd></div>)}</dl></section>
    <section id="about" className="shell content-section about-section"><div><p className="eyebrow">05 / A LITTLE ABOUT ME</p><h2>About</h2></div><p>{profile.about}</p></section>
    <section id="contact" className="shell content-section contact-section"><div className="section-heading"><div><p className="eyebrow">06 / LET’S CONNECT</p><h2>Let’s build<br /><em>something useful.</em></h2></div><p>Have a role, project, or idea in mind?<br />Send me a message.</p></div><ContactForm /></section>
  </main></SiteShell>;
}




