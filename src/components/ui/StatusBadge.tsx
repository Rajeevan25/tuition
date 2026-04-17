"use client"

import { cn } from "@/lib/utils"

export type StatusType = 
  | "pending" 
  | "under_review" 
  | "need_info" 
  | "pricing_sent" 
  | "approved" 
  | "rejected" 
  | "awaiting_payment" 
  | "active"

interface StatusBadgeProps {
  status: StatusType
  className?: string
}

const statusConfig: Record<StatusType, { label: string, color: string, bg: string }> = {
  pending: { label: "Pending", color: "text-amber-700", bg: "bg-amber-100" },
  under_review: { label: "Under Review", color: "text-blue-700", bg: "bg-blue-100" },
  need_info: { label: "Need More Info", color: "text-orange-700", bg: "bg-orange-100" },
  pricing_sent: { label: "Pricing Sent", color: "text-purple-700", bg: "bg-purple-100" },
  approved: { label: "Approved", color: "text-emerald-700", bg: "bg-emerald-100" },
  rejected: { label: "Rejected", color: "text-red-700", bg: "bg-red-100" },
  awaiting_payment: { label: "Awaiting Payment", color: "text-indigo-700", bg: "bg-indigo-100" },
  active: { label: "Active", color: "text-emerald-700", bg: "bg-emerald-200" },
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status] || statusConfig.pending

  return (
    <span className={cn(
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider",
      config.bg,
      config.color,
      className
    )}>
      {config.label}
    </span>
  )
}
