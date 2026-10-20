import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Faizan Ejaz | Backend & Applied AI Systems Engineer",
  description:
    "Backend and Applied AI Systems Engineer specializing in high-throughput distributed backends, event-driven messaging pipelines, and production AI agents.",
  keywords: [
    "Backend Engineer",
    "Applied AI Systems",
    "Distributed Systems",
    "Model Context Protocol",
    "Faizan Ejaz",
    "Node.js",
    "TypeScript",
    "RabbitMQ",
    "MongoDB",
    "RAG",
  ],
  favicon: "./favicon.webp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={cn(inter.className, "antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
