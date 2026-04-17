"use client"

import Link from "next/link"
import { BookOpen, Video, FileText, HelpCircle, MessageSquare, ArrowRight, Play, Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/layout/Footer"

export default function ResourcesPage() {
  return (
    <div className="bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden min-h-screen flex flex-col">
       {/* Global Navbar */}
       <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/5 bg-white/70 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl justify-between items-center">
          <Link href="/" className="font-headline text-2xl font-black tracking-tighter text-indigo-600">CenterHub</Link>
          <div className="hidden items-center gap-x-8 font-headline font-semibold tracking-tight md:flex">
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/platform">Platform</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/solutions">Solutions</Link>
            <Link className="text-indigo-600 border-b-2 border-indigo-600" href="/resources">Resources</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/pricing">Pricing</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden font-semibold text-slate-600 hover:text-indigo-600 transition-colors sm:block">Log In</Link>
            <Link href="/register" className="primary-gradient rounded-full px-6 py-2.5 font-bold text-white shadow-lg shadow-indigo-200 transition-all active:scale-95">Start Free</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
           <div className="mb-20 space-y-4">
              <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface lg:text-7xl">
                 Knowledge <span className="text-primary">Amplified</span>.
              </h1>
              <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed font-medium">
                 Guides, case studies, and documentation to help you curate the perfect institutional experience for your students.
              </p>
           </div>

           {/* Resource Categories */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {[
                { icon: BookOpen, title: "Industry Guides", color: "text-indigo-600", bg: "bg-indigo-50", href: "/resources/guides" },
                { icon: Video, title: "Video Tutorials", color: "text-rose-600", bg: "bg-rose-50", href: "/resources/tutorials" },
                { icon: FileText, title: "Case Studies", color: "text-emerald-600", bg: "bg-emerald-50", href: "/resources/case-studies" },
                { icon: HelpCircle, title: "Documentation", color: "text-amber-600", bg: "bg-amber-50", href: "/resources/docs" },
              ].map((cat, i) => (
                <Link key={i} href={cat.href} className="bg-surface-container-low/50 p-6 rounded-[2.5rem] flex items-center gap-4 hover:bg-white hover:shadow-xl transition-all cursor-pointer group border border-transparent hover:border-primary/5">
                   <div className={cn("p-3 rounded-2xl group-hover:scale-110 transition-transform", cat.bg, cat.color)}>
                      <cat.icon className="h-6 w-6" />
                   </div>
                   <span className="font-black text-xs uppercase tracking-widest text-on-surface">{cat.title}</span>
                </Link>
              ))}
           </div>

           {/* Featured Content */}
           <section className="space-y-12 mb-32">
              <div className="flex justify-between items-end">
                 <h2 className="font-headline text-4xl font-black tracking-tighter">Latest from the <span className="text-primary text-opacity-80">Hub</span>.</h2>
                 <button className="text-primary font-black text-xs uppercase tracking-[0.2em] hover:underline">View All Articles</button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                 {[
                   { 
                     title: "Scaling your center from 50 to 500 students.", 
                     tag: "Growth", 
                     author: "Sarah Sterling", 
                     image: "/images/resources/scaling.png",
                     readTime: "8 min read"
                   },
                   { 
                     title: "Why &apos;Architectural Precision&apos; matters in management UI.", 
                     tag: "Design", 
                     author: "Marcus Thorne", 
                     image: "/images/resources/design.png",
                     readTime: "12 min read"
                   },
                   { 
                     title: "Mastering the automated billing cycle for 2024.", 
                     tag: "Finance", 
                     author: "Elena Vance", 
                     image: "/images/resources/billing.png",
                     readTime: "6 min read"
                   }
                 ].map((post, i) => (
                   <article key={i} className="group cursor-pointer space-y-6">
                      <div className="aspect-[16/10] rounded-[3rem] flex items-end relative overflow-hidden bg-surface-container-low border border-outline-variant/5 shadow-sm">
                         <img 
                           src={post.image} 
                           alt={post.title} 
                           className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                         />
                         <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                         <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white">{post.tag}</div>
                         <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 mx-auto absolute inset-0 m-auto">
                            <Play className="h-5 w-5 fill-white" />
                         </div>
                         <Bookmark className="absolute top-8 right-8 h-5 w-5 text-white opacity-40 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="space-y-3">
                         <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                            <span>{post.author}</span>
                            <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                            <span>{post.readTime}</span>
                         </div>
                         <h3 className="text-2xl font-black tracking-tight text-on-surface group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                         <p className="text-on-surface-variant text-sm font-medium line-clamp-2">Efficiently scale your tuition center&apos;s infrastructure without compromising on student experience or tutor performance metrics.</p>
                      </div>
                   </article>
                 ))}
              </div>
           </section>

           {/* Community Banner */}
           <section className="bg-primary rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden group">
              <div className="relative z-10 flex flex-col items-center text-center space-y-10">
                 <div className="p-4 bg-white/10 rounded-3xl backdrop-blur-xl border border-white/20">
                    <MessageSquare className="h-10 w-10" />
                 </div>
                 <h2 className="font-headline text-4xl lg:text-7xl font-black tracking-tighter max-w-4xl">Join a Community of <br/> <span className="text-primary-fixed">12,000+ Curators</span>.</h2>
                 <p className="max-w-xl mx-auto opacity-70 text-lg leading-relaxed">Exchange strategies with other center owners and get direct access to our core development team early previews.</p>
                 <button className="bg-white text-primary px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl transition-all hover:scale-105 active:scale-95">Enter Community Portal</button>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
              <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-fixed rounded-full blur-[120px] opacity-20 group-hover:scale-125 transition-transform duration-700"></div>
           </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
