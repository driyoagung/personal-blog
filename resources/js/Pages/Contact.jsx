import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Navbar from '@/Components/Navbar';

export default function Contact() {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <>
            <Head title="Contact | OBSIDIAN SKY" />
            <div className="bg-blog-surface-dim text-blog-on-surface font-body selection:bg-blog-primary/30 min-h-screen relative">
                <style>{`
                    .material-symbols-outlined {
                        font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
                        font-size: 1.25rem;
                    }
                    .tonal-shift {
                        background: linear-gradient(180deg, #131313 0%, #1C1B1B 100%);
                    }
                `}</style>
                
                <Navbar />

                <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto min-h-screen">
                    {/* Hero Section */}
                    <motion.header 
                        className="mb-24"
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                    >
                        <span className="text-blog-primary font-label text-[0.6875rem] uppercase tracking-[0.1em] font-bold block mb-4">Inquiry</span>
                        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-white leading-tight max-w-3xl">
                            Let’s initiate a <span className="text-blog-primary">dialogue</span> in the void.
                        </h1>
                    </motion.header>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* Contact Form Section */}
                        <motion.section 
                            className="lg:col-span-7 bg-blog-surface-container-low p-10 md:p-16 rounded-xl"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <form className="space-y-12">
                                <div className="group relative">
                                    <label className="block font-label text-[0.6875rem] uppercase tracking-[0.1em] text-blog-on-surface-variant group-focus-within:text-blog-primary transition-colors mb-2">Full Name</label>
                                    <input className="w-full bg-transparent border-0 border-b border-blog-outline-variant focus:ring-0 focus:border-blog-primary px-0 py-4 text-white placeholder:text-blog-outline/30 transition-all font-body text-lg" placeholder="Identity" type="text"/>
                                </div>
                                <div className="group relative">
                                    <label className="block font-label text-[0.6875rem] uppercase tracking-[0.1em] text-blog-on-surface-variant group-focus-within:text-blog-primary transition-colors mb-2">Email Address</label>
                                    <input className="w-full bg-transparent border-0 border-b border-blog-outline-variant focus:ring-0 focus:border-blog-primary px-0 py-4 text-white placeholder:text-blog-outline/30 transition-all font-body text-lg" placeholder="reach@obsidiansky.com" type="email"/>
                                </div>
                                <div className="group relative">
                                    <label className="block font-label text-[0.6875rem] uppercase tracking-[0.1em] text-blog-on-surface-variant group-focus-within:text-blog-primary transition-colors mb-2">Message</label>
                                    <textarea className="w-full bg-transparent border-0 border-b border-blog-outline-variant focus:ring-0 focus:border-blog-primary px-0 py-4 text-white placeholder:text-blog-outline/30 transition-all font-body text-lg resize-none" placeholder="Transmit your thoughts..." rows="4"></textarea>
                                </div>
                                <div className="pt-8">
                                    <button className="group flex items-center gap-4 bg-gradient-to-br from-blog-primary to-blog-primary-container text-blog-on-primary-fixed px-8 py-4 rounded-md font-bold uppercase tracking-widest text-sm transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] active:scale-95" type="button">
                                        Send Message
                                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </button>
                                </div>
                            </form>
                        </motion.section>

                        {/* Social & Information Column */}
                        <motion.aside 
                            className="lg:col-span-5 space-y-16"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {/* Social Links Grid */}
                            <div className="space-y-8">
                                <h3 className="font-headline text-2xl font-bold text-white tracking-tight">Digital Presence</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    <a className="group flex items-center justify-between p-6 bg-blog-surface-container-lowest hover:bg-blog-surface-container-high transition-all rounded-lg border border-blog-outline-variant/5" href="#">
                                        <div className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-blog-primary" style={{fontVariationSettings: "'FILL' 1"}}>link</span>
                                            <span className="font-headline font-semibold text-white">LinkedIn</span>
                                        </div>
                                        <span className="material-symbols-outlined text-blog-outline group-hover:text-blog-primary transition-colors">north_east</span>
                                    </a>
                                    <a className="group flex items-center justify-between p-6 bg-blog-surface-container-lowest hover:bg-blog-surface-container-high transition-all rounded-lg border border-blog-outline-variant/5" href="#">
                                        <div className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-blog-primary" style={{fontVariationSettings: "'FILL' 1"}}>code</span>
                                            <span className="font-headline font-semibold text-white">GitHub</span>
                                        </div>
                                        <span className="material-symbols-outlined text-blog-outline group-hover:text-blog-primary transition-colors">north_east</span>
                                    </a>
                                    <a className="group flex items-center justify-between p-6 bg-blog-surface-container-lowest hover:bg-blog-surface-container-high transition-all rounded-lg border border-blog-outline-variant/5" href="#">
                                        <div className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-blog-primary" style={{fontVariationSettings: "'FILL' 1"}}>flutter_dash</span>
                                            <span className="font-headline font-semibold text-white">Twitter</span>
                                        </div>
                                        <span className="material-symbols-outlined text-blog-outline group-hover:text-blog-primary transition-colors">north_east</span>
                                    </a>
                                </div>
                            </div>

                            {/* Office Decoration */}
                            <div className="relative group aspect-square overflow-hidden rounded-xl">
                                <img className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPOAIiSjjKLXtda3h712GjE3GTebxcBdveSE0YH84wU4dA0y3cCpjFsEACGYpAcORI_P1w7SDZv1By7dDNCmFuBoNyONM_DyfjAY7r97Q-fwOVyxye25n4yqhsxC9dt1yoH1skBGK3AU66NrErYG083bv0OjGyNjz8I3APy7WxtqXJMU7X3TKZAkEe9isJuWCnHBwkdBVzLkX7-DazV8FjVmwM2CxBTR6ctpCiIII2LvijZtJMADXXxJHwfi0LYEBL_ptn_Dp0Sg" alt="Office"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-blog-background via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-8 left-8">
                                    <p className="font-headline font-bold text-xl text-white">Located in the Cloud</p>
                                    <p className="text-blog-on-surface-variant text-sm">Operating Globally • PST Timezone</p>
                                </div>
                            </div>
                        </motion.aside>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-[#0E0E0E] w-full py-12 border-t border-[#3E484F]/15">
                    <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="font-headline font-black text-white text-lg tracking-tight uppercase">OBSIDIAN SKY</span>
                            <p className="font-body text-sm text-[#BDC8D1]">© 2024 Obsidian Sky. All rights reserved.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8">
                            <a className="font-body text-sm text-[#BDC8D1] hover:text-sky-400 underline decoration-sky-400/30 underline-offset-4 transition-all" href="#">Privacy Policy</a>
                            <a className="font-body text-sm text-[#BDC8D1] hover:text-sky-400 underline decoration-sky-400/30 underline-offset-4 transition-all" href="#">Terms of Service</a>
                            <a className="font-body text-sm text-[#BDC8D1] hover:text-sky-400 underline decoration-sky-400/30 underline-offset-4 transition-all" href="#">RSS Feed</a>
                            <a className="font-body text-sm text-[#BDC8D1] hover:text-sky-400 underline decoration-sky-400/30 underline-offset-4 transition-all" href="#">Github</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
