"use client"

import { useState } from "react"
import { 
  Settings, 
  Shield, 
  Palette, 
  Layout, 
  Info, 
  Upload, 
  Save, 
  ArrowRight,
  Globe,
  Bell,
  Lock,
  CreditCard,
  History,
  CheckCircle2,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("General")

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface tracking-tight">System Configuration</h1>
          <p className="text-sm text-on-surface-variant font-medium">Manage your platform preferences, branding, and team permissions.</p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
         {["General", "Branding", "Team", "Billing", "Security"].map((tab) => (
           <button 
             key={tab}
             onClick={() => setActiveTab(tab)}
             className={cn(
               "whitespace-nowrap px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all",
               activeTab === tab 
                 ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10 scale-105" 
                 : "bg-white text-on-surface-variant border border-outline-variant/5 shadow-sm hover:border-primary/20"
             )}
           >
              {tab}
           </button>
         ))}
      </div>

      <div className="grid grid-cols-1 gap-10">
         {/* Center Profile Section */}
         <SettingCard 
           icon={Globe}
           title="Institute Profile"
           description="Basic information about your organization that will be visible across the platform."
         >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
               <div className="w-24 h-24 rounded-[2.5rem] bg-surface-container-low border-4 border-white shadow-xl flex items-center justify-center relative group overflow-hidden">
                  <span className="material-symbols-outlined text-4xl text-primary opacity-20">hub</span>
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                     <Upload className="h-6 w-6 text-white" />
                  </div>
               </div>
               <div className="space-y-2">
                  <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-all">Change Logo</button>
                  <p className="text-[10px] text-on-surface-variant opacity-40 font-black uppercase tracking-widest ml-1">PNG or SVG • Max 2MB</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <SettingsInput label="Organization Name" defaultValue="Bright Horizon Academy" />
               <SettingsInput label="Institute Sector" defaultValue="Advanced Level Science" />
               <SettingsInput label="Primary Contact Email" defaultValue="admin@brighthorizon.lk" />
               <SettingsInput label="Phone Number" defaultValue="+94 77 123 4567" />
               <div className="md:col-span-2">
                  <SettingsInput label="Physical Address" defaultValue="128, High Level Road, Colombo 06, Sri Lanka" />
               </div>
            </div>
         </SettingCard>

         {/* Visual Customization */}
         <SettingCard 
           icon={Palette}
           title="Visual Identity"
           description="Customize the look and feel of your center to match your brand across all portals."
         >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-40 ml-1">Primary Color</label>
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 rounded-2xl bg-primary shadow-xl shadow-primary/20 border-4 border-white"></div>
                     <input className="flex-1 h-12 px-5 rounded-xl bg-surface-container-low border-transparent focus:border-primary outline-none font-black text-sm transition-all" defaultValue="#3525CD" />
                  </div>
               </div>
               <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-40 ml-1">Theme Mode</label>
                  <div className="flex items-center gap-3">
                     <div className="flex-1 p-4 rounded-2xl border-2 border-primary bg-white shadow-sm flex items-center justify-center gap-3 cursor-pointer">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Light Luxe</span>
                     </div>
                     <div className="flex-1 p-4 rounded-2xl border-2 border-transparent bg-slate-900 text-white flex items-center justify-center gap-3 opacity-40 hover:opacity-100 transition-all cursor-pointer">
                        <span className="text-[10px] font-black uppercase tracking-widest">Midnight</span>
                     </div>
                  </div>
               </div>
            </div>
         </SettingCard>

         {/* Security Toggles */}
         <SettingCard 
           icon={Shield}
           title="Security & Governance"
           description="Manage who has access to sensitive data and control system-wide permissions."
         >
            <div className="space-y-4">
               <SecurityToggle 
                 label="Two-Factor Authentication" 
                 description="Require a login code for all administrative team members."
                 enabled
               />
               <SecurityToggle 
                 label="Restricted Teacher Access" 
                 description="Teachers only see students enrolled in their assigned batches."
                 enabled
               />
               <SecurityToggle 
                 label="Public Enrollment" 
                 description="Allow students to register via the public portal link."
               />
            </div>
         </SettingCard>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-10 right-6 md:right-12 z-50">
         <button className="flex items-center gap-3 primary-gradient text-white px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-[0.1em] shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
            <Save className="h-5 w-5" />
            Apply Changes
         </button>
      </div>
    </div>
  )
}

function SettingCard({ icon: Icon, title, description, children }: any) {
  return (
    <div className="bg-white rounded-[3.5rem] p-10 lg:p-12 border border-outline-variant/5 shadow-ambient flex flex-col lg:flex-row gap-12">
       <div className="lg:w-1/3 space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center border border-primary/10">
             <Icon className="h-7 w-7" />
          </div>
          <div className="space-y-2">
             <h3 className="text-2xl font-black text-on-surface tracking-tight italic">{title}</h3>
             <p className="text-sm text-on-surface-variant font-medium leading-relaxed opacity-60">{description}</p>
          </div>
       </div>
       <div className="flex-1">
          {children}
       </div>
    </div>
  )
}

function SettingsInput({ label, defaultValue }: any) {
  return (
    <div className="space-y-2">
       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-40 ml-1">{label}</label>
       <input 
         type="text"
         defaultValue={defaultValue}
         className="w-full h-14 px-6 rounded-2xl bg-surface-container-low border-transparent focus:border-primary focus:bg-white outline-none text-sm font-black transition-all shadow-inner text-on-surface"
       />
    </div>
  )
}

function SecurityToggle({ label, description, enabled }: any) {
  const [toggle, setToggle] = useState(enabled)
  return (
    <div className="flex items-center justify-between p-6 bg-surface-container-low rounded-[2rem] border border-outline-variant/5">
       <div className="space-y-1">
          <h4 className="text-sm font-black text-on-surface">{label}</h4>
          <p className="text-xs text-on-surface-variant font-medium opacity-60 leading-relaxed">{description}</p>
       </div>
       <button 
         onClick={() => setToggle(!toggle)}
         className={cn(
           "w-14 h-8 rounded-full transition-all relative",
           toggle ? "bg-emerald-500 shadow-lg shadow-emerald-500/20" : "bg-slate-300"
         )}
       >
          <div className={cn(
            "absolute top-1 w-6 h-6 bg-white rounded-full transition-all shadow-sm",
            toggle ? "right-1" : "left-1"
          )}></div>
       </button>
    </div>
  )
}
