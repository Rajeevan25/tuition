"use client"

import { useState } from "react"
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Bell, 
  Shield, 
  Camera, 
  Save, 
  Globe, 
  Eye, 
  EyeOff,
  ChevronRight,
  CheckCircle2
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function ProfileSettingsPage() {
  const [activeCategory, setActiveCategory] = useState("Profile")
  const [showPassword, setShowPassword] = useState(false)

  const categories = [
    { label: "Profile", icon: User },
    { label: "Security", icon: Shield },
    { label: "Notifications", icon: Bell },
  ]

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface tracking-tight">Account Settings</h1>
          <p className="text-sm text-on-surface-variant font-medium">Manage your personal information, security preferences, and alert settings.</p>
        </div>
      </div>

      {/* Category Selection */}
      <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
         {categories.map((cat) => (
           <button 
             key={cat.label}
             onClick={() => setActiveCategory(cat.label)}
             className={cn(
               "flex items-center gap-3 px-8 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all",
               activeCategory === cat.label 
                 ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10 scale-105" 
                 : "bg-white text-on-surface-variant border border-outline-variant/5 shadow-sm hover:border-primary/20"
             )}
           >
              <cat.icon className="h-4 w-4" /> {cat.label}
           </button>
         ))}
      </div>

      <div className="grid grid-cols-1 gap-8">
         {activeCategory === "Profile" && (
           <div className="space-y-8 animate-in slide-in-from-bottom-2 duration-500">
              <section className="bg-white rounded-[3rem] p-10 md:p-12 border border-outline-variant/10 shadow-ambient">
                 <div className="flex flex-col md:flex-row gap-10 items-start md:items-center mb-12">
                    <div className="relative group">
                       <div className="w-32 h-32 rounded-[3rem] bg-indigo-50 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=dilshan" alt="Profile" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                             <Camera className="h-6 w-6 text-white" />
                          </div>
                       </div>
                       <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-xl border-4 border-white shadow-lg">
                          <CheckCircle2 className="h-4 w-4" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-2xl font-black text-on-surface tracking-tight italic">Personal Background</h3>
                       <p className="text-xs font-medium text-on-surface-variant opacity-60">Update your primary identity and contact details.</p>
                       <div className="pt-2">
                          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-md">Change Photo</button>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputGroup label="Full Name" icon={User} defaultValue="Dilshan Perera" />
                    <InputGroup label="Email Address" icon={Mail} defaultValue="dilshan.p@gmail.com" />
                    <InputGroup label="Contact Number" icon={Phone} defaultValue="+94 77 123 4567" />
                    <InputGroup label="Preferred Language" icon={Globe} defaultValue="English (US)" />
                    <div className="md:col-span-2">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 ml-1">Residential Address</label>
                          <textarea className="w-full h-32 p-6 bg-surface-container-low rounded-[1.5rem] border-transparent focus:border-primary focus:bg-white outline-none text-sm font-bold transition-all shadow-inner" defaultValue="128, High Level Road, Colombo 06, Sri Lanka" />
                       </div>
                    </div>
                 </div>
              </section>
           </div>
         )}

         {activeCategory === "Security" && (
           <div className="space-y-8 animate-in slide-in-from-bottom-2 duration-500">
              <section className="bg-white rounded-[3rem] p-10 md:p-12 border border-outline-variant/10 shadow-ambient space-y-10">
                 <div className="space-y-2">
                    <h3 className="text-2xl font-black text-on-surface tracking-tight italic">Password & Authentication</h3>
                    <p className="text-xs font-medium text-on-surface-variant opacity-60">Keep your account secure with a strong password and two-factor auth.</p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 ml-1">Current Password</label>
                       <div className="relative">
                          <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="••••••••"
                            className="w-full h-14 pl-6 pr-12 rounded-2xl bg-surface-container-low border-transparent focus:border-primary focus:bg-white outline-none text-sm font-black transition-all shadow-inner" 
                          />
                          <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-40 hover:opacity-100 transition-opacity">
                             {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                       </div>
                    </div>
                    <div className="space-y-2 invisible md:visible"></div>
                    <InputGroup label="New Password" icon={Lock} placeholder="Enter new password" type="password" />
                    <InputGroup label="Confirm New Password" icon={Lock} placeholder="Repeat new password" type="password" />
                 </div>

                 <div className="pt-6 border-t border-outline-variant/5 space-y-6">
                    <ToggleGroup 
                      title="Two-Factor Authentication" 
                      description="Adds an extra layer of security when logging in."
                      icon={Shield}
                      enabled
                    />
                 </div>
              </section>
           </div>
         )}

         {activeCategory === "Notifications" && (
            <div className="space-y-8 animate-in slide-in-from-bottom-2 duration-500">
               <section className="bg-white rounded-[3rem] p-10 md:p-12 border border-outline-variant/10 shadow-ambient space-y-8">
                  <div className="space-y-2">
                     <h3 className="text-2xl font-black text-on-surface tracking-tight italic">Communication Preferences</h3>
                     <p className="text-xs font-medium text-on-surface-variant opacity-60">Choose what updates you want to receive and where.</p>
                  </div>
                  
                  <div className="space-y-4">
                     <ToggleGroup title="Email Notifications" description="Receive class summaries and billing alerts via email." icon={Mail} enabled />
                     <ToggleGroup title="SMS Alerts" description="Get urgent holiday notices and attendance alerts on your phone." icon={Phone} enabled />
                     <ToggleGroup title="Marketing Updates" description="Get news about new subjects, workshops, and rewards." icon={Bell} />
                  </div>
               </section>
            </div>
         )}
      </div>

      {/* Save Button */}
      <div className="fixed bottom-10 right-10 z-50">
         <button className="primary-gradient text-white px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
            <Save className="h-5 w-5" /> Save Changes
         </button>
      </div>
    </div>
  )
}

function InputGroup({ label, icon: Icon, defaultValue, placeholder, type = "text" }: any) {
  return (
    <div className="space-y-2">
       <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 ml-1">{label}</label>
       <div className="relative group">
          <Icon className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant opacity-40 group-focus-within:text-primary transition-all" />
          <input 
            type={type} 
            defaultValue={defaultValue} 
            placeholder={placeholder}
            className="w-full h-14 pl-14 pr-6 rounded-2xl bg-surface-container-low border-transparent focus:border-primary focus:bg-white outline-none text-sm font-black transition-all shadow-inner text-on-surface placeholder:text-slate-300"
          />
       </div>
    </div>
  )
}

function ToggleGroup({ title, description, icon: Icon, enabled }: any) {
  const [toggle, setToggle] = useState(enabled)
  return (
    <div className="flex items-center justify-between p-8 bg-surface-container-low/50 rounded-[2.5rem] border border-outline-variant/5">
       <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
             <Icon className="h-6 w-6" />
          </div>
          <div className="space-y-1">
             <h4 className="font-black text-on-surface text-sm">{title}</h4>
             <p className="text-[10px] font-medium text-on-surface-variant opacity-60 leading-relaxed">{description}</p>
          </div>
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
