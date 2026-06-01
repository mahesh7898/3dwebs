import Link from "next/link";
import Logo from "@/components/Logo";

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-deep-space border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-start justify-start mb-6 -ml-4 max-w-[200px]">
              <Logo showTagline={true} className="items-start" />
            </Link>
            <p className="text-gray-400 max-w-sm mb-8">
              We engineer world-class digital experiences that help premium brands scale and dominate their industries.
            </p>
            <div className="flex gap-4">
              <a href="mailto:3dwebs.shop@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors" title="Email"><MailIcon className="w-5 h-5" /></a>
              <a href="https://wa.me/918799062644" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors" title="WhatsApp"><WhatsappIcon className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/mahesh-shimpi-026977316" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors" title="LinkedIn"><LinkedinIcon className="w-5 h-5" /></a>
              <a href="https://instagram.com/mahesh_shimpii" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors" title="Instagram"><InstagramIcon className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#work" className="text-gray-400 hover:text-electric-blue transition-colors">Work</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-electric-blue transition-colors">Services</Link></li>
              <li><Link href="#why-choose-us" className="text-gray-400 hover:text-electric-blue transition-colors">Why Us</Link></li>
              <li><Link href="#pricing" className="text-gray-400 hover:text-electric-blue transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} 3dwebs Agency. All rights reserved.</p>
          <p className="text-gray-500 text-sm flex items-center gap-1">Built by Mahesh Shimpi</p>
        </div>
      </div>
    </footer>
  );
}
