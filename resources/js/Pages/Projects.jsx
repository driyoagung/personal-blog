import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Navbar from '@/Components/Navbar';

export default function Projects() {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <>
            <Head title="Projects | OBSIDIAN SKY" />
            <div className="font-body selection:bg-blog-primary-container selection:text-blog-on-primary-fixed bg-[#131313] text-[#bdc8d1] min-h-screen">
                <style>{`
                    .material-symbols-outlined {
                        font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
                        vertical-align: middle;
                    }
                `}</style>
                
                <Navbar />

                <main className="pt-32 pb-24">
                    {/* Hero Section */}
                    <motion.section 
                        className="max-w-7xl mx-auto px-8 mb-24"
                        initial="hidden" animate="visible" variants={fadeUpVariants}
                    >
                        <div className="max-w-3xl">
                            <span className="text-blog-primary font-label text-[0.6875rem] uppercase tracking-[0.2em] mb-4 block">Archive 2024</span>
                            <h1 className="text-white font-headline text-6xl md:text-8xl font-extrabold tracking-[-0.04em] leading-[0.95] mb-8">
                                PROJECT ARCHIVE<span className="text-blog-primary-container">.</span>
                            </h1>
                            <p className="text-blog-on-surface-variant text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                                A curated selection of digital experiments and professional solutions designed with a focus on performance, aesthetics, and user intent.
                            </p>
                        </div>
                    </motion.section>

                    {/* Projects Bento Grid */}
                    <motion.section 
                        className="max-w-7xl mx-auto px-8"
                        initial="hidden" animate="visible" variants={containerVariants}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            {/* Large Featured Project */}
                            <motion.div variants={fadeUpVariants} className="md:col-span-8 group cursor-pointer">
                                <Link className="block" href="/article">
                                    <div className="relative overflow-hidden aspect-[16/9] mb-8 rounded-lg bg-blog-surface-container-low transition-all duration-500 group-hover:bg-blog-surface-container-high">
                                        <img alt="Digital Interface" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1SDn5hdcRN60TXkbNPXiwubCDgtFBlYQV6nmWiktpRWdz21yjU7DiddgeSde5XrsiYemPA8gFZH-UIBCxaAwtCmZlo-AbON86O0yTkz3HLCH2OfHMYHU2OAyHMi5ENlR8qV0s19x8dO4yN7dC9gfznasrOdz5X5iCjqWgFa4cYbuDvKAh4VBZw7VVRPWagsyRB8AmhLgt_q7n2mLUu5XpfV7CCotexRJQbB_0YaXPOTe6GQ7lI7YKTZ0k1zVSzQO6yGYXb3SdAQ"/>
                                        <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-blog-background to-transparent">
                                            <div className="flex gap-2 mb-4">
                                                <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-blog-surface-container-highest text-blog-primary border border-blog-primary/20 rounded-full">React</span>
                                                <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-blog-surface-container-highest text-blog-primary border border-blog-primary/20 rounded-full">TypeScript</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-headline text-3xl font-bold mb-3 group-hover:text-blog-primary transition-colors">NeuralNexus Dashboard</h3>
                                    <p className="text-blog-on-surface-variant text-lg mb-6 max-w-xl">A high-performance analytics engine for decentralized networks, featuring real-time data streaming and custom visualization layers.</p>
                                    <span className="inline-flex items-center text-blog-primary font-bold group/link">
                                        View Project 
                                        <span className="material-symbols-outlined ml-2 transition-transform group-hover/link:translate-x-1">arrow_right_alt</span>
                                    </span>
                                </Link>
                            </motion.div>

                            {/* Side Smaller Project */}
                            <motion.div variants={fadeUpVariants} className="md:col-span-4 group cursor-pointer">
                                <Link className="block" href="/article">
                                    <div className="relative overflow-hidden aspect-[4/5] mb-8 rounded-lg bg-blog-surface-container-low transition-all duration-500 group-hover:bg-blog-surface-container-high">
                                        <img alt="Mobile Application" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApc5jULQZyQz2aAoJDNASc62PJHdyY6BEYzogj-ZrTiucxfRpObcxa_v_OvwM9gVZTPSFADDe-nrlpxLn3hzMbYKdLgLJ_FpaMyOD4Z49V0pNEV02eY6Gfuhz7WaJ85-3tC-83WeSwZHToutjvuNQEhMxertXWAHS0kY0zd8LL-q9xda5JRkzCHW9P7pU_tQuHKW3MQ1pTS5EQL9cPPT3HvxIIc-5gcpROFLnvxE5i61r694Q9I9LY2PwqKiUxOy53yFxeaLkx6w"/>
                                    </div>
                                    <div className="flex gap-2 mb-4">
                                        <span className="text-[10px] font-bold tracking-widest uppercase text-blog-outline">iOS</span>
                                        <span className="text-[10px] font-bold tracking-widest uppercase text-blog-outline">Swift</span>
                                    </div>
                                    <h3 className="text-white font-headline text-2xl font-bold mb-3 group-hover:text-blog-primary transition-colors">Pulse Mobile</h3>
                                    <p className="text-blog-on-surface-variant text-base mb-6">Redefining health tracking with an obsidian-inspired interface and biometric integration.</p>
                                    <span className="inline-flex items-center text-blog-primary font-bold group/link">
                                        <span className="material-symbols-outlined">north_east</span>
                                    </span>
                                </Link>
                            </motion.div>

                            {/* Row 2: Symmetric but Spaced */}
                            <motion.div variants={fadeUpVariants} className="md:col-span-6 group cursor-pointer">
                                <Link className="block" href="/article">
                                    <div className="relative overflow-hidden aspect-[4/3] mb-8 rounded-lg bg-blog-surface-container-low transition-all duration-500 group-hover:bg-blog-surface-container-high">
                                        <img alt="E-commerce UI" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5HFPtAoe9cWFZK8h4tdKB18FLeDTOsJqEaYEQB-9gP_LAW-dDc4Hyn4JAPP_PAUJY1e4IlTKZBB-tk99fbLaFosILQJkrZeWt-OMXy7v81UkA_JyaQLtqtv292Zdo7LA0Oz27YXAI5_O4dH1r3Ke1QaeiKn3nZv1oBegRe0v6aXReGOdD5jVLvuvXZs4S99oYkpiXQW2X_ElOo_7Ek3lrcUYcRckU0lUtlsraey0aortkNt_d9G7LpWE3k9jrg8wFm4pHYXViOA"/>
                                    </div>
                                    <h3 className="text-white font-headline text-2xl font-bold mb-3 group-hover:text-blog-primary transition-colors">Vanguard Commerce</h3>
                                    <p className="text-blog-on-surface-variant text-base mb-4">A headless commerce solution for luxury brands looking to elevate their digital presence.</p>
                                    <div className="flex gap-4">
                                        <span className="text-[11px] text-blog-primary/70 font-medium">Next.js</span>
                                        <span className="text-[11px] text-blog-primary/70 font-medium">GraphQL</span>
                                        <span className="text-[11px] text-blog-primary/70 font-medium">Stripe</span>
                                    </div>
                                </Link>
                            </motion.div>

                            <motion.div variants={fadeUpVariants} className="md:col-span-6 group cursor-pointer">
                                <Link className="block" href="/article">
                                    <div className="relative overflow-hidden aspect-[4/3] mb-8 rounded-lg bg-blog-surface-container-low transition-all duration-500 group-hover:bg-blog-surface-container-high">
                                        <img alt="Cloud Systems" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHu_Jkz1812kEOZtCJMnPj1MUqYiiYX5Vqd1cOg26Ui6S3dpLkOibwlcMiQPT_RULMcy-6frEORwK3Wy0Zkw60Gocw_vXOfA_xLHWFrJeoPDc8i0U4SZsYDQOKexzuElQNVUXyRrKLdFAsLucoKArrHgWgkqJNWAEOGuLcCCEzvub2eYJUd_Rl5tLCjAWZSIq-XS7VLf8agBSN1HUXH_4YQWbYQICwlkvBodO22nIczNlqc6OYElUhPyiYms7Gh8k8OdWIYirdSA"/>
                                    </div>
                                    <h3 className="text-white font-headline text-2xl font-bold mb-3 group-hover:text-blog-primary transition-colors">Stratus Orchestrator</h3>
                                    <p className="text-blog-on-surface-variant text-base mb-4">DevOps automation platform managing multi-cloud environments through a unified CLI and GUI.</p>
                                    <div className="flex gap-4">
                                        <span className="text-[11px] text-blog-primary/70 font-medium">Go</span>
                                        <span className="text-[11px] text-blog-primary/70 font-medium">Kubernetes</span>
                                        <span className="text-[11px] text-blog-primary/70 font-medium">Terraform</span>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Newsletter / Contact CTA */}
                    <motion.section 
                        className="mt-48 max-w-7xl mx-auto px-8"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
                    >
                        <div className="bg-blog-surface-container-low p-12 md:p-24 rounded-lg flex flex-col md:flex-row justify-between items-center gap-12 border-b border-blog-primary-container/10">
                            <div className="text-center md:text-left">
                                <h2 className="text-white font-headline text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">HAVE A PROJECT IN MIND?</h2>
                                <p className="text-blog-on-surface-variant text-lg">Let's build the next digital benchmark together.</p>
                            </div>
                            <button className="bg-white text-blog-background font-headline font-bold px-12 py-5 text-lg rounded-md hover:bg-blog-primary-container hover:text-blog-on-primary-fixed transition-all active:scale-95 duration-200">
                                Get in Touch
                            </button>
                        </div>
                    </motion.section>
                </main>

                {/* Footer */}
                <footer className="bg-[#0E0E0E] w-full py-12 border-t border-[#3E484F]/15">
                    <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto">
                        <div className="mb-8 md:mb-0">
                            <span className="text-lg font-bold text-white font-headline">OBSIDIAN SKY</span>
                            <p className="text-[#BDC8D1] font-body text-sm tracking-wide mt-2">© 2024 Obsidian Sky. All rights reserved.</p>
                        </div>
                        <div className="flex items-center space-x-8 font-body text-sm tracking-wide text-[#BDC8D1]">
                            <a className="hover:text-white transition-colors underline decoration-[#38BDF8] decoration-2 underline-offset-4 opacity-80 hover:opacity-100" href="#">Twitter</a>
                            <a className="hover:text-white transition-colors underline decoration-[#38BDF8] decoration-2 underline-offset-4 opacity-80 hover:opacity-100" href="#">GitHub</a>
                            <a className="hover:text-white transition-colors underline decoration-[#38BDF8] decoration-2 underline-offset-4 opacity-80 hover:opacity-100" href="#">LinkedIn</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
