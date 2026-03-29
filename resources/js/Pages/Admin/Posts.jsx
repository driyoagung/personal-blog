import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Posts() {
    return (
        <AdminLayout>
            <Head title="Posts | Editorial Suite" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                <div>
                    <h1 className="text-white font-headline text-4xl font-extrabold tracking-tighter">Posts Management</h1>
                    <p className="text-zinc-400 mt-2 font-body text-sm">Curate and compose your editorial articles.</p>
                </div>
                <button className="bg-gradient-to-br from-blog-primary to-blog-primary-container text-blog-on-primary-fixed px-6 py-3 rounded-lg font-bold text-sm tracking-wide flex items-center gap-2 active:scale-95 transition-transform hover:shadow-lg hover:shadow-sky-400/20">
                    <span className="material-symbols-outlined">add</span>
                    Compose Draft
                </button>
            </div>

            {/* Filter Bar */}
            <div className="bg-blog-surface-container-low p-4 rounded-xl border border-blog-outline-variant/5 mb-6 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    <button className="px-4 py-2 bg-zinc-800 text-white text-xs font-bold rounded-lg border border-zinc-700 whitespace-nowrap">All Posts (1,402)</button>
                    <button className="px-4 py-2 bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/50 text-xs font-bold rounded-lg border border-transparent whitespace-nowrap transition-colors">Published (984)</button>
                    <button className="px-4 py-2 bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/50 text-xs font-bold rounded-lg border border-transparent whitespace-nowrap transition-colors">Drafts (418)</button>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-grow md:w-64">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-[18px]">search</span>
                        <input className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg pl-10 pr-4 py-2 text-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/50 transition-all placeholder:text-zinc-600" placeholder="Search entries..." type="text"/>
                    </div>
                </div>
            </div>

            {/* Posts Table */}
            <div className="bg-blog-surface-container-low rounded-xl border border-blog-outline-variant/5 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left whitespace-nowrap min-w-max">
                        <thead>
                            <tr className="bg-zinc-950/50 border-b border-zinc-900">
                                <th className="px-6 py-4 w-12 text-center">
                                    <input className="rounded border-zinc-800 bg-zinc-950 checked:bg-sky-400 text-sky-400 focus:ring-offset-zinc-950 focus:ring-sky-400/50 transition-colors" type="checkbox"/>
                                </th>
                                <th className="px-6 py-4 text-[10px] font-headline uppercase tracking-widest text-zinc-500">Title</th>
                                <th className="px-6 py-4 text-[10px] font-headline uppercase tracking-widest text-zinc-500">Author</th>
                                <th className="px-6 py-4 text-[10px] font-headline uppercase tracking-widest text-zinc-500">Category</th>
                                <th className="px-6 py-4 text-[10px] font-headline uppercase tracking-widest text-zinc-500">Status</th>
                                <th className="px-6 py-4 text-[10px] font-headline uppercase tracking-widest text-zinc-500">Date Logged</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-900/50">
                            <tr className="hover:bg-zinc-900/30 transition-colors group">
                                <td className="px-6 py-4 text-center">
                                    <input className="rounded border-zinc-800 bg-zinc-950 checked:bg-sky-400 text-sky-400 focus:ring-offset-zinc-950 focus:ring-sky-400/50 transition-colors" type="checkbox"/>
                                </td>
                                <td className="px-6 py-4 w-1/3">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded bg-zinc-800 overflow-hidden flex-shrink-0 border border-zinc-700/50">
                                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAODyZCyK0UOu0PEGPcC8tS_2PMFilYvGbSlee_-aJwCuWx8fJPW0fx_Gqfi_9D1OJPPPWa3zwvCamP9NCesyoN64p1gYNubQgVIn8L9Lzw-06XH9EsdBW295Rb63pDp-QIiFHPtlx4JWdgbRk4sktUP0ic24KIdnLnEEhvqR_4Hxoq1-qhlhk6YuHJB0JF7W738BPnFJfWaC6qW7LCfo4wmL0IyVnlkVFKGrd8ZEv8Lud8hys3kvEX-lngUWi26xFQpAnKL0tsWQ" />
                                        </div>
                                        <div>
                                            <a href="#" className="text-white font-medium group-hover:text-sky-400 transition-colors block text-sm">The Future of Generative Architecture</a>
                                            <div className="flex gap-2 text-zinc-600 text-[10px] mt-1 uppercase tracking-widest font-headline opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="hover:text-sky-300">Edit</button>
                                                <span>|</span>
                                                <button className="hover:text-red-400">Trash</button>
                                                <span>|</span>
                                                <button className="hover:text-white">Preview</button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-zinc-800 border-zinc-700 overflow-hidden">
                                          <img alt="Author" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6M2gZNcCZiGfBsT0PlaNwBYlfXDYG07dBnBI4ia8l3KGkasrKFPwaSwZs_hdWobwbegof-yTy8_hpeIVPrMzxdrKxqxUg5df4wRrVjihcnNXU5efCaInBC7nwihvxQz8lBvfvmHe1mah9DEHZBupO3zS2nXJZFG7a1l0bdANvL3YKqQI0kVg8vkp-6_VwEyq292hhb_SHg9S-Wae5-oM8hwn7rLUp0Yz7MFlSnJvIh0SQh1BW0IZLbUX-Xdm4EfPaxSNB8n5r0w"/>
                                        </div>
                                        <span className="text-zinc-300 text-sm">Julian T.</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-zinc-400 text-sm">Technology</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-950/30 text-emerald-400 border border-emerald-900/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                        Published
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-zinc-300 text-sm">Oct 24, 2023</div>
                                    <div className="text-zinc-600 text-xs">14:02 PM</div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 text-zinc-600 hover:text-white transition-colors bg-zinc-900 rounded opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined text-[18px]">more_horiz</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-zinc-900/30 transition-colors group">
                                <td className="px-6 py-4 text-center">
                                    <input className="rounded border-zinc-800 bg-zinc-950 checked:bg-sky-400 text-sky-400 focus:ring-offset-zinc-950 focus:ring-sky-400/50 transition-colors" type="checkbox"/>
                                </td>
                                <td className="px-6 py-4 w-1/3">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded bg-zinc-800 flex items-center justify-center flex-shrink-0 border border-dashed border-zinc-700/80 text-zinc-600">
                                            <span className="material-symbols-outlined">image_not_supported</span>
                                        </div>
                                        <div>
                                            <a href="#" className="text-zinc-300 font-medium group-hover:text-sky-400 transition-colors block text-sm">Minimalism as a Creative Paradigm...</a>
                                            <div className="flex gap-2 text-zinc-600 text-[10px] mt-1 uppercase tracking-widest font-headline opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="hover:text-sky-300">Edit</button>
                                                <span>|</span>
                                                <button className="hover:text-red-400">Trash</button>
                                                <span>|</span>
                                                <button className="hover:text-white">Preview</button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-sky-950 border border-sky-800 flex items-center justify-center text-[10px] font-bold text-sky-400">
                                            A
                                        </div>
                                        <span className="text-zinc-300 text-sm">Admin</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-zinc-400 text-sm">Philosophy</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-zinc-900 text-zinc-400 border border-zinc-800">
                                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                                        Draft
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-zinc-300 text-sm">Oct 22, 2023</div>
                                    <div className="text-zinc-600 text-xs">Last Edit: 12m ago</div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 text-zinc-600 hover:text-white transition-colors bg-zinc-900 rounded opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined text-[18px]">more_horiz</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-zinc-900 bg-zinc-950/30 flex items-center justify-between">
                    <p className="text-zinc-500 text-xs font-medium">Showing <span className="text-white font-bold">1-2</span> of <span className="text-white">1,402</span> entries</p>
                    <div className="flex gap-1">
                        <button className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center text-zinc-600 cursor-not-allowed">
                            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 rounded bg-sky-950/30 border border-sky-900/50 flex items-center justify-center text-sky-400 text-xs font-bold">1</button>
                        <button className="w-8 h-8 rounded hover:bg-zinc-900 flex items-center justify-center text-zinc-400 transition-colors text-xs font-bold">2</button>
                        <button className="w-8 h-8 rounded hover:bg-zinc-900 flex items-center justify-center text-zinc-400 transition-colors text-xs font-bold">3</button>
                        <span className="w-8 h-8 flex items-center justify-center text-zinc-600 text-xs">...</span>
                        <button className="w-8 h-8 rounded hover:bg-zinc-900 flex items-center justify-center text-zinc-400 transition-colors text-xs font-bold">71</button>
                        <button className="w-8 h-8 rounded hover:bg-zinc-900 flex items-center justify-center text-white transition-colors">
                            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
