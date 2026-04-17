"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  BookOpen, 
  User, 
  Calendar, 
  Users, 
  AlertCircle,
  Clock,
  MapPin,
  Monitor,
  Search,
  Plus,
  Trash2,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"

const STEPS = [
  { id: 1, title: "Basic Info", icon: BookOpen },
  { id: 2, title: "Assign Teacher", icon: User },
  { id: 3, title: "Schedule Setup", icon: Calendar },
  { id: 4, title: "Enroll Students", icon: Users },
  { id: 5, title: "Review", icon: CheckCircle2 },
]

export default function BatchCreationWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    subject: "Physics",
    grade: "Grade 11",
    branch: "Colombo 03",
    type: "Group",
    capacity: 40,
    startDate: "",
    endDate: "",
    teacher: { id: 1, name: "Kamal Silva", subject: "Physics" },
    schedule: [
      { id: 1, day: "Sunday", startTime: "08:00", duration: "2 Hours", room: "Main Hall A", conflict: true }
    ],
    students: [1, 3, 5]
  })

  // Framer Motion Variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  }

  const [direction, setDirection] = useState(0)

  const goToStep = (step: number) => {
    setDirection(step > currentStep ? 1 : -1)
    setCurrentStep(step)
  }

  const handleNext = () => currentStep < 5 && goToStep(currentStep + 1)
  const handlePrev = () => currentStep > 1 && goToStep(currentStep - 1)

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20">
      {/* Wizard Header */}
      <div className="flex items-center justify-between pt-4">
         <Link href="/portal/admin/batches" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-white border border-outline-variant/10 flex items-center justify-center group-hover:scale-105 transition-transform">
               <ChevronLeft className="h-5 w-5" />
            </div>
            <span className="text-sm font-bold">Back to Batches</span>
         </Link>
         
         <div className="flex flex-col items-end">
            <h1 className="text-2xl font-black text-on-surface tracking-tight">Create New Batch</h1>
            <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">Step {currentStep} of {STEPS.length}</p>
         </div>
      </div>

      {/* Progress Stepper */}
      <div className="relative h-2 bg-surface-container-low rounded-full overflow-hidden">
         <motion.div 
           initial={{ width: 0 }}
           animate={{ width: `${(currentStep / STEPS.length) * 100}%` }}
           className="absolute left-0 top-0 h-full primary-gradient"
         />
      </div>

      <div className="grid grid-cols-5 gap-4">
         {STEPS.map((step) => {
            const isActive = currentStep === step.id
            const isCompleted = currentStep > step.id
            const Icon = step.icon

            return (
              <div key={step.id} className="flex flex-col items-center gap-3">
                 <div className={cn(
                   "w-14 h-14 rounded-3xl flex items-center justify-center transition-all duration-500",
                   isActive ? "bg-primary text-white scale-110 shadow-xl shadow-primary/20" : 
                   isCompleted ? "bg-emerald-500 text-white" : "bg-white text-on-surface-variant border border-outline-variant/10"
                 )}>
                    {isCompleted ? <CheckCircle2 className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
                 </div>
                 <span className={cn(
                   "text-[9px] font-black uppercase tracking-widest text-center",
                   isActive ? "text-primary" : "text-on-surface-variant opacity-40"
                 )}>
                    {step.title}
                 </span>
              </div>
            )
         })}
      </div>

      {/* Main Content Area */}
      <div className="min-h-[500px] relative">
         <AnimatePresence mode="wait" custom={direction}>
            <motion.div
               key={currentStep}
               custom={direction}
               variants={variants}
               initial="enter"
               animate="center"
               exit="exit"
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
               className="w-full"
            >
               {currentStep === 1 && <BasicInfoStep formData={formData} setFormData={setFormData} />}
               {currentStep === 2 && <AssignTeacherStep formData={formData} setFormData={setFormData} />}
               {currentStep === 3 && <ScheduleSetupStep formData={formData} setFormData={setFormData} />}
               {currentStep === 4 && <StudentEnrollmentStep formData={formData} setFormData={setFormData} />}
               {currentStep === 5 && <ReviewStep formData={formData} />}
            </motion.div>
         </AnimatePresence>
      </div>

      {/* Footer Controls */}
      <div className="sticky bottom-8 left-0 right-0 py-6 px-10 bg-white/80 backdrop-blur-2xl rounded-[3rem] border border-outline-variant/5 shadow-ambient flex justify-between items-center z-50">
         <button 
           onClick={handlePrev}
           disabled={currentStep === 1}
           className="px-8 py-4 rounded-2xl font-black text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all disabled:opacity-30 flex items-center gap-2"
         >
            <ChevronLeft className="h-5 w-5" /> Previous
         </button>

         {currentStep < 5 ? (
           <button 
             onClick={handleNext}
             className="primary-gradient text-white px-10 py-4 rounded-2xl font-black text-sm shadow-xl shadow-primary/20 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
           >
              Continue <ChevronRight className="h-5 w-5" />
           </button>
         ) : (
           <button className="primary-gradient text-white px-10 py-4 rounded-2xl font-black text-sm shadow-xl shadow-primary/20 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
              Initialize Batch <CheckCircle2 className="h-5 w-5" />
           </button>
         )}
      </div>
    </div>
  )
}

