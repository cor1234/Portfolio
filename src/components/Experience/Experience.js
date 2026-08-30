import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import pwcLogo from "../../Assets/logos/pwc-logo.svg";
import capgeminiLogo from "../../Assets/logos/capgemini-logo.svg";

const experienceData = [
  {
    company: "PwC India",
    role: "Associate",
    location: "Pune, India",
    duration: "Jan 2026 - Present",
    current: true,
    logo: pwcLogo,
    points: [
      "Engineered a Deep Agent–based SRE copilot using LangGraph, implementing parallel sub-agents for Azure Monitor alert analysis, Azure AI Search–based runbook retrieval, Cosmos DB incident-history analysis, and an adversarial critic to generate cited, confidence-scored root-cause reports with targeted self-repair.",
      "Built and deployed a full-stack AI chatbot platform using React.js, Node.js, MongoDB/Cosmos DB, FastAPI, and Azure OpenAI to enable conversational enterprise workflows, CRAG-based retrieval, summarization, and multilingual translation with telemetry-driven monitoring.",
      "Designed a multi-agent retrieval-augmented architecture with real-time SSE streaming, confidence scoring, and validation/repair mechanisms to improve reliability, explainability, and operational decision support in enterprise AI scenarios.",
      "Integrated Azure AI Search with semantic ranking and domain-aware filtering to enable secure and contextual retrieval, reducing manual intervention and improving response quality across internal business knowledge systems.",
      "Developed AI-driven diagnostic and incident-response workflows using Azure services, Neo4j knowledge graphs, vector search, and MCP-based tool orchestration for structured reasoning, root-cause analysis, and decision support.",
      "Architected a production-ready AI solution stack with Azure Functions, Azure Container Apps, Docker, and managed identity, ensuring scalable deployment, operational visibility, and secure enterprise integration.",
      "Collaborated with cross-functional teams to translate business requirements into technical solutions while following enterprise engineering standards, deployment practices, and customer-centric delivery workflows.",
    ],
  },
  {
    company: "Capgemini",
    role: "Senior Analyst",
    location: "India",
    duration: "Nov 2024 - Jan 2026",
    current: false,
    logo: capgeminiLogo,
    points: [
      "Designed and implemented Spring Boot REST APIs for project and sub-project assignment workflows with Role-Based Access Control (RBAC), enabling secure and auditable access management across enterprise applications.",
      "Built scalable backend services to replace static FireTV device identifiers with capability-based runtime detection, automating the onboarding process and reducing manual onboarding time from approximately six months to five days.",
      "Migrated backend microservices from JDK 8 to JDK 17/21, improving robustness, maintainability, security, and performance while preserving compatibility across legacy integrations.",
      "Developed ETL and ELT pipelines using Azure Data Factory, Azure Blob Storage, Azure Data Lake, PySpark, and PostgreSQL to automate ingestion, segregation, and lifecycle management for large-scale enterprise data processing.",
      "Designed Snowflake data models with dimension, fact, and domain tables to support reporting and high-availability requirements, while improving query performance and aligning architecture with business needs.",
      "Resolved production issues in Informatica IDMC by performing root-cause analysis on mapping errors and bottlenecks, then implemented corrective automation to stabilize pipelines and reduce recurring failures.",
      "Worked with Agile delivery teams to support CI/CD deployments, unit testing with JUnit and Mockito, and production monitoring using AWS CloudWatch to ensure service reliability and performance.",
    ],
  },
];

const skills = [
  { icon: "🐍", label: "Python" },
  { icon: "☕", label: "Java" },
  { icon: "💻", label: "C / C++" },
  { icon: "🗃️", label: "SQL" },
  { icon: "⚙️", label: "Spring Boot" },
  { icon: "⚛️", label: "React.js" },
  { icon: "🟩", label: "Node.js" },
  { icon: "🌐", label: "REST APIs" },
  { icon: "🖥️", label: "HTML / CSS / JavaScript" },
  { icon: "📊", label: "PySpark" },
  { icon: "📦", label: "Snowflake" },
  { icon: "🧬", label: "PostgreSQL" },
  { icon: "🗄️", label: "MongoDB" },
  { icon: "☁️", label: "Azure" },
  { icon: "☁️", label: "AWS" },
  { icon: "🐳", label: "Docker" },
  { icon: "⚡", label: "Kubernetes" },
  { icon: "🧠", label: "RAG" },
  { icon: "🤖", label: "LangChain" },
  { icon: "🧩", label: "LangGraph" },
  { icon: "🧪", label: "JUnit" },
  { icon: "🧮", label: "System Design" },
  { icon: "🛠️", label: "Git / CI-CD" },
  { icon: "📈", label: "ETL / ELT" },
  { icon: "🛰️", label: "Azure AI Search" },
  { icon: "📡", label: "Azure OpenAI" },
  { icon: "🤝", label: "Copilot Studio" },
  { icon: "🧠", label: "Microsoft Agentic Framework" },
  { icon: "⚙️", label: "AutoGen" },
  { icon: "💻", label: "Bash Scripting" },
  { icon: "🧬", label: "MCP" },
  { icon: "📡", label: "Model Context Protocol" },
  { icon: "🧭", label: "Multi-Agent Systems" },
  { icon: "🧭", label: "Deep Agent" },
];

