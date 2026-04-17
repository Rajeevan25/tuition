"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  Plus, 
  Zap, 
  AlertCircle,
  Clock,
  MapPin,
  X,
  CheckCircle2,
  Trash2,
  MoreVertical,
  Maximize2
} from "lucide-react"
import { cn } from "@/lib/utils"

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const TIMES = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"
]

const MOCK_EVENTS = [
  { id: 1, day: "Monday", time: "08:00 AM", duration: 2, subject: "Physics", batch: "Grade 11 Theory", color: "bg-indigo-500", conflict: false },
  { id: 2, day: "Monday", time: "10:00 AM", duration: 1, subject: "Maths", batch: "Grade 10 Basic", color: "bg-emerald-500", conflict: true },
  { id: 3, day: "Wednesday", time: "09:00 AM", duration: 1.5, subject: "Chemistry", batch: "A/L 2026", color: "bg-rose-500", conflict: false },
  { id: 4, day: "Saturday", time: "08:00 AM", duration: 3, subject: "Physics", batch: "Weekend Special", color: "bg-indigo-600", conflict: false },
  { id: 5, day: "Sunday", time: "04:00 PM", duration: 2, subject: "Economics", batch: "Grade 11 Arts", color: "bg-amber-500", conflict: false },
]

export default function GlobalTimetablePage() {
  const [view, setView] = useState("week")
  const [activeEvents, setActiveEvents] = useState(MOCK_EVENTS)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isGeneratorModalOpen, setIsGeneratorModalOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleGenerate = () => {
    setIsGeneratorModalOpen(false)
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      // Simulate Conflict Resolution
      setActiveEvents(prev => prev.map(e => ({ ...e, conflict: false })))
    }, 2000)
  }

  const handleAddSlot = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      setIsModalOpen(false)
    }, 2000)
  }

  const toggleAttendance = (id: number) => {
    // Mock attendance toggle logic
    console.log("Toggling attendance for event:", id)
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700 h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="space-y-1">
            <h1 className="text-3xl font-black text-on-surface tracking-tight">Academic Timetable</h1>
            <p className="text-sm font-medium text-on-surface-variant opacity-60 uppercase tracking-widest leading-loose">Master Schedule & Resource Optimization</p>
         </div>

         <div className="flex gap-4">
            <button 
              onClick={() => setIsGeneratorModalOpen(true)}
              className="px-8 py-4 rounded-[2rem] bg-indigo-600 text-white font-black text-sm flex items-center gap-3 shadow-xl shadow-indigo-600/20 hover:scale-105 active:scale-95 transition-all group"
            >
               {isGenerating ? (
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
               ) : (
                  <Zap className="h-5 w-5 group-hover:fill-current" />
               )}
               Generate Timetable
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="h-14 w-14 rounded-2xl bg-white border border-outline-variant/10 flex items-center justify-center text-on-surface hover:text-primary transition-all shadow-sm"
            >
               <Plus className="h-7 w-7" />
            </button>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
         {/* Sidebar Controls */}
         <div className="lg:col-span-3 space-y-6">
            <div className="bg-white p-8 rounded-[3rem] border border-outline-variant/10 shadow-sm space-y-8">
               <h3 className="text-lg font-black text-on-surface tracking-tight">Active Filters</h3>
               
               <div className="space-y-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Branch / Location</label>
                     <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-none font-bold text-xs outline-none focus:ring-2 focus:ring-primary/20">
                        <option>Colombo 03</option>
                        <option>Gampaha</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Classroom</label>
                     <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-none font-bold text-xs outline-none focus:ring-2 focus:ring-primary/20">
                        <option>All Rooms</option>
                        <option>Main Hall A</option>
                        <option>Basics 02</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Subject Tags</label>
                     <div className="flex flex-wrap gap-2">
                        {["Physics", "Maths", "Chemistry"].map(t => (
                          <div key={t} className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-[9px] font-black uppercase tracking-widest text-on-surface-variant hover:bg-primary/10 hover:text-primary cursor-pointer transition-all">
                             <div className="h-1.5 w-1.5 rounded-full bg-primary" /> {t}
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {activeEvents.some(e => e.conflict) && (
               <div className="bg-amber-600 rounded-[3rem] p-8 text-white space-y-6 shadow-xl shadow-amber-600/10 animate-in slide-in-from-left duration-500">
                  <div className="flex items-center gap-3">
                     <AlertCircle className="h-6 w-6" />
                     <h3 className="text-lg font-black tracking-tight">Conflict detected</h3>
                  </div>
                  <p className="text-xs font-medium opacity-60 leading-relaxed">Grade 10 Basic Maths overlaps with Mr. Sunil Peerera's private session on Monday at 10 AM.</p>
                  <button onClick={handleGenerate} className="w-full py-4 rounded-2xl bg-white text-amber-600 font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all">
                     Auto-Fix Now
                  </button>
               </div>
            )}
         </div>

         {/* Timetable Grid Area */}
         <div className="lg:col-span-9 bg-white rounded-[4rem] border border-outline-variant/10 shadow-ambient overflow-hidden flex flex-col">
            {/* Grid Header */}
            <div className="p-8 border-b border-outline-variant/5 flex justify-between items-center bg-surface-container-low/20">
               <div className="flex items-center gap-4">
                  <button className="p-3 rounded-xl bg-white text-on-surface-variant hover:text-primary transition-all shadow-sm">
                     <ChevronLeft className="h-5 w-5" />
                  </button>
                  <h2 className="text-xl font-black text-on-surface">March 16 - March 22, 2026</h2>
                  <button className="p-3 rounded-xl bg-white text-on-surface-variant hover:text-primary transition-all shadow-sm">
                     <ChevronRight className="h-5 w-5" />
                  </button>
               </div>
               <div className="flex bg-white/50 p-1 rounded-2xl border border-outline-variant/5 shadow-inner">
                  <button onClick={() => setView("day")} className={cn("px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all", view === "day" ? "bg-primary text-white shadow-lg" : "text-on-surface-variant")}>Day</button>
                  <button onClick={() => setView("week")} className={cn("px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all", view === "week" ? "bg-primary text-white shadow-lg" : "text-on-surface-variant")}>Week</button>
               </div>
            </div>

            {/* Grid Scrollable Content */}
            <div className="flex-1 overflow-auto no-scrollbar pb-10">
               <div className="min-w-[1200px]">
                  {/* Grid Lines & Header */}
                  <div className="flex border-b border-outline-variant/5">
                     <div className="w-24 border-r border-outline-variant/5 p-4 flex items-center justify-center">
                        <Clock className="h-4 w-4 text-on-surface-variant opacity-20" />
                     </div>
                     {DAYS.map(day => (
                        <div key={day} className="flex-1 p-6 text-center border-r border-outline-variant/5">
                           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">{day.substring(0,3)}</p>
                           <p className="text-lg font-black text-on-surface mt-1">{16 + DAYS.indexOf(day)}</p>
                        </div>
                     ))}
                  </div>

                  {/* Body */}
                  <div className="flex relative">
                     {/* Time Slots Labels */}
                     <div className="w-24 border-r border-outline-variant/5">
                        {TIMES.map(time => (
                           <div key={time} className="h-24 p-2 text-right border-b border-outline-variant/5">
                              <span className="text-[8px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">{time}</span>
                           </div>
                        ))}
                     </div>

                     {/* Grid Columns */}
                     <div className="flex-1 flex relative">
                        {DAYS.map(day => (
                          <div key={day} className="flex-1 h-full border-r border-outline-variant/5 flex flex-col relative group">
                             {/* Background Cells */}
                             {TIMES.map(t => (
                               <div key={t} className="h-24 border-b border-outline-variant/5 group-hover:bg-surface-container-low/10 transition-colors" />
                             ))}

                             {/* Events Overlay for this Day */}
                             {activeEvents.filter(e => e.day === day).map(event => {
                                const topPos = TIMES.indexOf(event.time) * 96
                                const height = event.duration * 96
                                
                                return (
                                  <motion.div 
                                    key={event.id}
                                    layoutId={`event-${event.id}`}
                                    className={cn(
                                      "absolute left-2 right-2 rounded-3xl p-4 text-white shadow-xl z-10 flex flex-col justify-between group/card cursor-pointer border-2 transition-transform hover:scale-[1.02]",
                                      event.color,
                                      event.conflict ? "border-amber-500 shadow-amber-500/20" : "border-transparent"
                                    )}
                                    style={{ top: topPos + 4, height: height - 8 }}
                                  >
                                     <div className="space-y-1">
                                        <div className="flex justify-between items-start">
                                           <div className="flex items-center gap-1.5 opacity-60">
                                              <Clock className="h-3 w-3" />
                                              <span className="text-[8px] font-black uppercase tracking-widest">{event.time}</span>
                                           </div>
                                           {event.conflict && (
                                              <div className="bg-white/20 p-1 rounded-full animate-pulse">
                                                 <AlertCircle className="h-3 w-3" />
                                              </div>
                                           )}
                                        </div>
                                        <h4 className="font-black text-xs leading-tight">{event.subject}</h4>
                                        <p className="text-[10px] font-medium opacity-60">{event.batch}</p>
                                     </div>
                                     
                                     <div className="flex justify-between items-end">
                                        <div className="flex items-center gap-2 opacity-60">
                                           <MapPin className="h-3 w-3" />
                                           <span className="text-[8px] font-black uppercase tracking-widest">Hall A</span>
                                        </div>
                                        <button 
                                          onClick={(e) => { e.stopPropagation(); toggleAttendance(event.id); }}
                                          className="bg-white/20 p-2 rounded-xl text-[8px] font-black uppercase tracking-widest hover:bg-white/40 transition-all"
                                        >
                                           Attendance
                                        </button>
                                     </div>
                                  </motion.div>
                                )
                             })}
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Generator Constraints Modal */}
      <AnimatePresence>
        {isGeneratorModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsGeneratorModalOpen(false)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
             <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-2xl bg-white rounded-[3rem] p-12 space-y-10 shadow-2xl overflow-hidden">
                <div className="flex justify-between items-center">
                   <div className="space-y-1">
                      <h2 className="text-3xl font-black text-on-surface tracking-tight">Auto-Gen Master</h2>
                      <p className="text-sm font-medium text-on-surface-variant opacity-60 uppercase tracking-[0.2em]">Resource-First Scheduling Optimization</p>
                   </div>
                   <X className="h-6 w-6 text-on-surface-variant cursor-pointer hover:text-error transition-all" onClick={() => setIsGeneratorModalOpen(false)} />
                </div>

                <div className="grid grid-cols-2 gap-8">
                   <div className="space-y-6">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Hard Constraints</h4>
                      <div className="space-y-4">
                         {["No Teacher Overlap", "Mandatory Breaks", "Max 4h per Subject"].map(c => (
                            <div key={c} className="flex items-center justify-between p-4 rounded-2xl bg-surface-container-low border border-outline-variant/5">
                               <span className="text-xs font-bold text-on-surface">{c}</span>
                               <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center text-white"><CheckCircle2 className="h-3 w-3" /></div>
                            </div>
                         ))}
                      </div>
                   </div>
                   <div className="space-y-6">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Optimization Priority</h4>
                      <div className="space-y-4">
                         <div className="p-4 rounded-2xl bg-indigo-50 border-2 border-primary/20 space-y-2">
                            <p className="text-xs font-black text-primary">Minimize Commute</p>
                            <p className="text-[9px] font-medium text-primary opacity-60">Consolidate sessions for teachers in the same branch.</p>
                         </div>
                         <div className="p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/5 space-y-2 opacity-60">
                            <p className="text-xs font-black text-on-surface">Evening Preference</p>
                            <p className="text-[9px] font-medium text-on-surface-variant">Prefer slots after 4:00 PM for group batches.</p>
                         </div>
                      </div>
                   </div>
                </div>

                <button onClick={handleGenerate} className="w-full primary-gradient text-white py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                   <Zap className="h-5 w-5 fill-current" /> Initialize Intelligent Generation
                </button>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add Slot Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              {isSuccess ? (
                <div className="p-20 flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-[2.5rem] bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-on-surface">Slot Reserved!</h3>
                    <p className="text-sm font-medium text-on-surface-variant opacity-60">The new class session has been added to the master timetable.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleAddSlot} className="p-10 space-y-8">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-black text-on-surface tracking-tight">Schedule New Slot</h2>
                      <p className="text-xs font-bold text-on-surface-variant opacity-40 uppercase tracking-widest">Resource Allocation</p>
                    </div>
                    <button type="button" onClick={() => setIsModalOpen(false)} className="p-2 rounded-xl border border-outline-variant/10 text-on-surface-variant hover:text-error transition-all">
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Target Day</label>
                        <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none font-bold text-sm transition-all">
                          {DAYS.map(day => <option key={day}>{day}</option>)}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Start Time</label>
                        <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none font-bold text-sm transition-all">
                          {TIMES.map(time => <option key={time}>{time}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Select Subject / Batch</label>
                      <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none font-bold text-sm transition-all">
                        <option>Grade 11 Physics - Theory</option>
                        <option>Grade 10 Maths - Basic</option>
                        <option>A/L 2026 Chemistry - Revision</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Class Duration</label>
                        <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none font-bold text-sm transition-all">
                          <option>1.5 Hours</option>
                          <option>2 Hours</option>
                          <option>3 Hours</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Room / Hall</label>
                        <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none font-bold text-sm transition-all">
                          <option>Main Hall A</option>
                          <option>Basics 02</option>
                          <option>Science Lab 01</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex gap-4">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-4 rounded-2xl bg-surface-container-low text-xs font-black uppercase tracking-widest hover:bg-slate-200 transition-all font-bold">Cancel</button>
                    <button type="submit" className="flex-[2] primary-gradient text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4" /> Add Slot
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