function BasicInfoStep({ formData, setFormData }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
       <div className="space-y-6">
          <div className="space-y-2">
             <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-40">Batch Name</label>
             <input 
               type="text" 
               value={formData.name}
               onChange={(e) => setFormData({...formData, name: e.target.value})}
               placeholder="e.g. Grade 11 Physics - Weekend Theory" 
               className="w-full h-16 px-6 rounded-2xl bg-white border border-outline-variant/10 shadow-sm focus:ring-2 focus:ring-primary/20 outline-none text-on-surface font-bold transition-all" 
             />
          </div>
          <div className="grid grid-cols-2 gap-6">
             <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-40">Subject</label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full h-16 px-6 rounded-2xl bg-white border border-outline-variant/10 shadow-sm outline-none font-bold text-on-surface"
                >
                   <option>Physics</option>
                   <option>Mathematics</option>
                   <option>Chemistry</option>
                </select>
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-40">Target Grade</label>
                <select 
                  value={formData.grade}
                  onChange={(e) => setFormData({...formData, grade: e.target.value})}
                  className="w-full h-16 px-6 rounded-2xl bg-white border border-outline-variant/10 shadow-sm outline-none font-bold text-on-surface"
                >
                   <option>Grade 10</option>
                   <option>Grade 11</option>
                   <option>A/L 2025</option>
                   <option>A/L 2026</option>
                </select>
             </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
             <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-40">Batch Type</label>
                <select 
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full h-16 px-6 rounded-2xl bg-white border border-outline-variant/10 shadow-sm outline-none font-bold text-on-surface"
                >
                   <option>Group</option>
                   <option>Individual</option>
                   <option>Online</option>
                   <option>Hybrid</option>
                </select>
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-40">Max Capacity</label>
                <input 
                   type="number" 
                   value={formData.capacity}
                   onChange={(e) => setFormData({...formData, capacity: parseInt(e.target.value)})}
                   className="w-full h-16 px-6 rounded-2xl bg-white border border-outline-variant/10 shadow-sm outline-none font-bold text-on-surface" 
                />
             </div>
          </div>
       </div>

       <div className="bg-surface-container-low rounded-[3.5rem] p-10 space-y-8 flex flex-col justify-center border border-white">
          <div className="flex items-center gap-6">
             <div className="w-20 h-20 rounded-[2.5rem] bg-white flex items-center justify-center text-primary shadow-sm">
                <AlertCircle className="h-10 w-10" />
             </div>
             <div>
                <h3 className="text-xl font-black text-on-surface capitalize">Batch Configuration</h3>
                <p className="text-xs font-medium text-on-surface-variant opacity-60 leading-relaxed">Defining correct metadata helps in automation and analytics.</p>
             </div>
          </div>
          <div className="space-y-4 pt-6 border-t border-white">
             <div className="flex justify-between items-center bg-white/50 p-4 rounded-2xl">
                <div className="flex items-center gap-3">
                   <Monitor className="h-5 w-5 text-indigo-500" />
                   <span className="text-sm font-bold">Hybrid Compatible</span>
                </div>
                <div className="h-6 w-11 bg-emerald-500 rounded-full flex items-center px-1">
                   <div className="h-4 w-4 bg-white rounded-full translate-x-5" />
                </div>
             </div>
             <div className="flex justify-between items-center bg-white/50 p-4 rounded-2xl">
                <div className="flex items-center gap-3">
                   <AlertCircle className="h-5 w-5 text-amber-500" />
                   <span className="text-sm font-bold">Priority Notifications</span>
                </div>
                <div className="h-6 w-11 bg-emerald-500 rounded-full flex items-center px-1">
                   <div className="h-4 w-4 bg-white rounded-full translate-x-5" />
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}

