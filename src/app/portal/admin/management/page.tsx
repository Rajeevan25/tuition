"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { 
  Search, 
  Filter, 
  UserPlus, 
  MoreVertical, 
  Eye, 
  FileEdit, 
  Trash2, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Clock,
  Plus,
  ArrowUpDown,
  FileUp,
  GraduationCap,
  Users,
  ChevronRight,
  Send
} from "lucide-react"
import { cn } from "@/lib/utils"

const MOCK_STUDENTS = [
  { id: "1", name: "Dilshan Perera", email: "dilshan.p@example.com", grade: "A/L 2025", status: "Active", payment: "Paid", avatar: "DP" },
  { id: "2", name: "Amavi Jayasinghe", email: "amavi.j@example.com", grade: "Grade 11", status: "Active", payment: "Pending", avatar: "AJ" },
  { id: "3", name: "Senath Bandara", email: "senath.b@example.com", grade: "Grade 10", status: "Inactive", payment: "Overdue", avatar: "SB" },
  { id: "4", name: "Tharindu Silva", email: "tharindu.s@example.com", grade: "A/L 2024", status: "Active", payment: "Paid", avatar: "TS" },
]

const MOCK_TEACHERS = [
  { id: "T1", name: "Kamal Silva", email: "kamal@centerhub.lk", subject: "Physics", status: "Active", branch: "Colombo 03", avatar: "KS" },
  { id: "T2", name: "Sunil Perera", email: "sunil.p@centerhub.lk", subject: "Maths", status: "Active", branch: "Gampaha", avatar: "SP" },
  { id: "T3", name: "Nimali de Silva", email: "nimali@centerhub.lk", subject: "Chemistry", status: "Inactive", branch: "Kandy", avatar: "NS" },
]

