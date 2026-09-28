"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { nav, profile } from "@/lib/data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-5">
        <Link
          href="#top"
          className="font-mono text-sm font-bold tracking-tight"
        >
          <span className="text-primary">~/</span>
          <span>ayush-soni</span>
        </Link>

        <nav className="hidden items-center gap-5 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label.toLowerCase()}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">
              <FileText />
              Resume
            </a>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
