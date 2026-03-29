import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Projects() {
    return (
        <AdminLayout>
            <Head title="Projects | Editorial Suite" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                <div>
                    <h1 className="text-white font-headline text-4xl font-extrabold tracking-tighter">Project Portfolio</h1>
                    <p className="text-zinc-400 mt-2 font-body text-sm">Showcase your finest digital creations & case studies.</p>
                </div>
                <button className="bg-gradient-to-br from-blog-primary to-blog-primary-container text-blog-on-primary-fixed px-6 py-3 rounded-lg font-bold text-sm tracking-wide flex items-center gap-2 active:scale-95 transition-transform hover:shadow-lg hover:shadow-sky-400/20">
                    <span className="material-symbols-outlined">add</span>
                    New Project
                </button>
            </div>

            {/* Grid display for projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Project Card 1 */}
                <div className="group bg-blog-surface-container-low border border-zinc-800/80 hover:border-sky-400/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-sky-900/10 flex flex-col">
                    <div className="relative aspect-video overflow-hidden bg-zinc-900">
                        <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgRmkDd4HsKtV40qTRKRltQ1VjC5RBIdlEkxpZPPb3zsF-PkUoAd1zi37oFAMSyJx4CwuWvZ-szvYmszUd0eSJG-tySjypznLKO1Gs4xiDCgY30ziTR_Yhq3czrbZ37oMnH3HRAF6JB_vyH3ay-1ARUcekFSZnpMnJ62aaV76ZxKI8x3iDTo701IFWwaoUTFyFMqcMEzSQNcYBP1FtM1yCuc2g29qVr8xHiJ-TFmQROnvqI18Sw7d6v2Oa-HIRoBhbpORjUj5ggg" alt="Project Thumbnail" />
                        <div className="absolute top-3 left-3 flex gap-2">
                            <span className="bg-zinc-950/80 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1 rounded border border-zinc-800">Featured</span>
                            <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded border border-emerald-500/30">Live</span>
                        </div>
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="w-8 h-8 rounded bg-zinc-950/80 backdrop-blur text-white flex items-center justify-center hover:bg-sky-500 hover:text-zinc-950 transition-colors">
                                <span className="material-symbols-outlined text-[16px]">edit</span>
                            </button>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-headline font-bold text-white group-hover:text-sky-400 transition-colors">Nexus OS Redesign</h3>
                            <button className="text-zinc-600 hover:text-zinc-300">
                                <span className="material-symbols-outlined text-[20px]">more_vert</span>
                            </button>
                        </div>
                        <p className="text-sm text-zinc-400 mb-6 line-clamp-2">A conceptual redesign of mobile operating systems prioritizing mindfulness over continuous engagement.</p>
                        
                        <div className="mt-auto pt-4 border-t border-zinc-800/50 flex justify-between items-center">
                            <div className="flex gap-2">
                                <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">UI/UX</span>
                                <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">React</span>
                            </div>
                            <span className="text-xs text-zinc-600 font-label uppercase tracking-wider">Aug 2023</span>
                        </div>
                    </div>
                </div>

                {/* Project Card 2 */}
                <div className="group bg-blog-surface-container-low border border-zinc-800/80 hover:border-sky-400/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-sky-900/10 flex flex-col opacity-60 hover:opacity-100">
                    <div className="relative aspect-video overflow-hidden bg-zinc-900 flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl text-zinc-800">image_not_supported</span>
                        <div className="absolute top-3 left-3 flex gap-2">
                            <span className="bg-amber-500/20 text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded border border-amber-500/30">Draft</span>
                        </div>
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="w-8 h-8 rounded bg-zinc-950/80 backdrop-blur text-white flex items-center justify-center hover:bg-sky-500 hover:text-zinc-950 transition-colors">
                                <span className="material-symbols-outlined text-[16px]">edit</span>
                            </button>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-headline font-bold text-white group-hover:text-sky-400 transition-colors">Vortex Protocol Brand</h3>
                            <button className="text-zinc-600 hover:text-zinc-300">
                                <span className="material-symbols-outlined text-[20px]">more_vert</span>
                            </button>
                        </div>
                        <p className="text-sm text-zinc-400 mb-6 line-clamp-2">Complete brand identity for a new decentralized finance protocol.</p>
                        
                        <div className="mt-auto pt-4 border-t border-zinc-800/50 flex justify-between items-center">
                            <div className="flex gap-2">
                                <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">Branding</span>
                            </div>
                            <span className="text-xs text-zinc-600 font-label uppercase tracking-wider">Last edit 2h</span>
                        </div>
                    </div>
                </div>

                {/* Add New Project Card */}
                <button className="group bg-transparent border-2 border-dashed border-zinc-800 hover:border-blog-primary/50 hover:bg-blog-primary/5 rounded-2xl overflow-hidden transition-all duration-500 flex flex-col items-center justify-center aspect-[4/3] md:aspect-auto">
                    <div className="w-16 h-16 rounded-full bg-zinc-900 group-hover:bg-blog-primary text-zinc-600 group-hover:text-blog-on-primary-fixed flex items-center justify-center transition-colors mb-4 duration-300">
                        <span className="material-symbols-outlined text-3xl">add</span>
                    </div>
                    <span className="text-white font-headline font-bold text-lg mb-1">Create Project</span>
                    <span className="text-zinc-500 text-sm">Upload a new case study</span>
                </button>

            </div>
        </AdminLayout>
    );
}
