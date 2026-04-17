"use client"

import Link from "next/link"
import { ChevronRight, LayoutGrid, HelpCircle, LifeBuoy } from "lucide-react"

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 relative overflow-hidden bg-surface font-body">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-surface-container-high opacity-40 blur-3xl -z-10"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] rounded-full bg-primary-fixed opacity-30 blur-3xl -z-10"></div>

      <div className="mb-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-container text-white mb-4 shadow-xl shadow-primary/20">
          <span className="material-symbols-outlined text-4xl">hub</span>
        </div>
        <h1 className="font-headline font-extrabold text-3xl tracking-tighter text-on-surface">CenterHub</h1>
        <p className="text-on-surface-variant font-medium text-sm mt-1">Academic Management Hub</p>
      </div>

      <div className="w-full max-w-md space-y-8">
        <section className="bg-surface-container-lowest rounded-3xl p-8 md:p-10 shadow-ambient">
          <header className="mb-8">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface">Welcome back</h2>
            <p className="text-on-surface-variant text-sm mt-2">Please enter your details to sign in.</p>
          </header>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1" htmlFor="email">Email Address</label>
              <input 
                className="w-full h-12 px-4 rounded-xl border-none bg-surface-container-low text-on-surface placeholder:text-outline-variant focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                id="email" 
                type="email" 
                placeholder="name@organization.com" 
                required 
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant" htmlFor="password">Password</label>
                <Link className="text-xs font-semibold text-primary hover:text-primary-container transition-colors" href="#">Forgot Password?</Link>
              </div>
              <input 
                className="w-full h-12 px-4 rounded-xl border-none bg-surface-container-low text-on-surface placeholder:text-outline-variant focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                required 
              />
            </div>
            <Link 
              href="/dashboard"
              className="flex w-full h-12 primary-gradient text-white font-bold rounded-full items-center justify-center transition-all active:scale-[0.98] shadow-lg shadow-primary/30"
            >
              Sign In
            </Link>
          </form>

          <div className="mt-8 pt-8 border-t border-surface-container-high text-center">
            <p className="text-on-surface-variant text-sm">
              Don&apos;t have a center yet? 
              <Link className="text-primary font-bold hover:underline underline-offset-4 ml-1" href="/register">Create Center</Link>
            </p>
          </div>
        </section>
      </div>

      <footer className="mt-12 mb-8 flex items-center gap-6 text-on-surface-variant text-sm font-medium">
        <Link className="hover:text-primary transition-colors inline-flex items-center gap-2" href="#">
          <HelpCircle className="h-4 w-4" /> Support
        </Link>
        <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
        <Link className="hover:text-primary transition-colors inline-flex items-center gap-2" href="#">
          <LifeBuoy className="h-4 w-4" /> Help Center
        </Link>
      </footer>
    </main>
  )
}
