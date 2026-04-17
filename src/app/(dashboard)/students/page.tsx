"use client"

import { useState } from "react"
import Link from "next/link"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { Search, Filter, UserPlus, MoreVertical, Eye, FileEdit, Trash2, Mail, Phone, Calendar, CheckCircle2, AlertCircle, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const students = [
  { id: 1, name: "Dilshan Perera", email: "dilshan.p@example.com", grade: "A/L 2025", status: "Paid", attendance: "Today, 09:15 AM", avatar: "D" },
  { id: 2, name: "Amavi Jayasinghe", email: "amavi.j@example.com", grade: "Grade 11 (O/L)", status: "Pending", attendance: "Yesterday, 10:45 AM", avatar: "A" },
  { id: 3, name: "Senath Bandara", email: "senath.b@example.com", grade: "Grade 10", status: "Paid", attendance: "Today, 08:50 AM", avatar: "S" },
  { id: 4, name: "Tharindu Silva", email: "tharindu.s@example.com", grade: "A/L 2024", status: "Paid", attendance: "2 days ago", avatar: "T" },
]

export default function StudentsPage() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <main className="p-6 md:p-10 min-h-screen space-y-8">
      <DashboardHeader 
        title="Students Directory" 
        subtitle="Manage student enrollment, profiles, and academic status."
      />

      {/* Controls Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 bg-surface-container-highest px-5 py-2.5 rounded-full text-on-surface font-semibold text-sm hover:brightness-95 transition-all">
            <Filter className="h-4 w-4" /> Filter
          </button>
          <div className="flex items-center gap-2 bg-surface-container-low px-5 py-2.5 rounded-full text-on-surface-variant font-medium text-sm">
            <span>Status:</span>
            <select className="bg-transparent border-none p-0 text-primary font-bold focus:ring-0 text-sm cursor-pointer outline-none">
              <option>All Students</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
        
        <button className="primary-gradient text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
          <UserPlus className="h-4 w-4" /> Add Student
        </button>
      </div>

      {/* Student List Container */}
      <section className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-ambient">
        {/* Desktop Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-5 border-b border-surface-container-low text-on-surface-variant text-[11px] font-bold uppercase tracking-widest">
          <div className="col-span-4">Student Name</div>
          <div className="col-span-2">Grade</div>
          <div className="col-span-2">Fee Status</div>
          <div className="col-span-2">Last Attendance</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        {/* List Items */}
        <div className="divide-y divide-surface-container-low">
          {students.map((student) => (
            <div key={student.id} className="group grid grid-cols-1 md:grid-cols-12 gap-4 px-6 md:px-8 py-5 items-center hover:bg-surface-container-low/30 transition-colors">
              <Link href={`/students/${student.id}`} className="col-span-1 md:col-span-4 flex items-center gap-4 group/item">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg shadow-sm group-hover/item:scale-105 transition-transform">
                  {student.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-on-surface text-base group-hover/item:text-primary transition-colors">{student.name}</h3>
                  <p className="text-xs text-on-surface-variant font-medium">{student.email}</p>
                </div>
              </Link>
              
              <div className="col-span-1 md:col-span-2">
                <span className="md:hidden text-[10px] uppercase font-bold text-outline block mb-1">Grade</span>
                <div className="inline-flex bg-surface-container px-3 py-1 rounded-lg text-sm font-semibold text-primary">
                  {student.grade}
                </div>
              </div>

              <div className="col-span-1 md:col-span-2">
                <span className="md:hidden text-[10px] uppercase font-bold text-outline block mb-1">Fee Status</span>
                <span className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold",
                  student.status === 'Paid' 
                    ? "bg-emerald-50 text-emerald-700" 
                    : "bg-amber-50 text-amber-700"
                )}>
                  <span className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    student.status === 'Paid' ? "bg-emerald-500" : "bg-amber-500 animate-pulse"
                  )}></span>
                  {student.status}
                </span>
              </div>

              <div className="col-span-1 md:col-span-2">
                <span className="md:hidden text-[10px] uppercase font-bold text-outline block mb-1">Attendance</span>
                <p className="text-sm font-medium text-on-surface-variant">{student.attendance}</p>
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-end gap-2">
                <button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors" title="Quick View">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer / Pagination */}
        <div className="px-8 py-5 flex items-center justify-between border-t border-surface-container-low">
          <p className="text-sm text-on-surface-variant">Showing <span className="font-bold text-on-surface">4</span> of 152 students</p>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-surface-container-low hover:bg-surface-container-low transition-colors">
              <Clock className="h-4 w-4 rotate-180" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white font-bold shadow-md shadow-primary/20">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-surface-container-low hover:bg-surface-container-low transition-colors text-on-surface font-semibold">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-surface-container-low hover:bg-surface-container-low transition-colors">
              <Clock className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
