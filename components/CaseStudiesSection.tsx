import { CaseStudyCard, CaseStudyProps } from "./CaseStudyCard";

export function CaseStudiesSection() {
  const caseStudies: CaseStudyProps[] = [
    {
      title: "Event-Driven Email Sync Architecture",
      category: "Distributed Systems",
      patternBadge: "Hours → Seconds",
      className: "col-span-1 md:col-span-2 lg:col-span-1",
      overview:
        "Re-architected a legacy polling engine into an event-driven pipeline using OAuth mailbox push notifications, RabbitMQ message queues, and time-and-size bounded consumer micro-batching, cutting reply detection latency from hours to seconds.",
      patterns: [
        "Time-and-count bounded micro-batching (10–60s window or size thresholds) to eliminate redundant inbox connections.",
        "RabbitMQ manual ACK confirmations ensuring zero event loss during worker crash or failover.",
        "Tiered priority queues separating high-throughput OAuth webhooks from legacy polling mailboxes.",
      ],
      techStack: [
        "RabbitMQ",
        "OAuth Webhooks",
        "IMAP/SMTP"
      ],
    },
    {
      title: "OAuth-Secured Model Context Protocol (MCP) Server",
      category: "AI Infrastructure",
      patternBadge: "OAuth 2.0 Scoped",
      className: "col-span-1",
      overview:
        "Architected and deployed a remote MCP server with OAuth 2.0 token scoping, enabling external AI clients and internal automated support agents to safely query real-time user context and execute actions.",
      patterns: [
        "Transport-level OAuth 2.0 token enforcement strictly preventing tenant cross-talk or prompt injection leaks.",
        "Unified tool schema abstraction allowing both internal support bots and external LLM clients to discover and invoke endpoints safely.",
        "Granular permission scoping mapping customer roles directly to executable backend tool actions.",
      ],
      techStack: [
        "TypeScript",
        "MCP",
        "OAuth 2.0"
      ],
    },
    {
      title: "Multi-Tenant E-Commerce Voice RAG Agent",
      category: "Applied AI & Voice",
      patternBadge: "Namespace Isolated",
      className: "col-span-1",
      overview:
        "Engineered a real-time conversational voice agent for Shopify merchants using telephony orchestration and namespace-isolated vector search to deliver low-latency, context-aware customer support.",
      patterns: [
        "Deterministic Pinecone namespace isolation ensuring 100% tenant boundary security and targeted vector search.",
        "Compact chunking strategy with streaming token integration to maintain sub-second voice conversational cadence.",
        "Event-driven vector invalidation and upsert pipeline synchronized with merchant catalog and policy updates.",
      ],
      techStack: [
        "Vapi",
        "Twilio",
        "LangChain",
        "Pinecone"
      ],
    },
  ];

  return (
    <section id="case-studies">
      <div>
        <h2 className="mb-8">Case Studies</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {caseStudies.map((study) => (
          <div key={study.title} className={study.className}>
            <CaseStudyCard {...study} />
          </div>
        ))}
      </div>
    </section>
  );
}
