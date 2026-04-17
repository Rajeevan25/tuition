"use client"

import { useState } from "react"
import { 
  Bell, 
  MessageSquare, 
  Send, 
  Search, 
  MoreVertical, 
  CheckCheck, 
  Paperclip, 
  Calendar,
  AlertCircle
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function StudentInbox() {
  const [activeTab, setActiveTab] = useState("chat")
  const [messageInput, setMessageInput] = useState("")
  const [chatHistory, setChatHistory] = useState([
    { id: 1, sender: "Mr. Nimal Perera", text: "Dilshan, have you reviewed the Combined Maths tutorial from yesterday?", time: "09:41 AM", type: "received" },
    { id: 2, sender: "You", text: "Yes sir, I'm halfway through the second set of problems.", time: "10:05 AM", type: "sent" },
    { id: 3, sender: "Mr. Nimal Perera", text: "Excellent. Let me know if you get stuck on the integration section.", time: "10:10 AM", type: "received" },
  ])

  const announcements = [
    { title: "Poya Day Schedule Update", date: "Oct 24, 2023", category: "Urgent", desc: "The center will be closed for Poya. Physics Hall A sessions are moved to Saturday at 8am." },
    { title: "Mock Exam Registration Open", date: "Oct 20, 2023", category: "Academic", desc: "Register for the Final Mock Exam series for A/L 2024. Forms available at the front desk." },
    { title: "Monthly Newsletter - Oct", date: "Oct 01, 2023", category: "General", desc: "Check out the successes of our Grade 5 scholarship batch from last year." },
  ]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!messageInput.trim()) return
    const newMessage = {
      id: chatHistory.length + 1,
      sender: "You",
      text: messageInput,
      time: "Now",
      type: "sent"
    }
    setChatHistory([...chatHistory, newMessage])
    setMessageInput("")
  }

  return (
    <div className="h-[calc(100vh-140px)] pt-24 pb-6 flex flex-col gap-6">
      {/* Header & Tabs */}
      <header className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black tracking-tighter text-on-surface font-headline">Inbox</h1>
          <button className="h-12 w-12 bg-surface-container-low rounded-2xl flex items-center justify-center text-slate-300 hover:text-primary transition-all">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>

        <div className="flex p-1.5 bg-surface-container-low rounded-[2rem] w-fit">
           <button 
            onClick={() => setActiveTab("chat")}
            className={cn(
              "px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2",
              activeTab === "chat" ? "bg-white text-primary shadow-sm" : "text-slate-400 hover:text-slate-600"
            )}
           >
             <MessageSquare className="h-4 w-4" /> Tutor Chat
           </button>
           <button 
            onClick={() => setActiveTab("announcements")}
            className={cn(
              "px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2",
              activeTab === "announcements" ? "bg-white text-primary shadow-sm" : "text-slate-400 hover:text-slate-600"
            )}
           >
             <Bell className="h-4 w-4" /> Alerts
           </button>
        </div>
      </header>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden relative">
        {activeTab === "chat" ? (
          <div className="h-full flex flex-col bg-surface-container-lowest rounded-[3rem] shadow-sm border border-slate-50 overflow-hidden">
             {/* Chat Header */}
             <div className="px-8 py-6 border-b border-slate-50 flex items-center justify-between bg-surface-container-low/30 backdrop-blur-md">
                <div className="flex items-center gap-4">
                   <div className="relative">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=nimal" className="w-12 h-12 rounded-2xl object-cover" alt="Tutor" />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
                   </div>
                   <div>
                      <h4 className="font-black text-on-surface tracking-tight">Mr. Nimal Perera</h4>
                      <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Online Now</p>
                   </div>
                </div>
                <Search className="h-5 w-5 text-slate-200" />
             </div>

             {/* Messages Area */}
             <div className="flex-1 overflow-y-auto p-10 space-y-8 custom-scrollbar">
                {chatHistory.map((msg) => (
                  <div key={msg.id} className={cn("flex flex-col max-w-[80%]", msg.type === "sent" ? "ml-auto items-end" : "items-start")}>
                     <div className={cn(
                       "p-6 rounded-[2rem] text-sm font-medium leading-relaxed shadow-sm",
                       msg.type === "sent" ? "bg-primary text-white rounded-tr-sm" : "bg-surface-container-low text-on-surface rounded-tl-sm border border-slate-50"
                     )}>
                       {msg.text}
                     </div>
                     <div className="flex items-center gap-1.5 mt-2 px-2 text-[8px] font-black uppercase tracking-widest text-slate-300">
                        {msg.time} {msg.type === "sent" && <CheckCheck className="h-2.5 w-2.5" />}
                     </div>
                  </div>
                ))}
             </div>

             {/* Message Input */}
             <div className="p-6 bg-surface-container-low/30 backdrop-blur-md border-t border-slate-50">
                <form onSubmit={handleSendMessage} className="relative flex items-center gap-4">
                   <div className="flex-1 relative">
                      <input 
                        type="text" 
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Type a message to Sir..." 
                        className="w-full pl-6 pr-14 py-4 rounded-2xl bg-white border-none text-sm font-medium placeholder:text-slate-300 outline-none focus:ring-4 focus:ring-primary/10 shadow-sm transition-all"
                      />
                      <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-primary transition-colors">
                        <Paperclip className="h-5 w-5" />
                      </button>
                   </div>
                   <button type="submit" className="h-14 w-14 primary-gradient text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                      <Send className="h-6 w-6" />
                   </button>
                </form>
             </div>
          </div>
        ) : (
          <div className="h-full overflow-y-auto space-y-6 pr-4 custom-scrollbar">
            {announcements.map((alert, i) => (
              <div key={i} className="bg-surface-container-lowest p-8 rounded-[3rem] shadow-sm border border-slate-50 space-y-4 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                 <div className="flex justify-between items-center">
                    <span className={cn(
                      "text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl",
                      alert.category === "Urgent" ? "bg-red-50 text-red-600" : alert.category === "Academic" ? "bg-indigo-50 text-indigo-600" : "bg-slate-50 text-slate-400"
                    )}>
                      {alert.category}
                    </span>
                    <div className="flex items-center gap-2 text-slate-300 text-[10px] font-bold">
                       <Calendar className="h-3 w-3" /> {alert.date}
                    </div>
                 </div>
                 <h3 className="text-xl font-black text-on-surface group-hover:text-primary transition-colors">{alert.title}</h3>
                 <p className="text-sm font-medium text-slate-500 leading-relaxed">{alert.desc}</p>
                 <div className="pt-4 flex items-center gap-3">
                   <button className="text-xs font-black uppercase tracking-widest text-primary hover:underline">Mark as Read</button>
                   <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                   <button className="text-xs font-black uppercase tracking-widest text-slate-300 hover:text-primary transition-colors">Hide Alert</button>
                 </div>
              </div>
            ))}
            
            <div className="p-10 border-2 border-dashed border-slate-100 rounded-[3rem] flex flex-col items-center justify-center text-center space-y-4 opacity-40 hover:opacity-100 transition-opacity">
               <AlertCircle className="h-10 w-10 text-slate-200" />
               <p className="text-xs font-bold font-headline uppercase tracking-widest text-slate-400">End of Notification History</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
