import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Navbar from '@/Components/Navbar';
import StarsBackground from '@/Components/StarsBackground';export default function Home() {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <>
            <Head title="Home | OBSIDIAN SKY" />
            <div className="font-body text-blog-on-surface-variant selection:bg-blog-primary-container selection:text-blog-on-primary-container bg-[#0A0A0A] min-h-screen">
                <style>{`
                    .material-symbols-outlined {
                        font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
                    }
                `}</style>
                <Navbar />

                {/* Stars Background Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 h-[800px] mask-image-gradient">
                    <style>{`
                        .mask-image-gradient {
                            -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
                            mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
                        }
                    `}</style>
                    <StarsBackground />
                </div>

                {/* Hero Section */}
                <motion.header 
                    className="relative pt-48 pb-32 px-10 text-center max-w-[1200px] mx-auto z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex justify-center gap-6 mb-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                        <span className="text-xs font-bold tracking-widest uppercase">PHP</span>
                        <span className="text-xs font-bold tracking-widest uppercase">JS</span>
                        <span className="text-xs font-bold tracking-widest uppercase">TS</span>
                        <span className="text-xs font-bold tracking-widest uppercase">React</span>
                        <span className="text-xs font-bold tracking-widest uppercase">Laravel</span>
                    </div>
                    <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white tracking-[-0.04em] leading-[1.1] mb-8">
                        BUILDING SOLUTIONS THROUGH <br className="hidden md:block"/> CODE &amp; WORDS
                    </h1>
                    <p className="max-w-2xl mx-auto text-blog-on-surface-variant text-lg md:text-xl leading-relaxed mb-12">
                        A curated space exploring the intersection of modern software engineering and architectural clarity. Documenting the journey of crafting high-performance systems.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="px-8 py-4 bg-white text-blog-on-primary-fixed font-bold tracking-tight transition-all hover:opacity-90 active:scale-95">Start Reading</button>
                        <button className="px-8 py-4 border border-blog-outline-variant text-white font-bold tracking-tight transition-all hover:bg-white/5 active:scale-95">About Me</button>
                    </div>
                </motion.header>

                {/* Main Content Layout */}
                <main className="max-w-[1440px] mx-auto px-10 pb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Left: Article Feed (8 cols) */}
                        <section className="lg:col-span-8 space-y-24">
                            {/* Premium Series Card */}
                            <motion.div 
                                className="relative bg-blog-surface-container-low p-10 group overflow-hidden"
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
                            >
                                <div className="absolute top-0 right-0 p-6">
                                    <span className="material-symbols-outlined text-blog-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                </div>
                                <div className="relative z-10">
                                    <span className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-blog-primary mb-4 block">Premium Series</span>
                                    <h2 className="font-headline text-3xl font-bold text-white mb-4 group-hover:text-blog-primary transition-colors">Architecting Scalable Microservices with Event Sourcing</h2>
                                    <p className="text-blog-on-surface-variant leading-relaxed mb-6 max-w-xl">A deep dive into eventual consistency and domain-driven design for enterprise-grade applications.</p>
                                    <Link className="text-white font-bold border-b-2 border-blog-primary-container pb-1 inline-flex items-center gap-2" href="/article">View Series <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
                                </div>
                            </motion.div>

                            {/* Feed Items */}
                            <div className="space-y-20">
                                {/* Article 1 */}
                                <motion.article className="group" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants}>
                                    <Link href="/article" className="flex flex-col md:flex-row gap-8 block">
                                        <div className="w-full md:w-1/3 aspect-[4/3] bg-blog-surface-container-high overflow-hidden">
                                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQFfmXM03Tzq1QOWNrt_fNsZIG7u5esLJJWhi-HVzNH0WmL_11aK6LakW4UA5OezOuuHDxGbPqKI-WVT4Fqiswerd97vBnC9JETUgz5CsLuj_2pqEUXzJKtrq9aBc9T-omV9Nrf4aVvZb08O2KnaZurGk8jz-j0kI-Z-NONuENC-RXCX0l4sxqG8Fcq_2UeYU8DCylRvemLVCsWKO39_UMBs9NqpJMAcdbNm4oGyV24nua5ECuM06dDZKe0PmhOXL-a9MzYTmosg" alt=""/>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 text-xs font-bold tracking-wider text-blog-outline mb-4">
                                                <span>Oct 24, 2024</span>
                                                <span className="w-1 h-1 bg-blog-outline-variant rounded-full"></span>
                                                <span className="text-blog-primary uppercase">Engineering</span>
                                            </div>
                                            <h3 className="font-headline text-2xl font-bold text-white mb-4 group-hover:text-blog-primary transition-colors cursor-pointer">Why TypeScript is Non-Negotiable in 2024</h3>
                                            <p className="text-blog-on-surface-variant leading-relaxed mb-6">Type safety isn't just a preference—it's the backbone of maintainable modern web architecture. Here's how we implemented strict typing across a legacy codebase.</p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-blog-surface-container-highest flex items-center justify-center">
                                                    <span className="text-[10px] font-bold text-white">JD</span>
                                                </div>
                                                <span className="text-xs font-medium text-blog-outline">James Devinson</span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>

                                {/* Article 2 */}
                                <motion.article className="group" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants}>
                                    <Link href="/article" className="flex flex-col md:flex-row gap-8 block">
                                        <div className="w-full md:w-1/3 aspect-[4/3] bg-blog-surface-container-high overflow-hidden">
                                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB5SIhEuJ1Upu-AHvCwuLDrInioPJWYJ_g4D9kMIlYwLwcPcSbWEx0xGGOZ9PHDJJ-B3nKEIj0e8GBLZ4JYsqWQDPdqNjL5yDBeSOv7uDmRnX8P__wLiBdHcrVJ8na4F_ziRZ4hQD9lFJDIGynHyMkdgmtUCcAA0gjIv1TaeeYKDp13YyaGAqjURV6zDxwlSdE28eBJJHUMRA8aJOMGYKEqAUaiPFzPDWT5xpKb-YYyxEXw_qpAColyOMZbkK92FJ5kmZqFLj6yg" alt=""/>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 text-xs font-bold tracking-wider text-blog-outline mb-4">
                                                <span>Oct 18, 2024</span>
                                                <span className="w-1 h-1 bg-blog-outline-variant rounded-full"></span>
                                                <span className="text-blog-primary uppercase">Architecture</span>
                                            </div>
                                            <h3 className="font-headline text-2xl font-bold text-white mb-4 group-hover:text-blog-primary transition-colors cursor-pointer">The Silent Killer of Performance: Hydration Issues</h3>
                                            <p className="text-blog-on-surface-variant leading-relaxed mb-6">Understanding the cost of JavaScript in the browser and why partial hydration is the future of user experience.</p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-blog-surface-container-highest flex items-center justify-center">
                                                    <span className="text-[10px] font-bold text-white">JD</span>
                                                </div>
                                                <span className="text-xs font-medium text-blog-outline">James Devinson</span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>

                                {/* Article 3 */}
                                <motion.article className="group" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants}>
                                    <Link href="/article" className="flex flex-col md:flex-row gap-8 block">
                                        <div className="w-full md:w-1/3 aspect-[4/3] bg-blog-surface-container-high overflow-hidden">
                                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO32mjr6Hn5-2KettHPGieixeShgPjVW1o-RIaRN6no-7f2d8hjKllyGpyDGZeWKH396fbRfD5kMDnkyAqTqO_Dlx4yghHcfeLhWKUa29XSdehZsULcu2kOFS_B9xsq0Oa6g6REoR3MwQ47QHtoBoprXDo14iRnOFNzklaWGEm3xOSWl0eGwWKWDQsCjUZm2sv0ksVnnHI40wd2hJkDaAFvP9_IZCAIHSd9NxXpaF_rVZ_x6kxtpZjtey5Z3NGJABf366rkZLLQg" alt=""/>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 text-xs font-bold tracking-wider text-blog-outline mb-4">
                                                <span>Oct 12, 2024</span>
                                                <span className="w-1 h-1 bg-blog-outline-variant rounded-full"></span>
                                                <span className="text-blog-primary uppercase">Management</span>
                                            </div>
                                            <h3 className="font-headline text-2xl font-bold text-white mb-4 group-hover:text-blog-primary transition-colors cursor-pointer">Leading Teams Through Technical Debt</h3>
                                            <p className="text-blog-on-surface-variant leading-relaxed mb-6">Technical debt is inevitable, but unmanaged debt is fatal. Strategies for negotiating refactors with business stakeholders.</p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-blog-surface-container-highest flex items-center justify-center">
                                                    <span className="text-[10px] font-bold text-white">JD</span>
                                                </div>
                                                <span className="text-xs font-medium text-blog-outline">James Devinson</span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            </div>
                        </section>

                        {/* Right: Sidebar (4 cols) */}
                        <motion.aside 
                            className="lg:col-span-4 space-y-16"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {/* Profile Card */}
                            <div className="bg-blog-surface-container p-8">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-24 h-24 rounded-full border-2 border-blog-primary p-1 mb-6">
                                        <img className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtSrXHw3HHOJo08OR8IIXzvku-PSUpb8E_vZXSipTr6rj526vGrCUQfcKumQl0GyGp84SnDpk-zjd3_AvBLbBOdyG2kRIAgqIkolGiIWzad2Q-cUM2k2NIJO1ZVRwpSPBYzzTNZgHquZnw2rpfhIAG7UgRwyzTq756gupjKD1zHRwQYTRs2GaPNzv-85M5xAN7_zE62kw__wDecGJPRzqCLJlKFQfBGzsJ7rtCvgHbmgXshX5a_Gp2BS7VEXYeQ8muyl3lBotxzA" alt=""/>
                                    </div>
                                    <h4 className="font-headline text-xl font-bold text-white flex items-center gap-2 mb-2">
                                        James Devinson
                                        <span className="material-symbols-outlined text-blog-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                    </h4>
                                    <p className="text-blog-on-surface-variant text-sm leading-relaxed mb-8">
                                        Principal Software Architect based in Berlin. Focused on distributed systems, modern web standards, and the human side of technical leadership.
                                    </p>
                                    <div className="flex gap-4 w-full">
                                        <button className="flex-1 py-3 bg-blog-surface-container-high hover:bg-blog-surface-bright transition-colors text-white text-xs font-bold uppercase tracking-widest">Follow</button>
                                        <button className="px-4 py-3 bg-blog-surface-container-high hover:bg-blog-surface-bright transition-colors text-white">
                                            <span className="material-symbols-outlined text-sm">mail</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Articles */}
                            <div>
                                <h5 className="font-headline text-sm font-black uppercase tracking-[0.2em] text-white mb-8">Recent Articles</h5>
                                <div className="space-y-6">
                                    <Link className="block group" href="/article">
                                        <span className="text-[10px] font-bold text-blog-primary uppercase tracking-wider block mb-1">Architecture</span>
                                        <span className="text-white font-medium group-hover:text-blog-primary transition-colors">Micro-frontends: The Hidden Costs</span>
                                    </Link>
                                    <Link className="block group" href="/article">
                                        <span className="text-[10px] font-bold text-blog-primary uppercase tracking-wider block mb-1">Performance</span>
                                        <span className="text-white font-medium group-hover:text-blog-primary transition-colors">Rust vs Go for Cloud Native Services</span>
                                    </Link>
                                    <Link className="block group" href="/article">
                                        <span className="text-[10px] font-bold text-blog-primary uppercase tracking-wider block mb-1">Tools</span>
                                        <span className="text-white font-medium group-hover:text-blog-primary transition-colors">My Neovim Setup for 2024</span>
                                    </Link>
                                    <Link className="block group" href="/article">
                                        <span className="text-[10px] font-bold text-blog-primary uppercase tracking-wider block mb-1">Thoughts</span>
                                        <span className="text-white font-medium group-hover:text-blog-primary transition-colors">The AI Engineer Myth</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="bg-blog-surface-container-low p-8">
                                <h5 className="font-headline text-lg font-bold text-white mb-4">The Digital Curator</h5>
                                <p className="text-sm text-blog-on-surface-variant mb-6">Bi-weekly insights on technology, architecture, and engineering leadership delivered to your inbox.</p>
                                <div className="space-y-4">
                                    <input className="w-full bg-[#0E0E0E] border-none text-white text-sm py-4 px-6 focus:ring-1 focus:ring-blog-primary transition-all" placeholder="Email Address" type="email"/>
                                    <button className="w-full py-4 bg-blog-primary-container text-blog-on-primary-fixed font-bold tracking-tight hover:opacity-90">Subscribe</button>
                                </div>
                            </div>
                        </motion.aside>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-[#0E0E0E] border-t border-[#3E484F]/15">
                    <div className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto py-16 px-10 gap-8">
                        <div className="text-xl font-black text-white uppercase font-headline">OBSIDIAN SKY</div>
                        <div className="flex gap-12 text-[#BDC8D1]">
                            <a className="text-sm font-label tracking-wide hover:text-white transition-colors duration-200 uppercase font-bold" href="#">Twitter</a>
                            <a className="text-sm font-label tracking-wide hover:text-white transition-colors duration-200 uppercase font-bold" href="#">GitHub</a>
                            <a className="text-sm font-label tracking-wide hover:text-white transition-colors duration-200 uppercase font-bold" href="#">LinkedIn</a>
                        </div>
                        <div className="font-body text-sm tracking-wide text-[#BDC8D1]">
                            © 2024 Obsidian Sky. All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
