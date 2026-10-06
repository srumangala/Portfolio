"use client";

import { useState } from "react";
import type { FlipEntry } from "../content";

export default function FlipCard({ entry, index }: { entry: FlipEntry; index: number }) {
  const [flipped, setFlipped] = useState(false);
  return <button type="button" className={`flip-card${flipped ? " is-flipped" : ""}`} onClick={() => setFlipped(!flipped)} aria-pressed={flipped} aria-label={`${entry.title}: ${flipped ? "show overview" : "show details"}`}>
    <span className="flip-inner">
      <span className="flip-face flip-front" aria-hidden={flipped}>
        <span className="card-topline"><span className="card-index">{String(index + 1).padStart(2, "0")}</span><span className="card-period">{entry.period}</span></span>
        {entry.placeholder && <span className="sample-label">Sample entry</span>}
        {entry.employmentType && <span className="employment-type">{entry.employmentType}</span>}
        <span className="flip-title">{entry.title}</span><span className="flip-organization">{entry.organization}</span><span className="flip-summary">{entry.summary}</span><span className="flip-hint">{entry.detailsTitle === "Relevant Coursework" ? "View coursework" : "View details"} <span>↻</span></span>
      </span>
      <span className="flip-face flip-back" aria-hidden={!flipped}>
        <span className="card-topline"><span className="card-index">{String(index + 1).padStart(2, "0")}</span><span className="card-period">{entry.period}</span></span><span className="flip-title">{entry.detailsTitle || entry.title}</span>
        <span className="flip-details">{entry.details.map((detail) => <span key={detail}>— {detail}</span>)}</span><span className="flip-hint">Back to overview <span>↻</span></span>
      </span>
    </span>
  </button>;
}
