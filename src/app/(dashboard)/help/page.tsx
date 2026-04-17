"use client"

import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { HelpCircle, Search, MessageSquare, Book, PlayCircle } from "lucide-react"

export default function HelpPage() {
  return (
    <main className="pt-20 md:pt-8 p-6 md:p-10 min-h-screen space-y-10">
      <DashboardHeader 
        title="Help & Documentation" 
        subtitle="Get the most out of CenterHub with our guides and community resources."
      />

      <div className="relative w-full max-w-2xl mx-auto">
         <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-outline-variant" />
         <input 
            className="w-full h-20 pl-16 pr-8 rounded-[2rem] bg-surface-container-low border-none text-on-surface text-lg font-medium placeholder:text-outline-variant focus:ring-4 focus:ring-primary/10 transition-all outline-none shadow-sm"
            placeholder="Search for guides, features, or tutorials..."
         />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           { icon: Book, title: "Knowledge Base", desc: "Detailed articles for every module." },
           { icon: PlayCircle, title: "Video Tutorials", desc: "Watch how to set up your center." },
           { icon: MessageSquare, title: "Community Forum", desc: "Interact with other center owners." },
         ].map((box, i) => (
           <div key={i} className="bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-primary/10 group">
              <div className="p-4 bg-surface-container-low rounded-2xl w-fit mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                 <box.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-black text-on-surface mb-2">{box.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{box.desc}</p>
           </div>
         ))}
      </div>
    </main>
  )
}
