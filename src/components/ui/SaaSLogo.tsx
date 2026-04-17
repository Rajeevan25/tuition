"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface SaaSLogoProps {
  className?: string
  href?: string
}

export function SaaSLogo({ className, href = "/" }: SaaSLogoProps) {
  return (
    <Link href={href} className={cn("flex items-center gap-2 group", className)}>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
        <span className="material-symbols-outlined text-2xl">hub</span>
      </div>
      <span className="font-headline text-xl font-black tracking-tighter text-on-surface">
        CenterHub
      </span>
    </Link>
  )
}
