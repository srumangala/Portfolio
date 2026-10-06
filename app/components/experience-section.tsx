"use client";

import { useEffect, useRef, useState } from "react";
import { experience, type ExperienceEntry } from "../content";

export default function ExperienceSection() {
  const [selected, setSelected] = useState<ExperienceEntry | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selected) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [selected]);

  function openDetails(entry: ExperienceEntry, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setSelected(entry);
  }

  function card(entry: ExperienceEntry) {
    return <article className={`experience-card${entry.earlier ? " earlier-card" : ""}`} key={entry.id}>
      <div className="experience-card-heading"><p className="experience-company">{entry.company}</p><p className="experience-period">{entry.period}</p></div>
      <h3>{entry.title}</h3><p className="experience-summary">{entry.summary}</p>
      <div className="tags experience-tags" aria-label="Key skills">{entry.tags.slice(0, 5).map((tag) => <span key={tag}>{tag}</span>)}</div>
      <button className="experience-details-button" onClick={(event) => openDetails(entry, event.currentTarget)} aria-haspopup="dialog" aria-label={`View details: ${entry.company}, ${entry.title}`}>View details <span aria-hidden="true">↗</span></button>
    </article>;
  }

  return <section id="experience" className="shell content-section">
    <div className="section-heading"><div><p className="eyebrow">02 / SELECTED EXPERIENCE</p><h2>Professional experience</h2></div><p>AI engineering, software delivery,<br />and the foundations behind the work.</p></div>
    <div className="experience-cards">{experience.filter((entry) => !entry.earlier).map(card)}</div>
    <div className="earlier-experience"><h3>Earlier Experience</h3>{experience.filter((entry) => entry.earlier).map(card)}</div>
    <dialog ref={dialogRef} className="experience-drawer" aria-labelledby="experience-detail-title" aria-describedby="experience-detail-summary" onClose={() => { setSelected(null); triggerRef.current?.focus({ preventScroll: true }); }} onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
    }}>
      {selected && <div className="experience-drawer-content">
        <div className="drawer-topbar"><p className="eyebrow">{selected.earlier ? "EARLIER EXPERIENCE" : "ROLE DETAILS"}</p><button className="drawer-close" autoFocus onClick={() => dialogRef.current?.close()} aria-label="Close experience details">Close <span aria-hidden="true">×</span></button></div>
        <p className="drawer-company">{selected.company}</p><h2 id="experience-detail-title">{selected.title}</h2><p className="experience-period">{selected.period}</p>
        <p id="experience-detail-summary" className="drawer-summary">{selected.summary}</p>
        <h3>Contributions</h3><ul className="experience-bullets">{selected.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        <h3>Tools & skills</h3><div className="tags">{selected.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>}
    </dialog>
  </section>;
}
