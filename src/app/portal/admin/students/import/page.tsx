"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  FileUp, 
  ArrowLeft, 
  FileSpreadsheet, 
  AlertCircle, 
  CheckCircle2, 
  X,
  Plus,
  ArrowRight,
  Download,
  Info
} from "lucide-react"
import { cn } from "@/lib/utils"

const STEPS = ["Upload File", "Review Data", "Import Finalize"]

const MOCK_PREVIEW = [
  { name: "John Doe", email: "john@example.com", grade: "12", phone: "0771234567", status: "Valid" },
  { name: "Jane Smith", email: "jane@example.com", grade: "11", phone: "0719876543", status: "Valid" },
  { name: "Alice Brown", email: "invalid-email", grade: "12", phone: "0771112223", status: "Warning" },
  { name: "Bob Wilson", email: "bob@example.com", grade: "10", phone: "invalid", status: "Error" },
]

export default function BulkImportPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  const handleUpload = () => {
    setIsUploading(true)
    setTimeout(() => {
      setIsUploading(false)
      setCurrentStep(1)
    }, 1500)
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <Link href="/portal/admin/management" className="inline-flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Students
          </Link>
          <h1 className="text-3xl font-black text-on-surface">Bulk Student Import</h1>
          <p className="text-sm text-on-surface-variant font-medium">Upload a CSV or Excel file to add hundreds of students at once.</p>
        </div>
        
        <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-surface-container-low border border-outline-variant/10 font-bold text-sm text-primary hover:bg-white transition-all">
          <Download className="h-4 w-4" /> Download Template
        </button>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-4 max-w-md">
         {STEPS.map((step, idx) => (
           <div key={step} className="flex-1 space-y-2">
              <div className={cn(
                "h-1 rounded-full transition-all duration-500",
                idx <= currentStep ? "bg-primary" : "bg-surface-container-highest"
              )}></div>
              <span className={cn(
                "text-[10px] font-black uppercase tracking-widest block",
                idx <= currentStep ? "text-primary" : "text-on-surface-variant opacity-40"
              )}>{step}</span>
           </div>
         ))}
      </div>

      {/* Upload Zone */}
      {currentStep === 0 && (
        <div className={cn(
          "bg-white rounded-[3rem] border-2 border-dashed border-outline-variant/20 p-16 flex flex-col items-center justify-center text-center space-y-6 transition-all",
          isUploading ? "opacity-50 pointer-events-none" : "hover:border-primary hover:bg-primary/[0.02]"
        )}>
          <div className="w-24 h-24 rounded-[2.5rem] bg-surface-container-low flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
             <FileSpreadsheet className="h-10 w-10" />
          </div>
          <div className="space-y-2">
             <h3 className="text-2xl font-black text-on-surface">Drag and drop your file</h3>
             <p className="text-sm text-on-surface-variant font-medium max-w-sm mx-auto">
               Supports .CSV, .XLS, and .XLSX files. Make sure your data follows our standard template for faster processing.
             </p>
          </div>
          <button 
            onClick={handleUpload}
            className="primary-gradient px-10 py-4 rounded-2xl text-white font-black text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2"
          >
             {isUploading ? "Uploading..." : "Select File"} <FileUp className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Review Table */}
      {currentStep === 1 && (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard label="Total Rows" value="152" color="text-indigo-600" />
              <StatCard label="Valid Students" value="148" color="text-emerald-600" />
              <StatCard label="Errors Found" value="4" color="text-error" />
           </div>

           <div className="bg-white rounded-[2.5rem] border border-outline-variant/5 shadow-ambient overflow-hidden">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="bg-surface-container-low border-b border-outline-variant/10">
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Name</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Email</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Grade</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Status</th>
                          <th className="px-8 py-5 text-right"></th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/5">
                       {MOCK_PREVIEW.map((item, idx) => (
                         <tr key={idx} className="group hover:bg-surface-container-low/50 transition-colors">
                            <td className="px-8 py-5 font-bold text-sm text-on-surface">{item.name}</td>
                            <td className="px-8 py-5 text-sm text-on-surface-variant font-medium">{item.email}</td>
                            <td className="px-8 py-5 text-sm text-on-surface-variant font-medium">{item.grade}</td>
                            <td className="px-8 py-5">
                               <div className={cn(
                                 "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                                 item.status === 'Valid' ? "bg-emerald-50 text-emerald-700" : item.status === 'Warning' ? "bg-amber-50 text-amber-700" : "bg-error/10 text-error"
                               )}>
                                  {item.status === 'Valid' ? <CheckCircle2 className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                                  {item.status}
                               </div>
                            </td>
                            <td className="px-8 py-5 text-right">
                               <button className="p-2 rounded-xl text-on-surface-variant hover:bg-white hover:shadow-sm transition-all"><X className="h-4 w-4" /></button>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>

           <div className="flex items-center justify-between p-8 rounded-[2rem] bg-white border border-outline-variant/5 shadow-ambient">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Info className="h-6 w-6" />
                 </div>
                 <div className="space-y-0.5">
                    <p className="text-sm font-black text-on-surface">4 rows need attention</p>
                    <p className="text-xs text-on-surface-variant font-medium">Please fix errors in the file and re-upload or edit manually.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <button onClick={() => setCurrentStep(0)} className="px-6 py-3 rounded-2xl font-bold text-sm text-on-surface-variant hover:text-primary transition-colors">
                    Re-upload
                 </button>
                 <button 
                  onClick={() => setCurrentStep(2)}
                  className="primary-gradient px-10 py-4 rounded-2xl text-white font-black text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                 >
                    Start Import <ArrowRight className="h-4 w-4" />
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* Success State */}
      {currentStep === 2 && (
        <div className="bg-white rounded-[3rem] border border-outline-variant/5 shadow-ambient p-16 flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in-95 duration-700">
           <div className="w-24 h-24 rounded-[2.5rem] bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/20">
              <CheckCircle2 className="h-12 w-12" />
           </div>
           <div className="space-y-2">
              <h3 className="text-3xl font-black text-on-surface">Import Successful!</h3>
              <p className="text-base text-on-surface-variant font-medium max-w-sm mx-auto">
                148 students have been successfully added to the system and invitations are being sent.
              </p>
           </div>
           <div className="flex gap-4">
              <Link href="/portal/admin/management" className="px-10 py-4 rounded-2xl bg-surface-container-low font-bold text-sm text-on-surface hover:bg-white transition-all">
                View Student List
              </Link>
              <button onClick={() => setCurrentStep(0)} className="primary-gradient px-10 py-4 rounded-2xl text-white font-black text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                Import More
              </button>
           </div>
        </div>
      )}
    </div>
  )
}

function StatCard({ label, value, color }: any) {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-outline-variant/5 shadow-ambient flex flex-col gap-1 items-center justify-center text-center">
       <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-60">{label}</span>
       <span className={cn("text-4xl font-black", color)}>{value}</span>
    </div>
  )
}
