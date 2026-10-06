// Edit this file to personalize every page. Sample cards do not claim real experience.
export const profile = {
  name: "Sruthi Mangala Suresh",
  headline: "AI Engineer · Full-Stack AI · Agentic Systems",
  intro: "I build production-oriented AI applications, from LLM systems and APIs to cloud deployment.",
  about: "I’m Sruthi, an engineer with an electrical engineering background at the University of Stuttgart, focused on AI software engineering. I’m interested in building useful AI applications, connecting models with reliable software, and taking ideas from experimentation to deployment.",
  email: "sruthimangalasuresh@gmail.com",
  github: "https://github.com/srumangala",
  linkedin: "https://www.linkedin.com/in/sruthimangala",
  resumeUrl: "/Resume_Sruthi_Mangala_Suresh_Portfolio.pdf", 
};

export const techStack = [
  { label: "Programming", items: ["Python", "SQL"] },
  { label: "AI Tools & Frameworks", items: ["Hugging Face", "Weaviate", "Ollama", "FastAPI", "PostgreSQL"] },
  { label: "Cloud & MLOps", items: ["AWS", "Amazon Bedrock", "Amazon SageMaker", "Terraform"] },
  { label: "DevOps & Deployment", items: ["Docker", "Docker Compose", "Kubernetes", "Git", "GitLab CI/CD"] },
  { label: "Tools", items: ["Atlassian Jira", "Confluence"] },
  { label: "Languages", items: ["English (C1)", "German (B2.1)"] },
];

export type FlipEntry = { id: string; title: string; organization: string; period: string; summary: string; details: string[]; detailsTitle?: string; employmentType?: string; placeholder?: boolean };
export type ExperienceEntry = {
  id: string; company: string; title: string; period: string; summary: string;
  tags: string[]; details: string[]; earlier?: boolean;
};
export const experience: ExperienceEntry[] = [
  {
    id: "vector-thesis", company: "Vector Consulting Services / Master Thesis",
    title: "Master’s Thesis – Generative AI / AI Engineering", period: "Jan 2026 – Jun 2026",
    summary: "Built a full-stack AI system for analysing automotive requirements, suggesting corrections, and generating trace links between requirements and test cases.",
    tags: ["Python", "FastAPI", "Weaviate", "RAG", "LLM Evaluation", "PostgreSQL", "Docker"],
    details: [
      "Investigated whether LLMs can reliably identify quality issues in requirements and suggest suitable corrections.",
      "Developed automatic trace-link generation between requirements and corresponding test cases.",
      "Developed an LLM-as-a-Judge evaluation pipeline to evaluate generated outputs.",
      "Built the supporting full-stack application, including frontend, backend, database, vector search, and LLM integration.",
      "Used RAG and local LLM workflows.",
    ],
  },
  {
    id: "stuttgart-ift", company: "University of Stuttgart – IFT",
    title: "Research Assistant / Wissenschaftliche Hilfskraft", period: "Feb 2026 – Sep 2026",
    summary: "Extended an intralogistics simulation and designed the MDP formulation for a planned Deep Reinforcement Learning relocation strategy.",
    tags: ["Python", "Siemens Plant Simulation", "MDP", "Simulation", "Reinforcement Learning Concepts"],
    details: [
      "Extended an existing Siemens Plant Simulation model for warehouse/intralogistics processes.",
      "Implemented and improved routing and relocation logic.",
      "Designed a Markov Decision Process for a planned Deep Reinforcement Learning approach.",
      "Defined and implemented state, action, and reward representations.",
      "Improved structure, documentation, and readability of the simulation model.",
    ],
  },
  {
    id: "mercedes-internship", company: "Mercedes-Benz AG",
    title: "Software Development Internship", period: "Apr 2025 – Oct 2025",
    summary: "Improved Python tooling, CI/CD pipelines, technical documentation, and software release workflows.",
    tags: ["Python", "GitLab CI/CD", "Sphinx", "Git", "Black Duck"],
    details: [
      "Built and refactored GitLab CI/CD pipelines.",
      "Introduced parallel builds and improved artifact exchange to reduce build times.",
      "Implemented Python performance improvements.",
      "Established an internal FOSS approval workflow using Black Duck.",
      "Reworked technical documentation using Sphinx and GitLab Pages.",
    ],
  },
  {
    id: "mercedes-working-student", company: "Mercedes-Benz AG",
    title: "Working Student – Software Development", period: "Aug 2024 – Mar 2025",
    summary: "Developed and improved internal Python tooling and automated engineering documentation workflows.",
    tags: ["Python", "Jinja", "Confluence", "Git", "Software Engineering"],
    details: [
      "Developed and optimized features for the Journey Generator Tool.",
      "Automated generation of structured Confluence documentation.",
      "Improved test coverage reporting.",
      "Worked on new documentation, visualization, and product-structure concepts.",
    ],
  },
  {
    id: "bosch", company: "Robert Bosch GmbH", title: "Working Student – ADAS Engineering Software",
    period: "Dec 2023 – May 2024",
    summary: "Worked on internal engineering software for validating state-machine behaviour in ADAS systems.",
    tags: ["MATLAB", "ADAS", "State Machines", "Software Engineering"],
    details: [
      "Supported internal tool development for checking state machines.",
      "Extended a MATLAB-based tool used for ADAS state management.",
      "Worked on improving error detection and diagnostic coverage.",
    ],
  },
  {
    id: "deloitte", company: "Deloitte USI", title: "Analyst", period: "Jan 2022 – Feb 2023", earlier: true,
    summary: "Worked on functional and regression testing of a large web application.",
    tags: ["Software Testing", "Functional Testing", "Regression Testing"],
    details: [
      "Designed and executed functional tests.",
      "Performed regression testing.",
      "Worked on a Medicaid web application for a US state-government client.",
    ],
  },
];
export const education: FlipEntry[] = [
  {
    id: "education-1",
    title: "Master of Science in Electrical Engineering",
    organization: "Universität Stuttgart · Stuttgart, Germany",
    period: "Sep 2026",
    summary: "Major: Smart Systems · Grade: 1.7",
    detailsTitle: "Relevant Coursework",
    details: ["Deep Learning", "Software Engineering", "Industrial Automation Systems", "Automotive RADAR", "Embedded Systems", "Detection and Pattern Recognition"],
  },
  {
    id: "education-2",
    title: "Bachelor of Technology (Honors) in Electrical and Electronics Engineering",
    organization: "APJ Abdul Kalam Technological University · Thiruvananthapuram, India",
    period: "Sep 2021",
    summary: "Grade: 1.4",
    detailsTitle: "Relevant Coursework",
    details: ["Object Oriented Programming", "C Programming", "Soft Computing", "Microprocessors and Embedded Systems", "Engineering Mathematics"],
  },
];

