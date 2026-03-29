import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Navbar from '@/Components/Navbar';

export default function Categories() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <>
            <Head title="Categories | OBSIDIAN SKY" />
            <div className="bg-blog-background text-blog-on-surface font-body selection:bg-blog-primary/30 min-h-screen">
                <style>{`
                    .material-symbols-outlined {
                        font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
                    }
                    .glass-nav {
                        background: rgba(19, 19, 19, 0.7);
                        backdrop-filter: blur(20px);
                    }
                `}</style>

                <Navbar />

                <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
                    {/* Header Section */}
                    <motion.header 
                        className="mb-24"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-blog-primary font-label text-[0.6875rem] uppercase tracking-[0.1em] font-bold mb-4 block">Archive</span>
                        <h1 className="text-white font-headline text-5xl md:text-7xl font-extrabold tracking-[-0.04em] mb-6">Explore by <span className="text-blog-primary">Topic</span></h1>
                        <p className="text-blog-on-surface-variant max-w-2xl text-lg leading-relaxed">
                            Dive deep into our curated collections of thought-leadership, technical deep-dives, and creative explorations. Every article is a step into the void of digital mastery.
                        </p>
                    </motion.header>

                    {/* Category Grid (Asymmetric Bento Style) */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-12 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        {/* Category Card 1: Large Featured */}
                        <motion.div variants={itemVariants} className="md:col-span-8 group relative overflow-hidden rounded-xl bg-blog-surface-container-low transition-all duration-500 hover:bg-blog-surface-container-high border border-blog-outline-variant/15">
                            <Link href="/article" className="block relative w-full h-full">
                                <div className="aspect-[16/9] md:aspect-auto md:h-full relative overflow-hidden">
                                    <img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMLCfAkKwgG6LnsuqNbh-NpACAbQC4WHmysKbJU-oX7Eau-xlZB8YeoNCNbfkCE3NysXkZxEimp4UqfjG8tUiYUz3O0T-_Cl3TepcAP8kdkPVo1DraookFQX0HrRhd47lVas6IgNxqDcq3kQb04x4o1vfo4OsvJAaBSz4Bq_BzSLEuKjv0KprMNI5rVkUlI3Fc-whNL9FtdS_aktctOiobGnSgG9uR993hb9bkBn-knPCwplquJk8OYJym2tFYCaAm3Piyzvmvlw" alt="Blockchain"/>
                                    <div className="absolute inset-0 bg-gradient-to-t from-blog-surface-container-lowest via-transparent to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="bg-blog-primary/10 text-blog-primary px-3 py-1 rounded-full text-[0.7rem] font-bold tracking-widest uppercase">24 Articles</span>
                                            <span className="material-symbols-outlined text-blog-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
                                        </div>
                                        <h3 className="text-white font-headline text-3xl md:text-5xl font-black tracking-tighter mb-4">Web3 &amp; Decentralization</h3>
                                        <p className="text-blog-on-surface-variant text-base md:text-lg max-w-xl">Architecting the future of the internet through trustless protocols and sovereign identity systems.</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Category Card 2: Medium */}
                        <motion.div variants={itemVariants} className="md:col-span-4 group p-8 rounded-xl bg-blog-surface-container-low hover:bg-blog-surface-container-high transition-all border border-blog-outline-variant/15 flex flex-col justify-between">
                            <Link href="/article" className="block cursor-pointer">
                                <div>
                                    <div className="w-12 h-12 rounded-lg bg-blog-surface-container-highest flex items-center justify-center mb-8">
                                        <span className="material-symbols-outlined text-blog-primary" style={{fontVariationSettings: "'FILL' 1"}}>architecture</span>
                                    </div>
                                    <h3 className="text-white font-headline text-2xl font-bold tracking-tight mb-3">System Design</h3>
                                    <p className="text-blog-on-surface-variant text-sm leading-relaxed mb-6">Patterns for scalable, resilient, and high-performance distributed architectures in the modern cloud era.</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-blog-primary font-label text-xs font-bold uppercase tracking-widest">12 Articles</span>
                                    <span className="text-white/20 font-headline text-4xl font-black italic select-none">02</span>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Category Card 3: Medium */}
                        <motion.div variants={itemVariants} className="md:col-span-4 group p-8 rounded-xl bg-blog-surface-container-low hover:bg-blog-surface-container-high transition-all border border-blog-outline-variant/15 flex flex-col justify-between">
                            <Link href="/article" className="block cursor-pointer">
                                <div>
                                    <div className="w-12 h-12 rounded-lg bg-blog-surface-container-highest flex items-center justify-center mb-8">
                                        <span className="material-symbols-outlined text-blog-primary" style={{fontVariationSettings: "'FILL' 1"}}>terminal</span>
                                    </div>
                                    <h3 className="text-white font-headline text-2xl font-bold tracking-tight mb-3">Engineering Ethics</h3>
                                    <p className="text-blog-on-surface-variant text-sm leading-relaxed mb-6">Exploring the moral implications of algorithmic bias, digital privacy, and automated decision making.</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-blog-primary font-label text-xs font-bold uppercase tracking-widest">08 Articles</span>
                                    <span className="text-white/20 font-headline text-4xl font-black italic select-none">03</span>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Category Card 4: Large Featured (Reversed Asymmetry) */}
                        <motion.div variants={itemVariants} className="md:col-span-8 group relative overflow-hidden rounded-xl bg-blog-surface-container-low transition-all duration-500 hover:bg-blog-surface-container-high border border-blog-outline-variant/15">
                            <Link href="/article" className="block relative w-full h-full">
                                <div className="aspect-[16/9] md:aspect-auto md:h-full relative overflow-hidden">
                                    <img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6P3tMgOpjVoUeZwAG6hP4aYxVohTKxTxnxCYh-xZqcBi8x4iGlg0NSgoJQB5aw0QE8A_yMMU5vbg_dje68_eE1RHBp5hf-ewFghdRRidLxFXkMTAJ9iC7VT3iWlDhWxAjJCXLGbGxmjCX5s8pIrrP6cEZCoarDctB_pMx9ndXkQ5s3WHNWo5-oXyzt0lnTucT8abyyfsKMHwTc0uesMMvPdEPLXzKIECnTxjMg3cRFg_UG7KbKnOlanoD603I-rXjQYI7sxVbWg" alt="AI"/>
                                    <div className="absolute inset-0 bg-gradient-to-t from-blog-surface-container-lowest via-transparent to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="bg-blog-primary/10 text-blog-primary px-3 py-1 rounded-full text-[0.7rem] font-bold tracking-widest uppercase">31 Articles</span>
                                            <span className="material-symbols-outlined text-blog-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
                                        </div>
                                        <h3 className="text-white font-headline text-3xl md:text-5xl font-black tracking-tighter mb-4">Artificial Intelligence</h3>
                                        <p className="text-blog-on-surface-variant text-base md:text-lg max-w-xl">Deep dives into LLMs, neural architectures, and the intersection of human creativity and machine logic.</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Small List Items (The Long Tail) */}
                        <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-3 group p-6 rounded-xl bg-blog-surface-container-low hover:bg-blog-surface-container-high transition-all border border-blog-outline-variant/15">
                            <span className="text-blog-primary font-label text-[0.6rem] font-bold tracking-widest uppercase mb-4 block">Hardware</span>
                            <h4 className="text-white font-headline text-xl font-bold mb-2 group-hover:text-blog-primary transition-colors">Quantum Computing</h4>
                            <p className="text-blog-on-surface-variant text-xs line-clamp-2">The frontier of computation beyond binary constraints.</p>
                            <div className="mt-6 pt-4 border-t border-blog-outline-variant/10 text-[0.65rem] text-blog-primary/60 font-bold uppercase">15 Articles</div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-3 group p-6 rounded-xl bg-blog-surface-container-low hover:bg-blog-surface-container-high transition-all border border-blog-outline-variant/15">
                            <span className="text-blog-primary font-label text-[0.6rem] font-bold tracking-widest uppercase mb-4 block">Visuals</span>
                            <h4 className="text-white font-headline text-xl font-bold mb-2 group-hover:text-blog-primary transition-colors">Generative Art</h4>
                            <p className="text-blog-on-surface-variant text-xs line-clamp-2">Where code meets canvas. Exploring procedural aesthetic systems.</p>
                            <div className="mt-6 pt-4 border-t border-blog-outline-variant/10 text-[0.65rem] text-blog-primary/60 font-bold uppercase">19 Articles</div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-3 group p-6 rounded-xl bg-blog-surface-container-low hover:bg-blog-surface-container-high transition-all border border-blog-outline-variant/15">
                            <span className="text-blog-primary font-label text-[0.6rem] font-bold tracking-widest uppercase mb-4 block">Productivity</span>
                            <h4 className="text-white font-headline text-xl font-bold mb-2 group-hover:text-blog-primary transition-colors">Digital Minimalism</h4>
                            <p className="text-blog-on-surface-variant text-xs line-clamp-2">Tools and philosophies for high-focus intentional living.</p>
                            <div className="mt-6 pt-4 border-t border-blog-outline-variant/10 text-[0.65rem] text-blog-primary/60 font-bold uppercase">06 Articles</div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-3 group p-6 rounded-xl bg-blog-surface-container-low hover:bg-blog-surface-container-high transition-all border border-blog-outline-variant/15">
                            <span className="text-blog-primary font-label text-[0.6rem] font-bold tracking-widest uppercase mb-4 block">Philosophy</span>
                            <h4 className="text-white font-headline text-xl font-bold mb-2 group-hover:text-blog-primary transition-colors">Cybernetics</h4>
                            <p className="text-blog-on-surface-variant text-xs line-clamp-2">The study of control and communication in humans and machines.</p>
                            <div className="mt-6 pt-4 border-t border-blog-outline-variant/10 text-[0.65rem] text-blog-primary/60 font-bold uppercase">11 Articles</div>
                        </motion.div>
                    </motion.div>

                    {/* Newsletter Section (Tonal Shift) */}
                    <motion.section 
                        className="mt-32 p-12 md:p-24 rounded-2xl bg-blog-surface-container-lowest text-center relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blog-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
                        <div className="relative z-10">
                            <h2 className="text-white font-headline text-4xl font-black tracking-tight mb-6">Stay at the <span className="text-blog-primary">Edge</span></h2>
                            <p className="text-blog-on-surface-variant max-w-xl mx-auto mb-10 text-lg leading-relaxed">
                                Join 12,000+ curators who receive our weekly deep-dives into the future of technology and philosophy.
                            </p>
                            <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                                <input className="flex-grow bg-blog-surface-container-low border-none focus:ring-1 focus:ring-blog-primary text-white py-4 px-6 rounded-md placeholder:text-blog-outline/40" placeholder="curator@obsidiansky.com" type="email"/>
                                <button className="bg-gradient-to-br from-blog-primary to-blog-primary-container text-blog-on-primary-fixed font-bold py-4 px-8 rounded-md transition-transform active:scale-95" type="button">
                                    Join
                                </button>
                            </form>
                        </div>
                    </motion.section>
                </main>

                {/* Footer */}
                <footer className="bg-[#0E0E0E] w-full py-12 border-t border-[#3E484F]/15">
                    <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto space-y-8 md:space-y-0">
                        <div className="flex flex-col items-center md:items-start space-y-4">
                            <span className="font-headline font-black text-white text-lg tracking-tighter">OBSIDIAN SKY</span>
                            <p className="font-body text-sm text-[#BDC8D1] opacity-80">© 2024 Obsidian Sky. All rights reserved.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8">
                            <a className="font-body text-sm text-[#BDC8D1] hover:text-sky-400 underline decoration-sky-400/30 underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
                            <a className="font-body text-sm text-[#BDC8D1] hover:text-sky-400 underline decoration-sky-400/30 underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Terms of Service</a>
                            <a className="font-body text-sm text-[#BDC8D1] hover:text-sky-400 underline decoration-sky-400/30 underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">RSS Feed</a>
                            <a className="font-body text-sm text-[#BDC8D1] hover:text-sky-400 underline decoration-sky-400/30 underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Github</a>
                        </div>
                        <div className="flex space-x-4">
                            <a className="w-10 h-10 rounded-full border border-blog-outline-variant/20 flex items-center justify-center hover:bg-blog-primary group transition-all" href="#">
                                <span className="material-symbols-outlined text-white text-lg group-hover:text-blog-on-primary-fixed">public</span>
                            </a>
                            <a className="w-10 h-10 rounded-full border border-blog-outline-variant/20 flex items-center justify-center hover:bg-blog-primary group transition-all" href="#">
                                <span className="material-symbols-outlined text-white text-lg group-hover:text-blog-on-primary-fixed">alternate_email</span>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
