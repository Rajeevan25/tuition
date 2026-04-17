"use client"

import { useState } from "react"
import { 
  FileText, 
  Video, 
  FileCode, 
  Image as ImageIcon,
  MoreVertical,
  Plus,
  Search,
  Filter,
  Download,
  Share2,
  Trash2,
  Folder,
  CloudUpload,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const MATERIALS = [
  { id: "M1", title: "Mechanics Unit Part 01 - Notes", type: "PDF", size: "4.2 MB", date: "Apr 12, 2026", category: "Notes", downloads: 124 },
  { id: "M2", title: "Circular Motion Live Recording", type: "MP4", size: "1.2 GB", date: "Apr 15, 2026", category: "Video", downloads: 89 },
  { id: "M3", title: "Speed & Velocity Quiz Questions", type: "DOCX", size: "850 KB", date: "Apr 10, 2026", category: "Quiz", downloads: 245 },
  { id: "M4", title: "Gravity Diagrams - Set A", type: "JPG", size: "12 MB", date: "Apr 14, 2026", category: "Resources", downloads: 56 },
]

export default function TeacherMaterialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Notes", "Video", "Quiz", "Resources"]

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface tracking-tight">Material Hub</h1>
          <p className="text-sm text-on-surface-variant font-medium">Manage and distribute your teaching resources to specific batches.</p>
        </div>
        
        <button className="primary-gradient px-8 py-3 rounded-2xl text-white font-black text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2">
           <Plus className="h-5 w-5" /> New Upload
        </button>
      </div>

      {/* Upload Zone */}
      <div className="bg-white rounded-[3rem] p-10 border-2 border-dashed border-primary/20 flex flex-col items-center justify-center text-center space-y-6 hover:bg-primary/5 transition-all cursor-pointer group shadow-sm">
         <div className="w-20 h-20 rounded-[2.5rem] bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
            <CloudUpload className="h-10 w-10" />
         </div>
         <div className="space-y-1">
            <h3 className="text-xl font-black text-on-surface">Drag and drop materials here</h3>
            <p className="text-sm text-on-surface-variant font-medium opacity-60">Support for PDF, MP4, Docs, and Images (Max 2GB)</p>
         </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
         <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap",
                  selectedCategory === cat 
                    ? "bg-slate-900 text-white shadow-lg" 
                    : "bg-surface-container-low text-on-surface-variant hover:bg-white border border-outline-variant/10 shadow-sm"
                )}
              >
                {cat}
              </button>
            ))}
         </div>
         <div className="flex-1 w-full max-w-sm relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search materials..."
              className="w-full h-11 pl-12 pr-4 rounded-2xl bg-white border border-outline-variant/5 shadow-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
            />
         </div>
      </div>

      {/* Grid of Materials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {MATERIALS.map((item) => (
           <div key={item.id} className="group bg-white rounded-[2.5rem] border border-outline-variant/5 shadow-ambient flex flex-col hover:border-primary/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="p-8 space-y-6 flex-1">
                 <div className="flex items-start justify-between">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner",
                      item.type === "PDF" ? "bg-red-50 text-red-600" :
                      item.type === "MP4" ? "bg-blue-50 text-blue-600" :
                      item.type === "DOCX" ? "bg-indigo-50 text-indigo-600" :
                      "bg-amber-50 text-amber-600"
                    )}>
                       {item.type === "PDF" ? <FileText className="h-7 w-7" /> :
                        item.type === "MP4" ? <Video className="h-7 w-7" /> :
                        item.type === "DOCX" ? <FileCode className="h-7 w-7" /> :
                        <ImageIcon className="h-7 w-7" />}
                    </div>
                    <button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-all">
                       <MoreVertical className="h-5 w-5" />
                    </button>
                 </div>

                 <div className="space-y-1">
                    <h4 className="text-lg font-black text-on-surface leading-tight group-hover:text-primary transition-colors">{item.title}</h4>
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{item.size}</span>
                       <span className="w-1 h-1 rounded-full bg-outline-variant/40" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded-md">{item.category}</span>
                    </div>
                 </div>

                 <div className="flex items-center justify-between pt-4 border-t border-outline-variant/5">
                    <div className="flex items-center gap-1.5">
                       <Download className="h-3 w-3 text-on-surface-variant opacity-40" />
                       <span className="text-[10px] font-black text-on-surface-variant opacity-40 uppercase tracking-widest">{item.downloads} Downloads</span>
                    </div>
                    <span className="text-[10px] font-black text-on-surface-variant opacity-40 uppercase tracking-widest">{item.date}</span>
                 </div>
              </div>

              <div className="bg-surface-container-low/50 p-4 flex gap-2">
                 <button className="flex-1 py-3 bg-white rounded-xl text-[10px] font-black uppercase tracking-widest text-on-surface hover:bg-primary hover:text-white transition-all shadow-sm border border-outline-variant/10 flex items-center justify-center gap-2">
                    <Share2 className="h-3.5 w-3.5" /> Share
                 </button>
                 <button className="p-3 bg-white rounded-xl text-on-surface-variant hover:text-error transition-all shadow-sm border border-outline-variant/10">
                    <Trash2 className="h-4 w-4" />
                 </button>
              </div>
           </div>
         ))}

         {/* Folder Shortcut */}
         <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col justify-between shadow-xl shadow-slate-900/20 group cursor-pointer hover:scale-[1.02] transition-all">
            <div className="space-y-4">
               <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Folder className="h-6 w-6 text-white" />
               </div>
               <div className="space-y-1">
                  <h3 className="text-xl font-black">Organize Folders</h3>
                  <p className="text-xs font-medium opacity-60">Create custom folders to organize by subject or batch year.</p>
               </div>
            </div>
            <div className="flex items-center justify-between mt-8">
               <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Manage Folders</span>
               <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </div>
         </div>
      </div>
    </div>
  )
}
