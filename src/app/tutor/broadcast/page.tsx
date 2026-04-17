"use client"

import { useState } from "react"
import { 
  Send, 
  MessageSquare, 
  Users, 
  FileCheck, 
  Clock, 
  Search,
  CheckCircle2,
  Info
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function TeacherBroadcast() {
  const [selectedBatch, setSelectedBatch] = useState<string>("")
  const [broadcastType, setBroadcastType] = useState<"alert" | "materials" | "homework">("alert")
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [sentSuccess, setSentSuccess] = useState(false)

  const batches = [
    { id: "p26", name: "A/L Physics 2026 (Batch A)", students: 124 },
    { id: "mrev", name: "Combined Mathematics (Revision)", students: 86 },
    { id: "p25", name: "A/L Physics 2025 (Special)", students: 48 },
  ]

  const recentBroadcasts = [
    { date: "Oct 14, 2023", batch: "A/L Physics 2026", type: "homework", text: "New tutorials uploaded, please review Unit 3 exercises." },
    { date: "Oct 12, 2023", batch: "All Batches", type: "alert", text: "Center holiday announcement for Poya Day." },
  ]

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    setTimeout(() => {
      setIsSending(false)
      setSentSuccess(true)
      setTimeout(() => setSentSuccess(false), 3000)
      setMessage("")
    }, 1500)
  }

  return (
    <div className="space-y-12 pb-12">
      <header>
        <h1 className="text-3xl font-black tracking-tighter text-slate-900 font-headline">Batch Broadcasting</h1>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Send alerts and materials to your students</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Composer */}
        <div className="lg:col-span-12">
           <form onSubmit={handleSend} className="bg-white rounded-[3.5rem] p-10 shadow-sm border border-slate-50 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 {/* Select Batch */}
                 <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 flex items-center gap-2">
                       <Users className="h-4 w-4" /> Target Student Batch
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                       {batches.map((batch) => (
                         <button
                           type="button"
                           key={batch.id}
                           onClick={() => setSelectedBatch(batch.id)}
                           className={cn(
                             "flex items-center justify-between p-5 rounded-2xl border-2 transition-all text-left",
                             selectedBatch === batch.id 
                               ? "bg-indigo-50 border-indigo-600 ring-4 ring-indigo-50" 
                               : "bg-white border-slate-100 hover:border-indigo-100"
                           )}
                         >
                            <div>
                               <p className="font-bold text-sm text-slate-800">{batch.name}</p>
                               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{batch.students} Students</p>
                            </div>
                            {selectedBatch === batch.id && <CheckCircle2 className="h-5 w-5 text-indigo-600" />}
                         </button>
                       ))}
                    </div>
                 </div>

                 {/* Select Type */}
                 <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 flex items-center gap-2">
                       <MessageSquare className="h-4 w-4" /> Broadcast Type
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                       {[
                         { id: "alert", icon: MessageSquare, label: "Alert" },
                         { id: "materials", icon: FileCheck, label: "Materials" },
                         { id: "homework", icon: Clock, label: "Homework" },
                       ].map((t) => (
                         <button
                           type="button"
                           key={t.id}
                           onClick={() => setBroadcastType(t.id as any)}
                           className={cn(
                             "flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all gap-2",
                             broadcastType === t.id 
                               ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200" 
                               : "bg-white border-slate-100 text-slate-400 hover:border-indigo-100"
                           )}
                         >
                            <t.icon className="h-6 w-6" />
                            <span className="text-[10px] font-black uppercase tracking-widest">{t.label}</span>
                         </button>
                       ))}
                    </div>
                    
                    <div className="p-6 bg-slate-50 rounded-3xl flex gap-4 items-start border border-slate-100">
                       <Info className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                       <p className="text-[10px] font-medium text-slate-500 leading-relaxed italic">Students will receive a push notification in their portal immediately.</p>
                    </div>
                 </div>
              </div>

              {/* Message Input */}
              <div className="space-y-4">
                 <label className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 flex items-center gap-2">
                    Message Content
                 </label>
                 <textarea 
                   rows={6}
                   value={message}
                   onChange={e => setMessage(e.target.value)}
                   placeholder="Type your announcement to the batch here..."
                   className="w-full p-8 bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] text-sm font-medium outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-100 transition-all resize-none"
                 />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-50">
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Targeting <span className="text-indigo-600">{selectedBatch ? batches.find(b => b.id === selectedBatch)?.students : 0}</span> Active Students</p>
                 <button 
                  disabled={!selectedBatch || !message || isSending}
                  className={cn(
                    "w-full md:w-auto px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl transition-all flex items-center justify-center gap-3",
                    sentSuccess ? "bg-emerald-500 text-white" : "bg-indigo-600 text-white shadow-indigo-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100"
                  )}
                 >
                    {isSending ? "Sending Broadcast..." : sentSuccess ? (
                      <>Broadcast Sent <CheckCircle2 className="h-4 w-4" /></>
                    ) : (
                      <>Send synchronized Broadcast <Send className="h-4 w-4" /></>
                    )}
                 </button>
              </div>
           </form>
        </div>

        {/* History */}
        <div className="lg:col-span-12 space-y-6">
           <h3 className="text-xl font-black font-headline tracking-tighter">Recent Broadcasts</h3>
           <div className="space-y-4">
              {recentBroadcasts.map((b, i) => (
                <div key={i} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                   <div className="flex items-center gap-6">
                      <div className="h-12 w-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                         {b.type === "homework" ? <Clock className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
                      </div>
                      <div>
                         <p className="font-bold text-slate-800">{b.batch}</p>
                         <p className="text-sm font-medium text-slate-400 italic line-clamp-1">{b.text}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6 text-[10px] font-black tracking-widest uppercase">
                      <span className="text-slate-300">{b.date}</span>
                      <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg">Delivered</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  )
}
