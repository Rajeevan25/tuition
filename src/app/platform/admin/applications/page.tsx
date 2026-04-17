"use client"

import Link from "next/link"
import { 
  Building2, 
  ChevronRight, 
  Filter, 
  MoreHorizontal, 
  ArrowUpRight,
  Download
} from "lucide-react"
import { StatusBadge, StatusType } from "@/components/ui/StatusBadge"

const APPLICATIONS = [
  { id: "APP-001", name: "Bright Horizon Academy", owner: "Nimal Perera", city: "Colombo", students: "200-500", date: "Apr 12, 2026", status: "pending" as StatusType },
  { id: "APP-002", name: "Royal Science Circle", owner: "Anura Silva", city: "Kandy", students: "500+", date: "Apr 11, 2026", status: "under_review" as StatusType },
  { id: "APP-003", name: "Future Minds Institute", owner: "Kasun Jayasuriya", city: "Galle", students: "51-200", date: "Apr 10, 2026", status: "pricing_sent" as StatusType },
  { id: "APP-004", name: "Elite Math Hub", owner: "Dilini Perera", city: "Matara", students: "0-50", date: "Apr 09, 2026", status: "approved" as StatusType },
  { id: "APP-005", name: "Success Way Academy", owner: "Pathum Cooray", city: "Gampaha", students: "200-500", date: "Apr 08, 2026", status: "need_info" as StatusType },
  { id: "APP-006", name: "Mastery Center", owner: "Indika Rathnayake", city: "Kurunegala", students: "500+", date: "Apr 07, 2026", status: "active" as StatusType },
]

export default function ApplicationsListPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-black tracking-tight text-on-surface">Institute Applications</h1>
          <p className="text-on-surface-variant font-medium mt-1">Review and manage new institute onboarding requests.</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-outline-variant/10 font-bold text-sm text-on-surface hover:bg-surface-container-low transition-colors">
              <Download className="h-4 w-4" /> Export CSV
           </button>
           <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary font-black text-sm text-white shadow-lg shadow-primary/20 hover:scale-105 transition-all active:scale-95">
              Bulk Actions
           </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Pending", value: "12", color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Under Review", value: "8", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Quotes Sent", value: "14", color: "text-purple-600", bg: "bg-purple-50" },
          { label: "Total Active", value: "524", color: "text-emerald-600", bg: "bg-emerald-50" },
        ].map((stat, i) => (
          <div key={i} className={cn("p-6 rounded-3xl border border-white bg-white/50 shadow-sm", stat.bg)}>
            <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-60 mb-1">{stat.label}</div>
            <div className={cn("text-3xl font-black", stat.color)}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[2.5rem] border border-outline-variant/5 shadow-ambient overflow-hidden">
        <div className="p-6 border-b border-outline-variant/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="flex -space-x-2">
                {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-surface-container-high" />)}
             </div>
             <span className="text-sm font-bold text-on-surface-variant">4 reviewers active</span>
          </div>
          <button className="text-sm font-bold text-primary flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filter List
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
             <thead className="bg-surface-container-lowest text-[10px] font-black uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/5">
                <tr>
                   <th className="px-8 py-5">Institute / Owner</th>
                   <th className="px-8 py-5">Location / Students</th>
                   <th className="px-8 py-5">Submission Date</th>
                   <th className="px-8 py-5">Status</th>
                   <th className="px-8 py-5 text-right">Actions</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-outline-variant/5">
                {APPLICATIONS.map((app) => (
                  <tr key={app.id} className="group hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-8 py-6">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                             <Building2 className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                             <div className="font-bold text-on-surface text-sm">{app.name}</div>
                             <div className="text-xs text-on-surface-variant">{app.owner}</div>
                          </div>
                       </div>
                    </td>
                    <td className="px-8 py-6">
                       <div className="text-sm font-bold text-on-surface">{app.city}</div>
                       <div className="text-xs text-on-surface-variant">{app.students} students</div>
                    </td>
                    <td className="px-8 py-6">
                       <div className="text-sm font-bold text-on-surface">{app.date}</div>
                       <div className="text-xs text-on-surface-variant font-medium">Ref: {app.id}</div>
                    </td>
                    <td className="px-8 py-6">
                       <StatusBadge status={app.status} />
                    </td>
                    <td className="px-8 py-6 text-right">
                       <Link 
                        href={`/platform/admin/applications/${app.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-high font-bold text-xs text-on-surface hover:bg-primary hover:text-white transition-all transform group-hover:translate-x-[-4px]"
                       >
                         Review <ChevronRight className="h-4 w-4" />
                       </Link>
                    </td>
                  </tr>
                ))}
             </tbody>
          </table>
        </div>
        
        <div className="p-6 bg-surface-container-lowest border-t border-outline-variant/5 flex items-center justify-between">
           <p className="text-xs text-on-surface-variant font-medium">Showing 6 of 12 new applications</p>
           <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg border border-outline-variant/10 text-xs font-bold disabled:opacity-30" disabled>Previous</button>
              <button className="px-4 py-2 rounded-lg bg-on-surface text-white text-xs font-bold">Next Page</button>
           </div>
        </div>
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
