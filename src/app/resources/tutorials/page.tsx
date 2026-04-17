"use client"

import { useState } from "react"
import Link from "next/link"
import { Video, ArrowLeft, Play, Clock, Share2, Bookmark, X } from "lucide-react"
import { Footer } from "@/components/layout/Footer"

export default function TutorialsPage() {
  const [selectedVideo, setSelectedVideo] = useState<null | typeof tutorials[0]>(null)
  const [saved, setSaved] = useState<number[]>([])

  const toggleSave = (e: React.MouseEvent, id: number) => {
    e.stopPropagation()
    setSaved(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }
  const tutorials = [
    {
      title: "Quick Start: Creating your first classroom",
      duration: "4:20",
      category: "Setup",
      thumbnail: "/images/resources/tutorial-classroom.png",
      views: "1.2k views"
    },
    {
      title: "Mastering Automated Billing Cycles",
      duration: "6:45",
      category: "Finance",
      thumbnail: "/images/resources/tutorial-billing.png",
      views: "850 views"
    },
    {
      title: "Optimizing the Student Portal Experience",
      duration: "8:12",
      category: "Experience",
      thumbnail: "/images/resources/tutorial-experience.png",
      views: "2.3k views"
    },
    {
      title: "Advanced Reporting & Analytics",
      duration: "12:30",
      category: "Analytics",
      thumbnail: "/images/resources/tutorial-analytics.png",
      views: "540 views"
    },
    {
      title: "Teacher Onboarding Workflow",
      duration: "5:15",
      category: "Operations",
      thumbnail: "/images/resources/tutorial-onboarding.png",
      views: "1.1k views"
    },
    {
      title: "Managing Multiple Branches",
      duration: "10:05",
      category: "Enterprise",
      thumbnail: "/images/resources/tutorial-enterprise.png",
      views: "320 views"
    }

  ]

  return (
    <div className="bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/5 bg-white/70 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl justify-between items-center">
          <Link href="/" className="font-headline text-2xl font-black tracking-tighter text-indigo-600">CenterHub</Link>
          <div className="hidden items-center gap-x-8 font-headline font-semibold tracking-tight md:flex">
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/platform">Platform</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/solutions">Solutions</Link>
            <Link className="text-indigo-600" href="/resources">Resources</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/pricing">Pricing</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden font-semibold text-slate-600 hover:text-indigo-600 transition-colors sm:block">Log In</Link>
            <Link href="/register" className="primary-gradient rounded-full px-6 py-2.5 font-bold text-white shadow-lg shadow-indigo-200 transition-all active:scale-95">Start Free</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 flex-grow">
        <div className="mx-auto max-w-7xl px-6">
          <Link href="/resources" className="inline-flex items-center gap-2 text-rose-600 font-bold text-sm uppercase tracking-widest mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="h-4 w-4" /> Back to Resources
          </Link>

          <header className="mb-16 space-y-4">
            <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface lg:text-7xl">
              Video <span className="text-rose-600">Tutorials</span>.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed font-medium">
              Visual walkthroughs to help you master the CenterHub platform in minutes.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {tutorials.map((video, i) => (
              <div key={i} onClick={() => setSelectedVideo(video)} className="group cursor-pointer space-y-4">
                <div className="aspect-video rounded-[2.5rem] relative overflow-hidden bg-slate-100 shadow-sm transition-all group-hover:shadow-2xl group-hover:-translate-y-1">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-500">
                      <Play className="h-8 w-8 fill-white" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-white">
                    {video.duration}
                  </div>

                  {/* Tag */}
                  <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                    {video.category}
                  </div>
                </div>

                <div className="px-2 space-y-2">
                   <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-600">{video.views}</span>
                     <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Share2 className="h-4 w-4 text-slate-400 hover:text-rose-600 transition-colors" />
                        <Bookmark 
                          onClick={(e) => toggleSave(e, i)} 
                          className={`h-4 w-4 transition-colors ${saved.includes(i) ? 'text-rose-600 fill-rose-600' : 'text-slate-400 hover:text-rose-600'}`} 
                        />
                     </div>
                   </div>
                   <h3 className="text-xl font-black tracking-tight text-on-surface leading-tight group-hover:text-rose-600 transition-colors">
                     {video.title}
                   </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Video Player Modal */}
          {selectedVideo && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
               <button 
                 onClick={() => setSelectedVideo(null)}
                 className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform duration-300"
               >
                 <X className="h-10 w-10" />
               </button>
               
               <div className="w-full max-w-5xl aspect-video rounded-[3rem] overflow-hidden bg-black shadow-2xl relative">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-6">
                     <div className="w-24 h-24 rounded-full bg-rose-600 flex items-center justify-center animate-pulse">
                        <Play className="h-10 w-10 fill-white" />
                     </div>
                     <p className="font-headline text-2xl font-black tracking-tight tracking-widest uppercase opacity-70">Streaming {selectedVideo.title}...</p>
                  </div>
                  {/* In a real app, an iframe or video tag would go here */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                     <div className="space-y-4">
                        <div className="bg-rose-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white w-fit">{selectedVideo.category}</div>
                        <h2 className="text-4xl font-black text-white">{selectedVideo.title}</h2>
                     </div>
                  </div>
               </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  )
}
