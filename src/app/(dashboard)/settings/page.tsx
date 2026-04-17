"use client"

import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { Settings, Shield, Palette, Layout, Info, Upload, Save } from "lucide-react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const SettingSection = ({ title, description, children, icon: Icon }: { title: string, description: string, children: React.ReactNode, icon: LucideIcon }) => (
  <section className="bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-sm border border-slate-100/50">
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-1/3">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/10 text-primary rounded-xl">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-headline text-xl font-bold tracking-tight text-on-surface">{title}</h3>
        </div>
        <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
      </div>
      <div className="flex-1 space-y-6">
        {children}
      </div>
    </div>
  </section>
)

const InputGroup = ({ label, placeholder, type = "text", info }: { label: string, placeholder: string, type?: string, info?: string }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-outline ml-1">{label}</label>
    <div className="relative">
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full h-12 px-5 rounded-xl bg-surface-container-low border-none text-on-surface placeholder:text-outline-variant focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium" 
      />
      {info && (
         <div className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant">
            <Info className="h-4 w-4" />
         </div>
      )}
    </div>
  </div>
)

export default function SettingsPage() {
  return (
    <main className="pt-20 md:pt-8 p-6 md:p-10 min-h-screen space-y-10 pb-24">
      <DashboardHeader 
        title="Settings" 
        subtitle="Manage your platform preferences, branding, and team permissions."
      />

      {/* Navigation Sub-menu (Mobile-First Scrolling) */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {["General", "Branding", "Team", "Billing", "Integrations"].map((tab, i) => (
          <button 
            key={i} 
            className={cn(
              "whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all",
              tab === "General" ? "bg-on-surface text-white shadow-lg" : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {/* Center Profile Section */}
        <SettingSection 
          icon={Layout}
          title="Center Profile" 
          description="Basic information about your organization that will be visible across the platform and to students."
        >
          <div className="flex items-center gap-6 mb-4">
            <div className="w-20 h-20 rounded-3xl bg-surface-container-high border-4 border-white shadow-xl flex items-center justify-center relative group overflow-hidden">
               <span className="material-symbols-outlined text-4xl text-primary opacity-20">hub</span>
               <div className="absolute inset-0 bg-on-surface/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                  <Upload className="h-6 w-6 text-white" />
               </div>
            </div>
            <div>
              <button className="bg-primary text-white px-5 py-2 rounded-xl text-xs font-bold shadow-lg shadow-primary/20">Change Photo</button>
              <p className="text-[10px] text-outline-variant mt-2 font-bold uppercase tracking-widest">Recommended: 800x800 PNG</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputGroup label="Organization Name" placeholder="CenterHub Learning" />
            <InputGroup label="Sector" placeholder="Education & K12" />
            <InputGroup label="Email Contact" placeholder="admin@centerhub.com" />
            <InputGroup label="Phone Number" placeholder="+1 (555) 000-0000" />
            <div className="md:col-span-2">
              <InputGroup label="Physical Address" placeholder="123 Education St, Knowledge City, OX 4501" />
            </div>
          </div>
        </SettingSection>

        {/* Branding & Personalization */}
        <SettingSection 
          icon={Palette}
          title="Branding & Visuals" 
          description="Customize the look and feel of your center to match your brand identity across portals."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
               <label className="text-[10px] font-black uppercase tracking-[0.2em] text-outline ml-1">Primary Brand Color</label>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary shadow-lg shadow-primary/20 cursor-pointer"></div>
                  <input className="flex-1 h-12 px-5 rounded-xl bg-surface-container-low border-none font-bold text-on-surface outline-none" defaultValue="#3525CD" />
               </div>
            </div>
            <div className="space-y-4">
               <label className="text-[10px] font-black uppercase tracking-[0.2em] text-outline ml-1">Accent Gradient</label>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl primary-gradient shadow-lg shadow-primary/20 cursor-pointer"></div>
                  <input className="flex-1 h-12 px-5 rounded-xl bg-surface-container-low border-none font-bold text-on-surface outline-none" defaultValue="Linear Indigo" readOnly />
               </div>
            </div>
            <div className="md:col-span-2 space-y-4">
               <label className="text-[10px] font-black uppercase tracking-[0.2em] text-outline ml-1">Portal Theme</label>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl border-2 border-primary bg-white shadow-sm flex flex-col items-center gap-2 cursor-pointer">
                     <div className="w-full h-12 bg-surface-container-low rounded-lg"></div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-primary">Light Luxe</span>
                  </div>
                  <div className="p-4 rounded-2xl border-2 border-transparent bg-slate-900 shadow-sm flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                     <div className="w-full h-12 bg-slate-800 rounded-lg"></div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Deep Space</span>
                  </div>
               </div>
            </div>
          </div>
        </SettingSection>

        {/* Security & Access */}
        <SettingSection 
          icon={Shield}
          title="Security & Permissions" 
          description="Manage who has access to your center and control visibility of sensitive financial data."
        >
           <div className="space-y-4">
              {[
                { label: "Two-Factor Authentication", desc: "Add an extra layer of security to the admin account.", enabled: true },
                { label: "Teacher Data Restricted", desc: "Teachers can only see students in their assigned classes.", enabled: true },
                { label: "Audit Logs", desc: "Track every change made to student and financial records.", enabled: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl">
                   <div>
                      <h4 className="text-sm font-bold text-on-surface">{item.label}</h4>
                      <p className="text-xs text-on-surface-variant">{item.desc}</p>
                   </div>
                   <button className={cn(
                     "w-12 h-6 rounded-full transition-all relative",
                     item.enabled ? "bg-emerald-500" : "bg-slate-300"
                   )}>
                      <div className={cn(
                        "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                        item.enabled ? "right-1" : "left-1"
                      )}></div>
                   </button>
                </div>
              ))}
           </div>
        </SettingSection>
      </div>

      {/* Floating Save Action (Settings Pattern) */}
      <div className="fixed bottom-8 right-6 md:right-10 z-50">
         <button className="flex items-center gap-3 primary-gradient text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
            <Save className="h-5 w-5" />
            Save Changes
         </button>
      </div>
    </main>
  )
}
