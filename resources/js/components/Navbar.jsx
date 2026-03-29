import { Link, usePage } from '@inertiajs/react';

export default function Navbar() {
    const { url } = usePage();

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#131313]/70 backdrop-blur-xl shadow-2xl shadow-black/60 transition-colors">
            <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
                <div className="text-xl font-bold tracking-[-0.04em] text-white font-headline uppercase">
                    OBSIDIAN SKY
                </div>
                <div className="hidden md:flex items-center space-x-8 font-headline tracking-tighter text-white uppercase text-sm">
                    <Link className={url === '/' ? 'text-sky-400 border-b-2 border-sky-400 pb-1' : 'text-[#BDC8D1] hover:text-white transition-colors'} href="/">Home</Link>
                    <Link className={url.startsWith('/projects') ? 'text-sky-400 border-b-2 border-sky-400 pb-1' : 'text-[#BDC8D1] hover:text-white transition-colors'} href="/projects">Projects</Link>
                    <Link className={url.startsWith('/contact') ? 'text-sky-400 border-b-2 border-sky-400 pb-1' : 'text-[#BDC8D1] hover:text-white transition-colors'} href="/contact">Contact</Link>
                    <Link className={url.startsWith('/categories') ? 'text-sky-400 border-b-2 border-sky-400 pb-1' : 'text-[#BDC8D1] hover:text-white transition-colors'} href="/categories">Categories</Link>
                </div>
                <div className="flex items-center gap-6">
                    <span className="material-symbols-outlined text-blog-on-surface-variant cursor-pointer hover:text-white transition-colors" style={{fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24"}}>search</span>
                    <span className="material-symbols-outlined text-blog-on-surface-variant cursor-pointer hover:text-white transition-colors" style={{fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24"}}>account_circle</span>
                    <div className="hidden sm:flex items-center gap-4">
                        <button className="px-5 py-2 text-sm font-semibold border border-blog-outline-variant text-white hover:bg-white/5 transition-all active:scale-95">Login</button>
                        <button className="px-5 py-2 text-sm font-semibold bg-white text-blog-on-primary-fixed hover:bg-blog-on-surface-variant transition-all active:scale-95">Register</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
