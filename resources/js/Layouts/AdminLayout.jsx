import { Link, usePage } from '@inertiajs/react';

export default function AdminLayout({ children }) {
    const { url } = usePage();

    const isActive = (path) => url.startsWith(path);

    return (
        <div className="bg-[#0A0A0A] overflow-hidden h-screen text-[#e5e2e1] font-body">
            <style>{`
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
                }
                /* Custom scrollbar for webkit */
                ::-webkit-scrollbar { width: 4px; }
                ::-webkit-scrollbar-track { background: #0A0A0A; }
                ::-webkit-scrollbar-thumb { background: #2A2A2A; border-radius: 10px; }
            `}</style>

            {/* TopNavBar Shell */}
            <header className="fixed top-0 w-full z-50 bg-zinc-900/70 backdrop-blur-xl shadow-2xl shadow-black/60 flex justify-between items-center px-8 py-4">
                <div className="flex items-center gap-8">
                    <span className="text-xl font-bold tracking-tighter text-white font-headline">The Digital Curator</span>
                    <div className="hidden md:flex items-center space-x-6">
                        <nav className="flex items-center gap-6">
                            <a className="text-sky-400 font-bold transition-colors duration-200 font-headline tracking-tight" href="/admin/dashboard">Dashboard</a>
                            <a className="text-zinc-400 hover:text-sky-300 transition-colors duration-200 font-headline tracking-tight" href="/">View Site</a>
                        </nav>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <span className="material-symbols-outlined text-zinc-400 group-hover:text-white cursor-pointer transition-colors" data-icon="notifications">notifications</span>
                        <span className="absolute top-0 right-0 w-2 h-2 bg-sky-400 rounded-full"></span>
                    </div>
                    <span className="material-symbols-outlined text-zinc-400 hover:text-white cursor-pointer transition-colors" data-icon="settings">settings</span>
                    <div className="h-8 w-8 rounded-full overflow-hidden border border-zinc-800 ml-2 active:scale-95 transition-transform cursor-pointer">
                        <img alt="User profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-3XL2I7Nf-R0JQz4mo52cjGnFfIhLzem0rWxVhtG-oGAyndUYwRv0zHGuowruQ0Gz61T88mzY6If6rl5u8u2gTf0e4QhgK19cb1mGm4KEeQVZ4ktfxI6pssRQdQ2NFtWwSVwxh0MaR0_faQQtJJjZJCDKEpgrYsFkIxIUMs5PxX-LcuGqtox2f5xOBv1_B2Gwx5jFxuY5bMO5xwjHwA6tezn4bsZ13EbyTnjAerhh7Dp5VyeATVTO2-hpk0iFgHUnuLJvX4ilAA"/>
                    </div>
                </div>
            </header>

            <div className="flex h-screen pt-16">
                {/* SideNavBar Shell */}
                <aside className="hidden md:flex flex-col h-full w-64 bg-zinc-950 border-r border-zinc-800/20 py-6">
                    <div className="px-6 py-8">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800/50">
                                <img alt="Admin Avatar" className="w-full h-full object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6M2gZNcCZiGfBsT0PlaNwBYlfXDYG07dBnBI4ia8l3KGkasrKFPwaSwZs_hdWobwbegof-yTy8_hpeIVPrMzxdrKxqxUg5df4wRrVjihcnNXU5efCaInBC7nwihvxQz8lBvfvmHe1mah9DEHZBupO3zS2nXJZFG7a1l0bdANvL3YKqQI0kVg8vkp-6_VwEyq292hhb_SHg9S-Wae5-oM8hwn7rLUp0Yz7MFlSnJvIh0SQh1BW0IZLbUX-Xdm4EfPaxSNB8n5r0w"/>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm leading-tight">Editorial Suite</h3>
                                <p className="text-[10px] text-zinc-500 font-headline uppercase tracking-widest">System Administrator</p>
                            </div>
                        </div>
                    </div>

                    <nav className="flex-grow space-y-1 mt-4">
                        <Link href="/admin/dashboard" className={`group cursor-pointer flex items-center px-6 py-3 transition-all duration-300 ${isActive('/admin/dashboard') ? 'text-sky-400 border-r-2 border-sky-400 bg-zinc-900/50' : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900'}`}>
                            <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="dashboard">dashboard</span>
                            <span className="font-headline uppercase tracking-widest text-[10px]">Dashboard</span>
                        </Link>
                        <Link href="/admin/posts" className={`group cursor-pointer flex items-center px-6 py-3 transition-all duration-300 ${isActive('/admin/posts') ? 'text-sky-400 border-r-2 border-sky-400 bg-zinc-900/50' : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900'}`}>
                            <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="edit_note">edit_note</span>
                            <span className="font-headline uppercase tracking-widest text-[10px]">Posts</span>
                        </Link>
                        <Link href="/admin/projects" className={`group cursor-pointer flex items-center px-6 py-3 transition-all duration-300 ${isActive('/admin/projects') ? 'text-sky-400 border-r-2 border-sky-400 bg-zinc-900/50' : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900'}`}>
                            <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="rocket_launch">rocket_launch</span>
                            <span className="font-headline uppercase tracking-widest text-[10px]">Projects</span>
                        </Link>
                        <Link href="/admin/categories" className={`group cursor-pointer flex items-center px-6 py-3 transition-all duration-300 ${isActive('/admin/categories') ? 'text-sky-400 border-r-2 border-sky-400 bg-zinc-900/50' : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900'}`}>
                            <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="category">category</span>
                            <span className="font-headline uppercase tracking-widest text-[10px]">Categories</span>
                        </Link>
                        <Link href="/admin/settings" className={`group cursor-pointer flex items-center px-6 py-3 transition-all duration-300 ${isActive('/admin/settings') ? 'text-sky-400 border-r-2 border-sky-400 bg-zinc-900/50' : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900'}`}>
                            <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="settings">settings</span>
                            <span className="font-headline uppercase tracking-widest text-[10px]">Settings</span>
                        </Link>
                    </nav>

                    <div className="px-6 py-8 mt-auto border-t border-zinc-900/50">
                        <button className="w-full py-3 bg-gradient-to-br from-blog-primary to-blog-primary-container text-blog-on-primary-fixed rounded-md font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-transform">
                            <span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                            New Post
                        </button>
                        <Link href="/" className="group cursor-pointer flex items-center mt-6 text-zinc-500 hover:text-blog-error transition-all duration-300">
                            <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="logout">logout</span>
                            <span className="font-headline uppercase tracking-widest text-[10px]">Logout</span>
                        </Link>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto bg-[#0A0A0A] px-8 py-12">
                    {children}

                    {/* Footer Meta */}
                    <footer className="mt-24 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-8">
                            <p className="text-xs text-blog-on-surface-variant font-label">© 2026 The Digital Curator</p>
                            <nav className="flex gap-6">
                                <Link className="text-xs text-blog-on-surface-variant hover:text-white transition-colors" href="/admin/dashboard">System</Link>
                                <Link className="text-xs text-blog-on-surface-variant hover:text-white transition-colors" href="/admin/settings">Terms</Link>
                            </nav>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-headline uppercase tracking-widest text-zinc-500">System Status</span>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span className="text-[10px] font-headline uppercase tracking-widest text-zinc-300">All Nodes Active</span>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
}