function UserManagementContent() {
  const searchParams = useSearchParams()
  const initialTab = searchParams.get("role") === "teacher" ? "teachers" : "students"
  const [activeTab, setActiveTab] = useState(initialTab)

  const data = activeTab === "students" ? MOCK_STUDENTS : MOCK_TEACHERS

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface">User Management</h1>
          <p className="text-sm text-on-surface-variant font-medium">Manage all students and teachers registered under your institute.</p>
        </div>

        <div className="flex bg-surface-container-low p-1.5 rounded-2xl border border-outline-variant/10 shadow-sm">
           <button 
             onClick={() => setActiveTab("students")}
             className={cn(
               "px-6 py-2 rounded-xl text-sm font-black transition-all flex items-center gap-2",
               activeTab === "students" ? "bg-white text-primary shadow-md" : "text-on-surface-variant hover:text-on-surface"
             )}
           >
              <Users className="h-4 w-4" /> Students
           </button>
           <button 
             onClick={() => setActiveTab("teachers")}
             className={cn(
               "px-6 py-2 rounded-xl text-sm font-black transition-all flex items-center gap-2",
               activeTab === "teachers" ? "bg-white text-primary shadow-md" : "text-on-surface-variant hover:text-on-surface"
             )}
           >
              <GraduationCap className="h-4 w-4" /> Teachers
           </button>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="flex-1 w-full max-w-lg relative group">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
           <input 
             type="text" 
             placeholder={`Search by name, email, or ID...`} 
             className="w-full h-12 pl-12 pr-4 rounded-2xl bg-white border border-outline-variant/5 shadow-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
           />
        </div>

        <div className="flex gap-3">
           <button className="p-3 rounded-2xl bg-white border border-outline-variant/10 shadow-sm text-on-surface-variant hover:text-primary transition-colors">
              <Filter className="h-5 w-5" />
           </button>
           {activeTab === "students" && (
             <Link href="/portal/admin/students/import" className="p-3 rounded-2xl bg-white border border-outline-variant/10 shadow-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 px-4 font-bold text-sm">
                <FileUp className="h-4 w-4" /> <span className="hidden sm:inline">Bulk Import</span>
             </Link>
           )}
           <Link 
             href={activeTab === "students" ? "/portal/admin/students/add" : "/portal/admin/teachers/add"}
             className="primary-gradient text-white px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
           >
              <Plus className="h-4 w-4" /> Add {activeTab === "students" ? "Student" : "Teacher"}
           </Link>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-[2.5rem] border border-outline-variant/5 shadow-ambient overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-outline-variant/5">
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
                  <div className="flex items-center gap-2">Name & Profile <ArrowUpDown className="h-3 w-3" /></div>
                </th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
                  {activeTab === "students" ? "Grade / Level" : "Subject Area"}
                </th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
                  {activeTab === "students" ? "Payment Status" : "Branch"}
                </th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Status</th>
                <th className="px-8 py-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {data.map((item: any) => (
                <tr key={item.id} className="group hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shadow-sm",
                        activeTab === 'students' ? "bg-indigo-50 text-indigo-600" : "bg-emerald-50 text-emerald-600"
                      )}>
                        {item.avatar}
                      </div>
                      <div>
                        <div className="font-black text-on-surface group-hover:text-primary transition-colors">{item.name}</div>
                        <div className="text-xs font-medium text-on-surface-variant opacity-60">{item.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-sm font-bold text-on-surface-variant">
                      {activeTab === "students" ? item.grade : item.subject}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    {activeTab === "students" ? (
                      <span className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                        item.payment === 'Paid' ? "bg-emerald-50 text-emerald-700" : item.payment === 'Pending' ? "bg-amber-50 text-amber-700" : "bg-error/10 text-error"
                      )}>
                        <div className={cn("w-1.5 h-1.5 rounded-full", item.payment === 'Paid' ? "bg-emerald-500" : item.payment === 'Pending' ? "bg-amber-500" : "bg-error")} />
                        {item.payment}
                      </span>
                    ) : (
                      <span className="text-sm font-bold text-on-surface-variant">{item.branch}</span>
                    )}
                  </td>
                  <td className="px-8 py-5">
                    <div className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
                      item.status === 'Active' ? "border-emerald-100 bg-emerald-50/50 text-emerald-700" : "border-outline-variant/10 bg-surface-container-low text-on-surface-variant"
                    )}>
                      {item.status}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2.5 rounded-xl text-on-surface-variant hover:bg-white hover:shadow-sm hover:text-primary transition-all" title="View Profile">
                        <Eye className="h-4.5 w-4.5" />
                      </button>
                      <button className="p-2.5 rounded-xl text-on-surface-variant hover:bg-white hover:shadow-sm hover:text-indigo-600 transition-all" title="Edit">
                        <FileEdit className="h-4.5 w-4.5" />
                      </button>
                      <button className="p-2.5 rounded-xl text-on-surface-variant hover:bg-white hover:shadow-sm hover:text-primary transition-all" title="Resend Invite">
                        <Send className="h-4.5 w-4.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-surface-container-low/30 border-t border-outline-variant/5 flex items-center justify-between">
           <p className="text-xs font-bold text-on-surface-variant opacity-60">
             Showing <span className="text-on-surface">4</span> of <span className="text-on-surface">152</span> users
           </p>
           <div className="flex gap-2">
              <button className="w-10 h-10 rounded-xl border border-outline-variant/10 flex items-center justify-center text-on-surface-variant hover:bg-white transition-all disabled:opacity-30" disabled>
                 <ChevronRight className="h-5 w-5 rotate-180" />
              </button>
              <button className="w-10 h-10 rounded-xl bg-primary text-white font-black shadow-lg shadow-primary/20">1</button>
              <button className="w-10 h-10 rounded-xl border border-outline-variant/10 flex items-center justify-center text-on-surface font-bold hover:bg-white transition-all">2</button>
              <button className="w-10 h-10 rounded-xl border border-outline-variant/10 flex items-center justify-center text-on-surface-variant hover:bg-white transition-all">
                 <ChevronRight className="h-5 w-5" />
              </button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default function UserManagementPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center font-bold opacity-40 uppercase tracking-widest text-xs">Loading Management...</div>}>
      <UserManagementContent />
    </Suspense>
  )
}