function AssignTeacherStep({ formData, setFormData }: any) {
  const teachers = [
    { id: 1, name: "Kamal Silva", subject: "Physics", exp: "12 Years", batches: 12, rating: 4.9, available: true },
    { id: 2, name: "Sunil Perera", subject: "Mathematics", exp: "8 Years", batches: 5, rating: 4.7, available: true },
    { id: 3, name: "Nimali de Silva", subject: "Chemistry", exp: "15 Years", batches: 18, rating: 4.8, available: false },
  ]

  return (
    <div className="space-y-8">
       <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-1 w-full max-w-lg relative group">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
             <input type="text" placeholder="Search available teachers..." className="w-full h-16 pl-12 pr-6 rounded-2xl bg-white border border-outline-variant/10 shadow-sm focus:ring-2 focus:ring-primary/20 outline-none font-bold transition-all" />
          </div>
          <div className="flex gap-4">
             <button className="px-6 h-16 rounded-2xl bg-white border border-outline-variant/10 font-bold text-sm text-on-surface-variant">Filter by Department</button>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teachers.map((teacher) => {
             const isSelected = formData.teacher?.id === teacher.id
             return (
              <div 
                key={teacher.id} 
                onClick={() => teacher.available && setFormData({...formData, teacher})}
                className={cn(
                  "p-8 rounded-[3rem] border transition-all cursor-pointer group flex flex-col items-center text-center space-y-6 relative overflow-hidden",
                  isSelected ? "bg-white border-primary shadow-xl shadow-primary/5 scale-105" : 
                  teacher.available ? "bg-white border-outline-variant/10 hover:border-primary/30" : 
                  "bg-slate-50 border-outline-variant/10 opacity-60 grayscale cursor-not-allowed"
                )}
              >
                 {!teacher.available && (
                   <div className="absolute top-4 right-4 bg-error/10 text-error px-2 py-1 rounded-lg text-[8px] font-black uppercase">Occupied</div>
                 )}
                 <div className="relative">
                    <div className="w-24 h-24 rounded-[3rem] bg-surface-container-low overflow-hidden">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${teacher.name}`} alt={teacher.name} />
                    </div>
                    {isSelected && (
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                         <CheckCircle2 className="h-4 w-4" />
                      </div>
                    )}
                 </div>
                 <div className="space-y-1">
                    <h4 className="text-xl font-black text-on-surface tracking-tight">{teacher.name}</h4>
                    <p className="text-xs font-black uppercase tracking-widest text-primary">{teacher.subject}</p>
                 </div>
                 <div className="flex justify-center gap-6 pt-4 border-t border-outline-variant/5 w-full">
                    <div>
                       <p className="text-[8px] font-black uppercase tracking-widest opacity-40">Exp</p>
                       <p className="text-sm font-black text-on-surface">{teacher.exp}</p>
                    </div>
                    <div>
                       <p className="text-[8px] font-black uppercase tracking-widest opacity-40">Batches</p>
                       <p className="text-sm font-black text-on-surface">{teacher.batches}</p>
                    </div>
                 </div>
                 <button className={cn(
                   "w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all",
                   isSelected ? "bg-primary text-white" : teacher.available ? "bg-surface-container-low text-on-surface-variant hover:bg-primary/10 hover:text-primary" : "bg-slate-200 text-slate-400"
                 )}>
                    {isSelected ? "Selected" : teacher.available ? "Assign Teacher" : "Unavailable"}
                 </button>
              </div>
             )
          })}
       </div>
    </div>
  )
}

function ScheduleSetupStep({ formData, setFormData }: any) {
  const addSlot = () => {
    setFormData({
      ...formData,
      schedule: [...formData.schedule, { id: Date.now(), day: "Monday", startTime: "16:00", duration: "1.5 Hours", room: "Basics Room 02", conflict: false }]
    })
  }

  const removeSlot = (id: number) => {
    setFormData({
      ...formData,
      schedule: formData.schedule.filter((s: any) => s.id !== id)
    })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
       <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6">
             <div className="flex justify-between items-center">
                <h3 className="text-xl font-black text-on-surface tracking-tight">Recurring Schedule</h3>
                <button 
                  onClick={addSlot}
                  className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-1.5 p-2 px-4 rounded-xl hover:bg-primary/5 transition-all"
                >
                   <Plus className="h-4 w-4" /> Add Slot
                </button>
             </div>
             
             {formData.schedule.map((slot: any) => (
               <div key={slot.id} className={cn(
                 "bg-white p-8 rounded-[2.5rem] border shadow-sm space-y-6 relative group overflow-hidden transition-all",
                 slot.conflict ? "border-amber-500/30" : "border-outline-variant/5"
               )}>
                  <div className="flex flex-col md:flex-row gap-6">
                     <div className="flex-1 space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Day of Week</label>
                        <select className="w-full h-14 px-5 rounded-xl bg-surface-container-low border-none font-bold outline-none ring-primary/20 focus:ring-2">
                           <option>Sunday</option>
                           <option>Monday</option>
                           <option>Tuesday</option>
                           <option>Saturday</option>
                        </select>
                     </div>
                     <div className="flex-1 space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Start Time</label>
                        <div className="relative">
                           <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                           <input type="time" defaultValue={slot.startTime} className="w-full h-14 pl-12 pr-4 rounded-xl bg-surface-container-low border-none font-bold" />
                        </div>
                     </div>
                     <div className="flex-1 space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Duration</label>
                        <select className="w-full h-14 px-5 rounded-xl bg-surface-container-low border-none font-bold">
                           <option>1.5 Hours</option>
                           <option>2 Hours</option>
                           <option>3 Hours</option>
                        </select>
                     </div>
                     <div className="flex-1 space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Room / Hall</label>
                        <select className="w-full h-14 px-5 rounded-xl bg-surface-container-low border-none font-bold">
                           <option>Main Hall A</option>
                           <option>Basics Room 02</option>
                           <option>Science Lab 01</option>
                        </select>
                     </div>
                     {formData.type === "Hybrid" && (
                       <div className="flex-1 space-y-2">
                         <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Zoom / Meeting link</label>
                         <input type="text" placeholder="https://zoom.us/j/..." className="w-full h-14 px-5 rounded-xl bg-surface-container-low border-none font-bold" />
                       </div>
                     )}
                  </div>
                  <button 
                    onClick={() => removeSlot(slot.id)}
                    className="absolute top-4 right-4 p-2 text-slate-300 hover:text-error transition-colors"
                  >
                     <X className="h-5 w-5" />
                  </button>
               </div>
             ))}
          </div>
       </div>

       <div className="lg:col-span-5 space-y-8">
          <div className="bg-indigo-600 rounded-[3rem] p-10 text-white space-y-8 shadow-xl shadow-indigo-600/20">
             <div className="space-y-2">
                <h3 className="text-2xl font-black tracking-tight">Availability Insights</h3>
                <p className="text-sm font-medium opacity-60">Real-time check for teacher and classroom conflicts.</p>
             </div>
             
             <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl">
                   <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6" />
                   </div>
                   <div>
                      <p className="font-bold text-sm">Teacher Available</p>
                      <p className="text-[10px] opacity-60 font-medium">{formData.teacher?.name} is free</p>
                   </div>
                </div>
                {formData.schedule.some((s: any) => s.conflict) && (
                  <div className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl">
                     <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20">
                        <AlertCircle className="h-6 w-6" />
                     </div>
                     <div>
                        <p className="font-bold text-sm">Room Conflict</p>
                        <p className="text-[10px] opacity-60 font-medium tracking-tight">Main Hall A is booked at this time</p>
                     </div>
                  </div>
                )}
                <button className="w-full py-4 rounded-2xl bg-white text-indigo-600 font-black text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all">
                   Auto-Resolve Conflicts
                </button>
             </div>
          </div>
       </div>
    </div>
  )
}

function StudentEnrollmentStep({ formData, setFormData }: any) {
  const [selectedStudents, setSelectedStudents] = useState(formData.students)

  const toggleStudent = (id: number) => {
    const newSelected = selectedStudents.includes(id) 
      ? selectedStudents.filter((sId: number) => sId !== id)
      : [...selectedStudents, id]
    setSelectedStudents(newSelected)
    setFormData({...formData, students: newSelected})
  }

  const selectAll = () => {
    const allIds = [1,2,3,4,5,6,7,8]
    setSelectedStudents(allIds)
    setFormData({...formData, students: allIds})
  }

  return (
    <div className="space-y-8">
       <div className="bg-white p-10 rounded-[3.5rem] border border-outline-variant/10 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="space-y-1">
                <h3 className="text-xl font-black text-on-surface tracking-tight">Bulk Student Enrollment</h3>
                <p className="text-sm text-on-surface-variant font-medium opacity-60">Filter by grade and performance to select your batch.</p>
             </div>
             <div className="flex gap-4">
                <button 
                  onClick={selectAll}
                  className="px-6 py-3 rounded-2xl bg-surface-container-low text-on-surface font-black text-xs uppercase tracking-widest border border-outline-variant/10 hover:bg-white transition-all"
                >
                   Select All {formData.grade}
                </button>
             </div>
          </div>
          
          <div className="relative group max-w-lg">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
             <input type="text" placeholder="Filter by student name or ID..." className="w-full h-14 pl-12 pr-4 rounded-xl bg-white border border-outline-variant/10 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[300px] overflow-y-auto pr-4 no-scrollbar">
             {[1,2,3,4,5,6,7,8].map(i => {
                const isSelected = selectedStudents.includes(i)
                return (
                  <div 
                    key={i} 
                    onClick={() => toggleStudent(i)}
                    className={cn(
                      "flex items-center justify-between p-5 rounded-2xl border transition-all group cursor-pointer",
                      isSelected ? "bg-primary/5 border-primary/20" : "bg-surface-container-lowest border-outline-variant/5 hover:border-primary/20 hover:bg-white hover:shadow-md"
                    )}
                  >
                     <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs",
                          isSelected ? "bg-primary text-white" : "bg-indigo-50 text-indigo-600"
                        )}>
                           {String.fromCharCode(64 + i)}P
                        </div>
                        <div>
                           <p className="text-sm font-black text-on-surface">Student Name {i}</p>
                           <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">CH2025-00{i}</p>
                        </div>
                     </div>
                     <div className={cn(
                       "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all",
                       isSelected ? "bg-primary border-primary text-white" : "border-outline-variant/20 group-hover:border-primary/40"
                     )}>
                        {isSelected && <CheckCircle2 className="h-3.5 w-3.5" />}
                     </div>
                  </div>
                )
             })}
          </div>
       </div>
    </div>
  )
}

function ReviewStep({ formData }: any) {
  const hasConflicts = formData.schedule.some((s: any) => s.conflict)

  return (
    <div className="space-y-10">
       <div className={cn(
         "rounded-[3rem] p-12 text-white flex flex-col items-center text-center space-y-6 shadow-xl",
         hasConflicts ? "bg-amber-500 shadow-amber-500/10" : "bg-emerald-600 shadow-emerald-500/10"
       )}>
          <div className="w-24 h-24 rounded-[3rem] bg-white/20 flex items-center justify-center shadow-inner">
             {hasConflicts ? <AlertCircle className="h-12 w-12" /> : <CheckCircle2 className="h-12 w-12" />}
          </div>
          <div className="space-y-4">
             <h3 className="text-4xl font-black tracking-tight">{hasConflicts ? "Conflict Warning!" : "Configuration Ready!"}</h3>
             <p className="text-lg font-medium opacity-60 max-w-lg">
                {hasConflicts 
                  ? "We detected some scheduling conflicts. You can still proceed, but it's recommended to fix them now." 
                  : "Everything looks great. Review your settings before committing this new batch to the system."}
             </p>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-[3rem] bg-white border border-outline-variant/10 shadow-sm space-y-6">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                   <BookOpen className="h-6 w-6" />
                </div>
                <h4 className="font-black text-on-surface uppercase tracking-widest text-xs">Academic Info</h4>
             </div>
             <div className="space-y-4 pt-4 border-t border-outline-variant/5">
                <div className="flex justify-between">
                   <span className="text-xs font-medium opacity-40">Batch Name</span>
                   <span className="text-xs font-black text-on-surface tracking-tight">{formData.name || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-xs font-medium opacity-40">Teacher</span>
                   <span className="text-xs font-black text-on-surface">{formData.teacher?.name}</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-xs font-medium opacity-40">Subject</span>
                   <span className="text-xs font-black text-on-surface">{formData.subject}</span>
                </div>
             </div>
          </div>

          <div className="p-8 rounded-[3rem] bg-white border border-outline-variant/10 shadow-sm space-y-6">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                   <Calendar className="h-6 w-6" />
                </div>
                <h4 className="font-black text-on-surface uppercase tracking-widest text-xs">Schedule</h4>
             </div>
             <div className="space-y-4 pt-4 border-t border-outline-variant/5">
                <div className="flex justify-between">
                   <span className="text-xs font-medium opacity-40">Sessions</span>
                   <span className="text-xs font-black text-on-surface">{formData.schedule.length} Weekly</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-xs font-medium opacity-40">Type</span>
                   <span className="text-xs font-black text-on-surface">{formData.type}</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-xs font-medium opacity-40">Conflicts</span>
                   <span className={cn("text-xs font-black", hasConflicts ? "text-amber-500" : "text-emerald-500")}>
                      {hasConflicts ? "Detected" : "None"}
                   </span>
                </div>
             </div>
          </div>

          <div className="p-8 rounded-[3rem] bg-white border border-outline-variant/10 shadow-sm space-y-6">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                   <Users className="h-6 w-6" />
                </div>
                <h4 className="font-black text-on-surface uppercase tracking-widest text-xs">Enrollment</h4>
             </div>
             <div className="space-y-4 pt-4 border-t border-outline-variant/5">
                <div className="flex justify-between">
                   <span className="text-xs font-medium opacity-40">Enrolled</span>
                   <span className="text-xs font-black text-on-surface">{formData.students.length} Students</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-xs font-medium opacity-40">Capacity</span>
                   <span className="text-xs font-black text-on-surface">{Math.round((formData.students.length/formData.capacity)*100)}% Full</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-xs font-medium opacity-40">Batch Limit</span>
                   <span className="text-xs font-black text-on-surface">{formData.capacity}</span>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}
