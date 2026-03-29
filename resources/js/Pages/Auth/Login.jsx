import { Head } from '@inertiajs/react';

export default function Login() {
    return (
        <div className="min-h-screen bg-black text-[#e5e2e1] font-body flex items-center justify-center p-4 relative overflow-hidden">
            <style>{`
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
                }
            `}</style>
            <Head title="Login | The Digital Curator" />
            
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blog-primary/10 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blog-secondary-container/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
            </div>

            {/* Login Container */}
            <div className="w-full max-w-lg z-10 relative">
                {/* Header Sequence */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-blog-surface-container-low border border-zinc-800 rounded-2xl mb-6 shadow-2xl shadow-sky-900/10">
                        <span className="material-symbols-outlined text-4xl text-sky-400" data-icon="fingerprint">fingerprint</span>
                    </div>
                    <h1 className="text-4xl font-headline font-black text-white tracking-tighter mb-3">System Access</h1>
                    <p className="text-blog-on-surface-variant text-sm font-label uppercase tracking-widest max-w-xs mx-auto leading-relaxed">
                        Authenticate identity to enter the curation suite
                    </p>
                </div>

                {/* Main Card */}
                <div className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-900 rounded-3xl p-8 sm:p-10 shadow-2xl">
                    <form className="space-y-6">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-headline uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[14px]">mail</span>
                                Clearance ID (Email)
                            </label>
                            <div className="relative group">
                                <input 
                                    className="w-full bg-blog-surface-container-lowest border border-zinc-800 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition-all font-medium text-sm placeholder:text-zinc-700" 
                                    placeholder="curator@digital.sys" 
                                    type="email" 
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity">
                                    <div className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] font-headline uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[14px]">key</span>
                                    Access Code
                                </label>
                                <a className="text-[10px] font-headline uppercase tracking-widest text-sky-400 hover:text-sky-300 transition-colors" href="#">Override Reset</a>
                            </div>
                            <div className="relative">
                                <input 
                                    className="w-full bg-blog-surface-container-lowest border border-zinc-800 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition-all font-medium text-sm placeholder:text-zinc-700 font-mono tracking-widest" 
                                    placeholder="••••••••••••" 
                                    type="password" 
                                />
                                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">visibility_off</span>
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center gap-3 pt-2">
                            <div className="relative flex items-center">
                                <input className="peer appearance-none w-5 h-5 border-2 border-zinc-800 rounded-md bg-zinc-900 checked:bg-sky-400 checked:border-sky-400 transition-all cursor-pointer" id="remember" type="checkbox" />
                                <span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14px] text-zinc-900 opacity-0 peer-checked:opacity-100 pointer-events-none font-bold">check</span>
                            </div>
                            <label className="text-xs text-zinc-400 cursor-pointer select-none font-medium hover:text-zinc-300 transition-colors" htmlFor="remember">
                                Maintain connection status
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button className="w-full relative group overflow-hidden bg-white text-black rounded-xl py-4 font-bold text-sm uppercase tracking-[0.2em] transform transition-transform active:scale-[0.98]">
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    Initiate Sequence
                                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-sky-200 via-sky-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </form>
                </div>

                {/* Footer Security Badge */}
                <div className="mt-12 text-center flex flex-col items-center gap-2 opacity-50">
                    <div className="flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[14px] text-zinc-500">lock</span>
                        <span className="text-[10px] font-headline uppercase tracking-widest text-zinc-500">256-bit AES Encrypted Connection</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
