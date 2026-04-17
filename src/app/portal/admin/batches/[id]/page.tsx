"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Users, 
  Calendar, 
  ClipboardCheck, 
  FileText, 
  CreditCard, 
  TrendingUp,
  MoreVertical,
  ChevronLeft,
  Settings,
  Plus,
  ArrowRight,
  Clock,
  MapPin,
  Mail,
  Video,
  AlertCircle,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function BatchDetailDashboard() {
  const [activeTab, setActiveTab] = useState("students")
  const [isExtraClassModalOpen, setIsExtraClassModalOpen] = useState(false)
  const [isCancelClassModalOpen, setIsCancelClassModalOpen] = useState(false)

  const TABS = [
    { id: "students", label: "Students", icon: Users },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { id: "attendance", label: "Attendance", icon: ClipboardCheck },
    { id: "materials", label: "Materials", icon: FileText },
    { id: "payments", label: "Payments", icon: CreditCard },
    { id: "reports", label: "Reports", icon: TrendingUp },
  ]

  const batchInfo = {
    name: "Grade 11 Physics - Weekend",
    subject: "Physics",
    teacher: "Kamal Silva",
    students: 42,
    capacity: 50,
    status: "Active",
    nextClass: "Sunday, 08:30 AM",
    location: "Main Hall A"
  }

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20">
      {/* Detail Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
         <div className="flex items-center gap-6">
            <Link href="/portal/admin/batches" className="w-12 h-12 rounded-2xl bg-white border border-outline-variant/10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all">
               <ChevronLeft className="h-6 w-6" />
            </Link>
            <div>
               <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-black text-on-surface tracking-tight">{batchInfo.name}</h1>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">{batchInfo.status}</span>
               </div>
               <p className="text-sm font-medium text-on-surface-variant opacity-60 mt-1">Managed by {batchInfo.teacher} • {batchInfo.subject}</p>
            </div>
         </div>

         <div className="flex gap-3">
            <button 
              onClick={() => setIsCancelClassModalOpen(true)}
              className="px-6 py-3 rounded-2xl bg-white text-error font-black text-xs uppercase tracking-widest border border-error/20 hover:bg-error/5 transition-all"
            >
               Cancel Session
            </button>
            <button 
              onClick={() => setIsExtraClassModalOpen(true)}
              className="primary-gradient text-white px-8 py-3 rounded-2xl font-black text-sm shadow-xl shadow-primary/20 flex items-center gap-2 hover:scale-105 transition-all"
            >
               <Plus className="h-4 w-4" /> Add Extra Class
            </button>
         </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         <div className="bg-white p-8 rounded-[2.5rem] border border-outline-variant/5 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-indigo-600">
               <Users className="h-5 w-5" />
               <span className="text-[10px] font-black uppercase tracking-widest">Enrollment</span>
            </div>
            <div className="flex items-end gap-2">
               <span className="text-3xl font-black text-on-surface">{batchInfo.students}</span>
               <span className="text-sm font-bold text-on-surface-variant opacity-40 mb-1">/ {batchInfo.capacity} Limit</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden">
               <div className="h-full bg-indigo-500 rounded-full" style={{ width: "84%" }}></div>
            </div>
         </div>

         <div className="bg-white p-8 rounded-[2.5rem] border border-outline-variant/5 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-emerald-600">
               <ClipboardCheck className="h-5 w-5" />
               <span className="text-[10px] font-black uppercase tracking-widest">Avg Attendance</span>
            </div>
            <div className="flex items-end gap-2">
               <span className="text-3xl font-black text-on-surface">92.4%</span>
               <span className="text-[10px] font-black text-emerald-500 mb-1">+2.4%</span>
            </div>
            <div className="text-[10px] font-bold text-on-surface-variant opacity-40">Based on last 10 sessions</div>
         </div>

         <div className="bg-white p-8 rounded-[2.5rem] border border-outline-variant/5 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-rose-600">
               <CreditCard className="h-5 w-5" />
               <span className="text-[10px] font-black uppercase tracking-widest">Revenue Status</span>
            </div>
            <div className="flex items-end gap-2">
               <span className="text-3xl font-black text-on-surface">86%</span>
               <span className="text-[10px] font-black text-rose-500 mb-1">-4%</span>
            </div>
            <div className="text-[10px] font-bold text-on-surface-variant opacity-40">Payment collection rate</div>
         </div>

         <div className="bg-primary p-8 rounded-[3rem] text-white flex flex-col justify-between shadow-xl shadow-primary/20">
            <div className="flex justify-between items-start">
               <div className="p-3 rounded-2xl bg-white/20">
                  <Clock className="h-5 w-5" />
               </div>
               <span className="text-[8px] font-black uppercase tracking-widest bg-white/10 px-2 py-1 rounded-lg">Next Event</span>
            </div>
            <div className="pt-4">
               <p className="text-xl font-black">{batchInfo.nextClass}</p>
               <div className="flex items-center gap-2 text-[10px] font-bold opacity-60">
                  <MapPin className="h-3 w-3" /> {batchInfo.location}
               </div>
            </div>
         </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-outline-variant/10 gap-10">
         {TABS.map((tab) => {
            const isActive = activeTab === tab.id
            const Icon = tab.icon
            return (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "pb-6 text-sm font-black uppercase tracking-widest flex items-center gap-2 transition-all relative",
                  isActive ? "text-primary" : "text-on-surface-variant opacity-40 hover:opacity-60"
                )}
              >
                 <Icon className="h-4 w-4" />
                 {tab.label}
                 {isActive && (
                   <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full shadow-lg shadow-primary/20" />
                 )}
              </button>
            )
         })}
      </div>

      {/* Tab Content Placeholder */}
      <div className="min-h-[400px]">
         {activeTab === "students" && (
           <div className="bg-white rounded-[3rem] border border-outline-variant/5 shadow-ambient overflow-hidden">
             <div className="p-8 border-b border-outline-variant/5 flex justify-between items-center bg-surface-container-low/20">
                <h3 className="text-lg font-black text-on-surface">Enrolled Students (42)</h3>
                <button className="text-xs font-black uppercase tracking-widest text-primary hover:underline">Download List</button>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead>
                      <tr className="border-b border-outline-variant/5">
                         <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Profile</th>
                         <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Joined Date</th>
                         <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Attendance</th>
                         <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Payment</th>
                         <th className="px-8 py-6 text-right">Actions</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-outline-variant/5">
                      {[1,2,3,4].map(i => (
                        <tr key={i} className="group hover:bg-surface-container-low/30 transition-colors">
                           <td className="px-8 py-5">
                              <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center font-black text-xs overflow-hidden shadow-sm">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=student${i}`} alt="Avatar" />
                                 </div>
                                 <div>
                                    <div className="font-black text-on-surface group-hover:text-primary transition-colors text-sm">Amavi Jayasinghe {i}</div>
                                    <div className="text-[10px] font-medium text-on-surface-variant opacity-40">CH2025-00{i}</div>
                                 </div>
                              </div>
                           </td>
                           <td className="px-8 py-5 text-xs font-bold text-on-surface-variant">Jan 12, 2024</td>
                           <td className="px-8 py-5 text-xs font-black text-emerald-600">96.5%</td>
                           <td className="px-8 py-5">
                              <span className="text-[9px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg">Paid</span>
                           </td>
                           <td className="px-8 py-5 text-right">
                              <button className="p-2 rounded-xl text-on-surface-variant hover:text-indigo-600 hover:bg-white transition-all">
                                 <MoreVertical className="h-4 w-4" />
                              </button>
                           </td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
             <div className="p-6 bg-surface-container-low/20 text-center border-t border-outline-variant/5">
                <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">View All Students</button>
             </div>
           </div>
         )}
         
         {activeTab === "schedule" && (
           <div className="space-y-6">
              <div className="flex justify-between items-center">
                 <h3 className="text-xl font-black text-on-surface tracking-tight">Recurring Weekly Schedule</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                   { day: "Sunday", time: "08:30 AM - 10:30 AM", room: "Main Hall A", type: "Theory" },
                   { day: "Wednesday", time: "04:30 PM - 06:30 PM", room: "Basics Room 02", type: "Discussion" },
                 ].map((s, i) => (
                   <div key={i} className="bg-white p-8 rounded-[3rem] border border-outline-variant/5 shadow-sm flex items-center justify-between group hover:border-primary/20 transition-all">
                      <div className="flex items-center gap-6">
                         <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black">
                            {s.day.substring(0, 3).toUpperCase()}
                         </div>
                         <div>
                            <p className="text-lg font-black text-on-surface">{s.time}</p>
                            <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant opacity-60">
                               <MapPin className="h-3 w-3" /> {s.room} • <Video className="h-3 w-3" /> Hybrid
                            </div>
                         </div>
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-widest bg-surface-container-low px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-white transition-all">{s.type}</span>
                   </div>
                 ))}
              </div>
           </div>
         )}

         {activeTab === "attendance" && (
            <div className="bg-white rounded-[3rem] border border-outline-variant/5 shadow-ambient p-10 space-y-10">
               <div className="flex justify-between items-center">
                  <div className="space-y-1">
                     <h3 className="text-xl font-black text-on-surface tracking-tight">Recent Sessions</h3>
                     <p className="text-xs font-medium text-on-surface-variant opacity-40">Detailed attendance breakdown per session.</p>
                  </div>
                  <button className="px-6 py-3 rounded-2xl bg-primary text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                     Download Analytics
                  </button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { date: "April 12, 2026", present: 38, absent: 4, status: "Completed" },
                    { date: "April 05, 2026", present: 40, absent: 2, status: "Completed" },
                    { date: "March 29, 2026", present: 36, absent: 6, status: "Completed" }
                  ].map((session, i) => (
                    <div key={i} className="bg-surface-container-low/30 border border-outline-variant/5 rounded-3xl p-8 space-y-6">
                       <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                <Calendar className="h-5 w-5 text-primary" />
                             </div>
                             <p className="font-black text-on-surface">{session.date}</p>
                          </div>
                          <span className="text-[8px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">Verified</span>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-2xl shadow-sm border border-outline-variant/5">
                             <p className="text-[8px] font-black uppercase tracking-widest opacity-40">Present</p>
                             <p className="text-lg font-black text-emerald-600">{session.present}</p>
                          </div>
                          <div className="bg-white p-4 rounded-2xl shadow-sm border border-outline-variant/5">
                             <p className="text-[8px] font-black uppercase tracking-widest opacity-40">Absent</p>
                             <p className="text-lg font-black text-rose-600">{session.absent}</p>
                          </div>
                       </div>
                       <button className="w-full py-3 rounded-xl bg-white text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all shadow-sm">
                          View Details
                       </button>
                    </div>
                  ))}
               </div>
            </div>
         )}
      </div>

      {/* Operational Modals */}
      <AnimatePresence>
        {isExtraClassModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsExtraClassModalOpen(false)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-xl bg-white rounded-[2.5rem] p-10 space-y-8 shadow-2xl">
               <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-black text-on-surface tracking-tight">Schedule Extra Class</h2>
                  <button onClick={() => setIsExtraClassModalOpen(false)} className="p-2 rounded-xl hover:bg-slate-100 transition-colors"><X className="h-5 w-5" /></button>
               </div>
               <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Date</label>
                       <input type="date" className="w-full h-12 px-4 rounded-xl bg-surface-container-low outline-none font-bold text-sm" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Start Time</label>
                       <input type="time" className="w-full h-12 px-4 rounded-xl bg-surface-container-low outline-none font-bold text-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Reason / Description</label>
                     <textarea placeholder="e.g. Paper Revision Session" className="w-full h-24 p-4 rounded-xl bg-surface-container-low outline-none font-bold text-sm resize-none"></textarea>
                  </div>
               </div>
               <div className="flex gap-4 pt-4">
                  <button onClick={() => setIsExtraClassModalOpen(false)} className="flex-1 py-4 rounded-2xl bg-surface-container-low text-xs font-black uppercase tracking-widest">Cancel</button>
                  <button className="flex-[2] primary-gradient text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20">Schedule Now</button>
               </div>
            </motion.div>
          </div>
        )}

        {isCancelClassModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCancelClassModalOpen(false)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-lg bg-white rounded-[2.5rem] p-10 space-y-8 shadow-2xl">
               <div className="flex items-center gap-4 text-error">
                  <div className="w-12 h-12 rounded-2xl bg-error/10 flex items-center justify-center">
                     <AlertCircle className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-black tracking-tight">Cancel Next Session?</h2>
               </div>
               <p className="text-sm font-medium text-on-surface-variant opacity-60">This will notify all 42 students and the teacher. This action is irreversible.</p>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Cancellation Notes</label>
                  <input type="text" placeholder="e.g. Public Holiday" className="w-full h-12 px-4 rounded-xl bg-surface-container-low outline-none font-bold text-sm" />
               </div>
               <div className="flex gap-4 pt-4">
                  <button onClick={() => setIsCancelClassModalOpen(false)} className="flex-1 py-3 rounded-2xl bg-surface-container-low text-xs font-black uppercase tracking-widest">Keep Session</button>
                  <button className="flex-[2] bg-error text-white py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-error/20">Confirm Cancellation</button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
