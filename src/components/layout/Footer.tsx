"use client"

import Link from "next/link"
import { Share2, Globe, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-on-surface px-6 pb-12 pt-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="text-3xl font-black tracking-tighter text-white">CenterHub</div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Transforming Sri Lankan tuition centers with architectural precision. 
              The ultimate management suite for modern educators.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all">
                <Globe className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all">
                <Share2 className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold text-white uppercase tracking-widest text-[10px] opacity-40">Solutions</h5>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/solutions" className="hover:text-primary-fixed transition-colors">A/L & O/L Institutes</Link></li>
              <li><Link href="/solutions" className="hover:text-primary-fixed transition-colors">Professional Studies</Link></li>
              <li><Link href="/solutions" className="hover:text-primary-fixed transition-colors">Primary Support</Link></li>
              <li><Link href="/platform" className="hover:text-primary-fixed transition-colors">Staff Management</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold text-white uppercase tracking-widest text-[10px] opacity-40">Company</h5>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/platform" className="hover:text-primary-fixed transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="hover:text-primary-fixed transition-colors">Pricing</Link></li>
              <li><Link href="/resources" className="hover:text-primary-fixed transition-colors">Resources</Link></li>
              <li><Link href="/login" className="hover:text-primary-fixed transition-colors">Faculty Portal</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold text-white uppercase tracking-widest text-[10px] opacity-40">Contact</h5>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-fixed shrink-0" />
                <span>Level 7, Maga One, Colombo 05, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-fixed shrink-0" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-fixed shrink-0" />
                <span>hello@centerhub.lk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <div>© 2024 CenterHub Tuition Management Suite. Built in Sri Lanka.</div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-all">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-all">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-all">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