export type Project = {
  slug: string; title: string; type: string; example: boolean;
  description: string; tags: string[]; githubUrl: string; demoUrl?: string;
  links: ("demo" | "case-study" | "github")[];
  details: { heading: string; text: string }[];
};
const sampleDetails = (approach: string) => [
  { heading: "The problem", text: "This is a sample project. Replace this section with the user problem, requirements, and your own contribution." },
  { heading: "Architecture & approach", text: approach },
  { heading: "Evaluation & results", text: "Add real metrics, test examples, screenshots, limitations, and what you would improve. Sample descriptions are starting points, not completed work." },
];
export const projects: Project[] = [
  { slug: "agentic-ai", title: "Agentic AI Project", type: "AI", example: true, description: "A sample tool-using AI assistant with structured workflows, API integrations, and observable execution.", tags: ["Agents", "LLMs", "FastAPI"], githubUrl: "", demoUrl: "", links: ["demo", "github"], details: sampleDetails("Describe your agent workflow, tool interfaces, safeguards, tracing, and evaluation. Explain when you use an agent rather than a fixed pipeline.") },
  { slug: "requirements-traceability", title: "AI Requirements Traceability", type: "AI", example: true, description: "A sample system connecting requirements to evidence, with semantic retrieval and traceable AI-assisted analysis.", tags: ["RAG", "Python", "PostgreSQL"], githubUrl: "", links: ["case-study"], details: sampleDetails("Describe how requirements and evidence are indexed, retrieved, and linked. Explain citations, human review, and how you evaluate traceability quality.") },
  { slug: "warehouse-drl", title: "Warehouse DRL", type: "RL", example: true, description: "A sample deep reinforcement learning project exploring warehouse decisions in a simulated environment.", tags: ["RL", "Python", "Simulation"], githubUrl: "", links: ["case-study", "github"], details: sampleDetails("Explain your simulation, state and action spaces, reward design, and training approach. Compare the learned policy against a meaningful baseline.") },
  { slug: "document-assistant", title: "Document Intelligence API", type: "AI", example: true, description: "A sample document question-answering API with retrieval, source citations, and quality evaluation.", tags: ["RAG", "FastAPI", "LLMs"], githubUrl: "", links: ["case-study", "github"], details: sampleDetails("Describe document ingestion, chunking, retrieval, generation, and API design. Include how you handle missing evidence and evaluate grounded answers.") },
  { slug: "ai-deployment", title: "AI Deployment Platform", type: "Infrastructure", example: true, description: "A sample cloud deployment workflow for an AI service, with containerization and automated releases.", tags: ["AWS", "Docker", "Terraform"], githubUrl: "", links: ["case-study", "github"], details: sampleDetails("Describe the service architecture, infrastructure, CI/CD pipeline, monitoring, and rollback strategy. Explain cost and reliability tradeoffs.") },
];


