import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Categories() {
    return (
        <AdminLayout>
            <Head title="Categories | Editorial Suite" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                <div>
                    <h1 className="text-white font-headline text-4xl font-extrabold tracking-tighter">Taxonomy</h1>
                    <p className="text-zinc-400 mt-2 font-body text-sm">Organize your content structure and themes.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: Add Category Form */}
                <div className="md:col-span-1">
                    <div className="bg-blog-surface-container-low border border-zinc-800/80 rounded-2xl p-6 sticky top-24">
                        <h2 className="text-xl font-headline font-bold text-white mb-6">Create Category</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-[10px] font-headline uppercase tracking-widest text-zinc-500 mb-2">Category Name</label>
                                <input type="text" className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-2 text-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/50 transition-all font-medium" placeholder="E.g. Philosophy" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-headline uppercase tracking-widest text-zinc-500 mb-2">Slug</label>
                                <input type="text" className="w-full bg-zinc-950 border border-zinc-800 text-zinc-400 rounded-lg px-4 py-2 text-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/50 transition-all font-mono text-[13px]" placeholder="philosophy" />
                                <p className="text-zinc-600 text-[10px] mt-1">Leave empty to auto-generate.</p>
                            </div>
                            <div>
                                <label className="block text-[10px] font-headline uppercase tracking-widest text-zinc-500 mb-2">Description</label>
                                <textarea rows="4" className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-2 text-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/50 transition-all resize-none" placeholder="Optional description..."></textarea>
                            </div>
                            <button className="w-full bg-white text-zinc-950 font-bold text-xs uppercase tracking-widest py-3 rounded-lg hover:bg-sky-400 transition-colors mt-2 active:scale-95 transform">
                                Save Category
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Column: Categories List */}
                <div className="md:col-span-2">
                    <div className="bg-blog-surface-container-low border border-zinc-800/80 rounded-2xl overflow-hidden">
                        <div className="p-4 border-b border-zinc-800/80 bg-zinc-900/30 flex justify-between items-center">
                            <span className="text-xs font-bold text-zinc-300">Existing Taxonomy</span>
                            <div className="relative w-48">
                                <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-zinc-500 text-[16px]">search</span>
                                <input className="w-full bg-zinc-950 border border-zinc-800 text-white rounded pl-8 pr-3 py-1 text-xs focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/50" placeholder="Filter..." type="text"/>
                            </div>
                        </div>
                        <ul className="divide-y divide-zinc-800/50">
                            {/* Category Item */}
                            <li className="p-4 hover:bg-zinc-900/40 transition-colors group flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sky-400">
                                        <span className="material-symbols-outlined">memory</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm">Technology</h3>
                                        <p className="text-zinc-500 text-xs">/category/technology</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs text-zinc-400 bg-zinc-900 px-2 py-1 rounded">24 posts</span>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="w-8 h-8 flex items-center justify-center rounded bg-zinc-900 hover:bg-sky-500 hover:text-white text-zinc-400 transition-colors">
                                            <span className="material-symbols-outlined text-[16px]">edit</span>
                                        </button>
                                        <button className="w-8 h-8 flex items-center justify-center rounded bg-zinc-900 hover:bg-red-500 hover:text-white text-zinc-400 transition-colors">
                                            <span className="material-symbols-outlined text-[16px]">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </li>

                            {/* Category Item */}
                            <li className="p-4 hover:bg-zinc-900/40 transition-colors group flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sky-400">
                                        <span className="material-symbols-outlined">psychology</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm">Philosophy</h3>
                                        <p className="text-zinc-500 text-xs">/category/philosophy</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs text-zinc-400 bg-zinc-900 px-2 py-1 rounded">12 posts</span>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="w-8 h-8 flex items-center justify-center rounded bg-zinc-900 hover:bg-sky-500 hover:text-white text-zinc-400 transition-colors">
                                            <span className="material-symbols-outlined text-[16px]">edit</span>
                                        </button>
                                        <button className="w-8 h-8 flex items-center justify-center rounded bg-zinc-900 hover:bg-red-500 hover:text-white text-zinc-400 transition-colors">
                                            <span className="material-symbols-outlined text-[16px]">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </li>

                            {/* Category Item */}
                            <li className="p-4 hover:bg-zinc-900/40 transition-colors group flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sky-400">
                                        <span className="material-symbols-outlined">brush</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm">Design</h3>
                                        <p className="text-zinc-500 text-xs">/category/design</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs text-zinc-400 bg-zinc-900 px-2 py-1 rounded">18 posts</span>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="w-8 h-8 flex items-center justify-center rounded bg-zinc-900 hover:bg-sky-500 hover:text-white text-zinc-400 transition-colors">
                                            <span className="material-symbols-outlined text-[16px]">edit</span>
                                        </button>
                                        <button className="w-8 h-8 flex items-center justify-center rounded bg-zinc-900 hover:bg-red-500 hover:text-white text-zinc-400 transition-colors">
                                            <span className="material-symbols-outlined text-[16px]">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