const coreCompetencies = [
  {
    title: "Backend Development",
    items: [
      "Microservices Architecture",
      "REST API Design",
      "Spring Boot",
      "Database Optimization",
      "Performance Tuning",
      "RBAC",
    ],
  },
  {
    title: "Data & Cloud Engineering",
    items: [
      "ETL/ELT Pipeline Design",
      "Data Warehousing (Snowflake)",
      "Azure & AWS Services",
      "PySpark",
      "Distributed Systems",
    ],
  },
  {
    title: "AI & GenAI",
    items: [
      "RAG Pipelines",
      "Multi-Agent Workflows",
      "LLM Integration",
      "Azure OpenAI",
      "LangChain / LangGraph",
      "Deep Agent",
      "MCP / Model Context Protocol",
      "Agentic Systems",
    ],
  },
  {
    title: "DevOps & Observability",
    items: [
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Azure DevOps",
      "CloudWatch",
      "Git",
    ],
  },
];

const achievements = [
  {
    title: "Reduced FireTV onboarding time from approximately 6 months to 5 days through capability-based runtime detection and automation.",
    link: "https://www.linkedin.com/in/rohan-kumar-465218227/",
  },
  {
    title: "Engineered production-grade multi-agent RAG platforms with SSE streaming, confidence scoring, and automated validation at PwC.",
    link: "https://www.linkedin.com/in/rohan-kumar-465218227/",
  },
  {
    title: "Successfully migrated backend microservices from JDK 8 to JDK 17/21, improving security, maintainability, and performance.",
    link: "https://www.linkedin.com/in/rohan-kumar-465218227/",
  },
  {
    title: "Designed Snowflake dimension, fact, and domain schemas for enterprise reporting and automated Azure ETL pipelines.",
    link: "https://www.linkedin.com/in/rohan-kumar-465218227/",
  },
  {
    title: "Achieved a CGPA of 8.37 at NIT Kurukshetra and ranked 5th in a Microsoft and PwC hackathon.",
    link: "https://www.linkedin.com/in/rohan-kumar-465218227/",
  },
];

const certifications = [
  {
    title: "AWS Certified Data Engineer – Associate",
    link: "https://www.credly.com/badges/fda549b3-9854-4abf-85e8-f44efa122e6a/linked_in_profile",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    link: "https://learn.microsoft.com/en-us/users/rohankumar-1892/credentials/c9ccc72fddb13c30",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    link: "https://learn.microsoft.com/en-us/users/rohankumarin-0718/credentials/519ebcbf59f23ee3",
  },
  {
    title: "HackerRank Problem Solving (Intermediate) Certificate",
    link: "https://www.hackerrank.com/certificates/03c081f5b1bf",
  },
  {
    title: "HackerRank SQL Query Certificate",
    link: "https://www.linkedin.com/in/rohan-softwaredev/overlay/1739689201535/single-media-viewer/",
  },
  {
    title: "Ranked 106th in Codhathon 2022, Inter-NIT competitive programming contest",
    link: "https://www.linkedin.com/in/rohan-kumar-465218227/overlay/1635488065449/single-media-viewer/",
  },
  {
    title: "Ranked 5 in Hackathon conducted by Microsoft and PwC",
    link: "https://www.credly.com/badges/c4d37e17-b1c0-4b22-ae89-da0917d70286/linked_in?t=tiigua",
  },
];

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>

        {experienceData.map((item) => (
          <div className="experience-card" key={`${item.company}-${item.duration}`}>
            <div className="experience-top-row">
              <div className="experience-brand-block">
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  className="company-logo"
                />
                <div className="experience-heading-block">
                  <div className="experience-company">{item.company}</div>
                  <div className="experience-role">{item.role}</div>
                </div>
              </div>

              <div className="experience-duration-block">
                <span className="experience-duration">{item.duration}</span>
                {item.current && <span className="experience-badge">Current</span>}
              </div>
            </div>

            <div className="experience-meta">
              {item.location}
            </div>

            <ul className="experience-list">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        <h1 className="project-heading" style={{ paddingTop: "30px" }}>
          Core <strong className="purple">Skills</strong>
        </h1>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-pill" key={skill.label}>
              <span>{skill.icon}</span>
              <span>{skill.label}</span>
            </div>
          ))}
        </div>

        <h1 className="project-heading" style={{ paddingTop: "30px" }}>
          Core <strong className="purple">Competencies</strong>
        </h1>

        <div className="competency-grid">
          {coreCompetencies.map((group) => (
            <div className="competency-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h1 className="project-heading" style={{ paddingTop: "30px" }}>
          Key <strong className="purple">Achievements</strong>
        </h1>

        <div className="achievement-list">
          {achievements.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="achievement-item achievement-link"
              key={item.title}
            >
              <span className="achievement-dot">•</span>
              <span>{item.title}</span>
            </a>
          ))}
        </div>

        <h1 className="project-heading" style={{ paddingTop: "30px" }}>
          Achievements & <strong className="purple">Certifications</strong>
        </h1>

        <div className="achievement-list">
          {certifications.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="achievement-item achievement-link"
              key={item.title}
            >
              <span className="achievement-dot">•</span>
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
