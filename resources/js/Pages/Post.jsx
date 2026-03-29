import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Navbar from '@/Components/Navbar';

export default function Post() {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <>
            <Head title="Article Detail | nameblog_" />
            <div className="font-body selection:bg-blog-primary/30 selection:text-blog-primary bg-[#131313] text-[#e5e2e1] min-h-screen">
                <style>{`
                    .material-symbols-outlined {
                        font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
                    }
                `}</style>

                <Navbar />

                {/* Main Content Canvas */}
                <main className="pt-32 pb-24">
                    {/* Hero Section */}
                    <motion.header 
                        className="max-w-4xl mx-auto px-6 mb-16 text-center"
                        initial="hidden" animate="visible" variants={fadeUpVariants}
                    >
                        <div className="inline-block mb-6 px-3 py-1 bg-blog-surface-container-low text-blog-primary text-[0.6875rem] font-bold tracking-[0.1em] uppercase rounded-sm">
                            Design Systems
                        </div>
                        <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-[-0.04em] text-white leading-tight mb-8">
                            The Architecture of Modern Minimalist Interfaces
                        </h1>
                        <div className="flex flex-wrap justify-center items-center gap-6 text-blog-on-surface-variant font-label text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-blog-surface-container-high flex items-center justify-center overflow-hidden">
                                    <img alt="Author" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj485OMNwAEBtzpeYWcZz9j2DLlWG7HR7YkFqNuExvmNnIQ1xV8aQgo0zB7bq4P_6dXW9Duy0FF7gOOgI7AYoG6K_U4TsfX5kNl1aHzapRHP7q3Upgnj3XHXQZfdHptFo9vKDI-4CYWXGCmmUMpE1EGXPdS6RIDaLwic4QYinQcvParV4phGb2viewLGQ5iKuiLnXrPpDshS9PG__dkcgxXJH4479oQ5Otgw31bseNvToHgYFZS80W9poDqAJbyCoI-qDkKzJwVQ" />
                                </span>
                                <span className="text-white font-semibold">Elias Thorne</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">calendar_today</span>
                                <span>October 24, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">schedule</span>
                                <span>12 min read</span>
                            </div>
                        </div>
                    </motion.header>

                    {/* Featured Image */}
                    <motion.div 
                        className="max-w-6xl mx-auto px-6 mb-20"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="aspect-[21/9] rounded-xl overflow-hidden bg-blog-surface-container-low">
                            <img alt="Minimal workspace" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRaO1M0-n8sbZIWqNMqRCFwCQyMe19W9mPMDmNOio9bWnOHSlj2_6lOzbnrJHvk-9N6xepGwmyuBApfCL7U_y11bFLZlPUDTR2d1fEiVxdbW5S-By930LfT73KJhTdot5aKvNBCBaNS8vg4i6R3prTAWhpagT0i86lWp41j70H6KIa683yHrjwzDPRuLhVOfAZxnc0WWM82njfzQW2CjoS2rdUTFndFOOvzStut2kojRUekhNBzP6aInOVZvKJ5KilVAcwPpum0g" />
                        </div>
                    </motion.div>

                    {/* Article Body */}
                    <motion.article 
                        className="max-w-3xl mx-auto px-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUpVariants}
                    >
                        <div className="space-y-8 font-headline text-lg leading-[1.8] text-blog-on-surface-variant">
                            <p className="first-letter:text-5xl first-letter:font-black first-letter:text-blog-primary first-letter:mr-3 first-letter:float-left">
                                In the evolving landscape of digital products, the philosophy of "less is more" has transitioned from a stylistic choice to a structural necessity. As cognitive load increases across our daily interactions, the role of the designer shifts toward that of a curator—someone who carefully selects only what is essential.
                            </p>
                            <h2 className="text-2xl font-bold text-white tracking-tight pt-8">The Weight of White Space</h2>
                            <p>
                                Negative space is often misunderstood as an absence of content. In reality, it is a pressurized container that holds the interface together. Within a dark mode environment, this space becomes even more critical. It prevents the "halation" effect where high-contrast text appears to bleed into the darkness.
                            </p>
                            <div className="my-12 p-8 bg-blog-surface-container-lowest rounded-xl border-l-4 border-blog-primary italic text-xl text-white font-medium">
                                "Design is not just what it looks like and feels like. Design is how it works through the silence between the pixels."
                            </div>
                            <p>
                                When we remove boundaries—the 1px lines and boxes that traditionally define our layouts—we rely on tonal shifts. This creates a more organic, fluid experience that mimics the way light interacts with physical surfaces in the real world.
                            </p>
                            <figure className="my-12 space-y-4">
                                <div className="aspect-video rounded-xl overflow-hidden bg-blog-surface-container-low">
                                    <img alt="Abstract light" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWYC13INOTtoJgeHYW_UPDFxPh9MNKgT-fQ71upACtKFoxmqqu30IPvQ_reH2zr41SGamk50gYRgAPRYhqFTwHVIXYTV3ffbq4T9RZ-bWBQr5fwJZ_Dn0ucra1IRhqlro-HjhnWx7r4jCEQXh1sohdDrb4n7uDEozKNZtthUp-BSY6Dn9S8Mswoa8Dxdi2hPdCgH9bFyfnzcqnol36-AoBAltiaNxhUhVk4WSEJUBAnhNgJbt-jtz4Hy7sbRe-yEjlrCyYzQQ22Q" />
                                </div>
                                <figcaption className="text-xs text-center uppercase tracking-widest text-blog-outline">Fig 01. Tonal layering vs structural lines</figcaption>
                            </figure>
                            <h2 className="text-2xl font-bold text-white tracking-tight pt-8">Hierarchy Through Luminance</h2>
                            <p>
                                In dark mode, hierarchy isn't just about size; it's about brightness. The most critical information should be the "brightest" element on the page. Our primary sky-blue accent acts as a focal point, a beacon for the user's attention. Use it sparingly to maintain its power.
                            </p>
                        </div>

                        {/* Share / Save Section */}
                        <div className="mt-20 py-10 border-t border-blog-outline-variant/15 flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-blog-surface-container-high hover:bg-blog-surface-container-highest transition-colors text-white font-label text-sm">
                                    <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
                                    <span>248</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-blog-surface-container-high hover:bg-blog-surface-container-highest transition-colors text-white font-label text-sm">
                                    <span className="material-symbols-outlined text-lg">bookmark</span>
                                    <span>Save</span>
                                </button>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xs uppercase tracking-widest text-blog-outline font-bold">Share this article</span>
                                <div className="flex gap-2">
                                    <a className="w-10 h-10 flex items-center justify-center rounded-full bg-blog-surface-container-low hover:text-blog-primary transition-colors" href="#">
                                        <span className="material-symbols-outlined">share</span>
                                    </a>
                                    <a className="w-10 h-10 flex items-center justify-center rounded-full bg-blog-surface-container-low hover:text-blog-primary transition-colors" href="#">
                                        <span className="material-symbols-outlined">link</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Author Card */}
                        <div className="mt-12 p-8 bg-blog-surface-container-low rounded-xl flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                            <img alt="Elias Thorne" className="w-24 h-24 rounded-full bg-blog-surface-container-high object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkfcp4DEZ2-dr8ywg9GUm9NosxFqdWd2Moe7Tt4bBHhyDidUu8Ob1-MhguBI37_zDZ995-d9pHGs0Ni-sYICmY7sWlmKZ6QxWwW_U0PjFT35DrTliYWNHZiLxlQeCM9pR1UT3D2yzkLy0XxIJUOuW3ZCRFWxQ9xWiCeGZaLW-pRO3uLDQdE6twYdOlziEPvrRcHU4IkYSM80c5uG--k6StuhCMbgqAGnVr17-WApwtme3fIXoN39xJpqMcBqXINLJeSJtMep1U4Q" />
                            <div className="flex-1">
                                <h4 className="text-xl font-headline font-bold text-white mb-2">Elias Thorne</h4>
                                <p className="text-blog-on-surface-variant text-sm leading-relaxed mb-4">
                                    A senior product designer and design systems architect focused on creating premium digital experiences. Elias has spent the last decade working with luxury brands to define their nocturnal digital presence.
                                </p>
                                <div className="flex justify-center md:justify-start gap-4">
                                    <a className="text-blog-primary text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4" href="#">Follow</a>
                                    <a className="text-blog-primary text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4" href="#">Read more</a>
                                </div>
                            </div>
                        </div>
                    </motion.article>

                    {/* Related Articles */}
                    <section className="max-w-7xl mx-auto px-8 mt-32">
                        <h3 className="text-2xl font-headline font-extrabold text-white mb-12 flex items-center gap-4">
                            Keep Reading
                            <span className="h-px flex-1 bg-blog-outline-variant/15"></span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Related 1 */}
                            <Link href="/article" className="group cursor-pointer block">
                                <div className="aspect-square mb-6 rounded-lg overflow-hidden bg-blog-surface-container-low">
                                    <img alt="Portrait photography" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPc7clnA_y71PdhRyS1TTvdX9m8yKJTOAGiPt1Foo3-mEvN3EBS11QN6EL_DzlJZxVbSEgMO4fYkIpDy999aRLTX0tB_SVmelMEEvaDRmSiFrjX8KhYTzJrzSoImKHb3VUfdop7hROuy4d--bIHYPUznrVjB3_NWB5m5Z58eerv2Yb4sbWiR0yM8-8onbtZ7cclyY22cWvTB6xFcFnESA0ztJcgSNJZtns2hRroPrSuU-gvxUXFSJcJrt8zxrHtMGMhkzDjRcrQA" />
                                </div>
                                <span className="text-[0.6875rem] font-bold text-blog-primary tracking-widest uppercase mb-3 block">Photography</span>
                                <h4 className="text-lg font-headline font-bold text-white group-hover:text-blog-primary transition-colors leading-snug">The Soul of Monochrome: Capturing Shadow</h4>
                            </Link>
                            {/* Related 2 */}
                            <Link href="/article" className="group cursor-pointer block">
                                <div className="aspect-square mb-6 rounded-lg overflow-hidden bg-blog-surface-container-low">
                                    <img alt="Architecture" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDslxhW6nnZ40WgcgRRC5bhbhLKeBlrkmlny_7YFW-Idn6PDr5ndYLR08qxhrvKeQivz-S059jvh3DR43KB1y7YCsudUk877ipiCwjG7nAz-N6jHGYDKvrR4aYLgBSS1eFuuL_yZBt-GcXCfej0DawEyJNKmk6bh3z4S_2JmcA3rZy5b6-f48b5AkzJHrtcQRbHavvN844AEb5GxmSqQd1WJE_sVKtjDdyO8fd0L-Cyk6owUjNd0UZPAyDOnwszWdug5RiNzMD4bg" />
                                </div>
                                <span className="text-[0.6875rem] font-bold text-blog-primary tracking-widest uppercase mb-3 block">Brutalist Architecture</span>
                                <h4 className="text-lg font-headline font-bold text-white group-hover:text-blog-primary transition-colors leading-snug">Concrete and Light: A Study in Forms</h4>
                            </Link>
                            {/* Related 3 */}
                            <Link href="/article" className="group cursor-pointer block">
                                <div className="aspect-square mb-6 rounded-lg overflow-hidden bg-blog-surface-container-low">
                                    <img alt="Abstract art" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi6bPxyc2zRSBrcjASCr3JBG-RD93ck0NrSX2CXAEQ1de5TVTiNESrbcNu6OTLiP70PVXLHG4HudXFOnstFd31b22KxBDbGaFW-aH9TPwZhVnVd2--M9YAObVuAbebsfXDlIkT1W_Y_s2SOV3aqnoong8fxEX8DLL712GVt5N0zH7QihjSkPCr24TbOXQomc7zEEfn42QkEMKJjzsov0PlzbQYM29VDdMb5bS8JLFbVHOkAFVmJjkL6RZA_kBuDhfA7pJx3GPgEQ" />
                                </div>
                                <span className="text-[0.6875rem] font-bold text-blog-primary tracking-widest uppercase mb-3 block">Curation</span>
                                <h4 className="text-lg font-headline font-bold text-white group-hover:text-blog-primary transition-colors leading-snug">The Art of the Edit: Why Most Apps Over-Explain</h4>
                            </Link>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-[#0E0E0E]">
                    <div className="w-full py-12 border-t border-[#3E484F]/15">
                        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
                            <div className="text-lg font-bold text-white font-headline">
                                nameblog_
                            </div>
                            <div className="font-body text-sm tracking-wide text-[#BDC8D1] text-center md:text-left">
                                © 2024 nameblog_. All rights reserved.
                            </div>
                            <div className="flex space-x-8">
                                <a className="text-[#BDC8D1] hover:text-white transition-colors underline decoration-[#38BDF8] decoration-2 underline-offset-4" href="#">Twitter</a>
                                <a className="text-[#BDC8D1] hover:text-white transition-colors underline decoration-[#38BDF8] decoration-2 underline-offset-4" href="#">GitHub</a>
                                <a className="text-[#BDC8D1] hover:text-white transition-colors underline decoration-[#38BDF8] decoration-2 underline-offset-4" href="#">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
