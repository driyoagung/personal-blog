import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Dashboard() {
    return (
        <AdminLayout>
            <Head title="Editorial Scope | The Digital Curator" />
            
            {/* Header Section */}
            <div className="flex justify-between items-end mb-12">
                <div>
                    <p className="text-sky-400 font-label text-sm font-semibold tracking-widest uppercase mb-2">Editorial Overview</p>
                    <h1 className="text-white font-headline text-5xl font-extrabold tracking-tighter">Curation Center</h1>
                </div>
                <div className="flex gap-4">
                    <div className="px-4 py-2 bg-blog-surface-container-low rounded-lg border border-blog-outline-variant/10 flex items-center gap-2">
                        <span className="material-symbols-outlined text-zinc-400 text-[18px]" data-icon="calendar_today">calendar_today</span>
                        <span className="text-sm text-zinc-200">October 2023</span>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                {/* Large Stats Card */}
                <div className="md:col-span-2 bg-blog-surface-container-low p-8 rounded-xl border border-blog-outline-variant/5 hover:border-sky-400/20 transition-all duration-500 group">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-sky-950/30 transition-colors">
                            <span className="material-symbols-outlined text-sky-400" data-icon="visibility">visibility</span>
                        </div>
                        <span className="text-sky-400 text-xs font-bold bg-sky-950/30 px-2 py-1 rounded">+12.4%</span>
                    </div>
                    <p className="text-blog-on-surface-variant text-sm font-label uppercase tracking-widest mb-1">Total Page Views</p>
                    <h2 className="text-white text-4xl font-headline font-bold">142,890</h2>
                    <div className="mt-8 h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-sky-400 w-3/4"></div>
                    </div>
                </div>

                {/* Small Stats Card 1 */}
                <div className="bg-blog-surface-container-lowest p-6 rounded-xl border border-blog-outline-variant/5">
                    <div className="p-2 bg-zinc-900 rounded-lg w-fit mb-4">
                        <span className="material-symbols-outlined text-zinc-400" data-icon="article">article</span>
                    </div>
                    <p className="text-blog-on-surface-variant text-[10px] font-label uppercase tracking-widest mb-1">Total Posts</p>
                    <h2 className="text-white text-2xl font-headline font-bold">1,402</h2>
                    <p className="text-zinc-500 text-xs mt-2">12 published this month</p>
                </div>

                {/* Small Stats Card 2 */}
                <div className="bg-blog-surface-container-lowest p-6 rounded-xl border border-blog-outline-variant/5">
                    <div className="p-2 bg-zinc-900 rounded-lg w-fit mb-4">
                        <span className="material-symbols-outlined text-zinc-400" data-icon="forum">forum</span>
                    </div>
                    <p className="text-blog-on-surface-variant text-[10px] font-label uppercase tracking-widest mb-1">Comments</p>
                    <h2 className="text-white text-2xl font-headline font-bold">842</h2>
                    <p className="text-sky-400 text-xs mt-2">24 pending review</p>
                </div>
            </div>

            {/* Content Section: Recent Posts Table */}
            <div className="bg-blog-surface-container-low rounded-xl overflow-hidden border border-blog-outline-variant/5">
                <div className="px-8 py-6 flex justify-between items-center border-b border-zinc-900/50">
                    <h3 className="text-white font-headline text-xl font-bold">Recent Entries</h3>
                    <div className="flex gap-2">
                        <Link href="/admin/posts" className="px-4 py-2 text-xs font-label text-zinc-400 hover:text-white transition-colors">View All</Link>
                        <button className="p-2 text-zinc-400 hover:text-white">
                            <span className="material-symbols-outlined text-[20px]" data-icon="filter_list">filter_list</span>
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-zinc-950/50">
                                <th className="px-8 py-4 text-[10px] font-headline uppercase tracking-widest text-zinc-500">Post Title</th>
                                <th className="px-8 py-4 text-[10px] font-headline uppercase tracking-widest text-zinc-500">Status</th>
                                <th className="px-8 py-4 text-[10px] font-headline uppercase tracking-widest text-zinc-500">Category</th>
                                <th className="px-8 py-4 text-[10px] font-headline uppercase tracking-widest text-zinc-500">Date</th>
                                <th className="px-8 py-4 text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-900/50">
                            <tr className="hover:bg-zinc-900/40 transition-colors group">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded bg-zinc-800 overflow-hidden flex-shrink-0 border border-zinc-700/50">
                                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAODyZCyK0UOu0PEGPcC8tS_2PMFilYvGbSlee_-aJwCuWx8fJPW0fx_Gqfi_9D1OJPPPWa3zwvCamP9NCesyoN64p1gYNubQgVIn8L9Lzw-06XH9EsdBW295Rb63pDp-QIiFHPtlx4JWdgbRk4sktUP0ic24KIdnLnEEhvqR_4Hxoq1-qhlhk6YuHJB0JF7W738BPnFJfWaC6qW7LCfo4wmL0IyVnlkVFKGrd8ZEv8Lud8hys3kvEX-lngUWi26xFQpAnKL0tsWQ" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium group-hover:text-sky-400 transition-colors">The Future of Generative Architecture</p>
                                            <p className="text-zinc-500 text-xs">8 min read • 4k views</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-950/30 text-emerald-400 border border-emerald-900/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                        Published
                                    </span>
                                </td>
                                <td className="px-8 py-6">
                                    <span className="text-zinc-400 text-sm">Technology</span>
                                </td>
                                <td className="px-8 py-6 text-zinc-500 text-sm">Oct 24, 2023</td>
                                <td className="px-8 py-6 text-right">
                                    <button className="p-2 text-zinc-600 hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[18px]" data-icon="more_vert">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-zinc-900/40 transition-colors group">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded bg-zinc-800 overflow-hidden flex-shrink-0 border border-zinc-700/50">
                                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgRmkDd4HsKtV40qTRKRltQ1VjC5RBIdlEkxpZPPb3zsF-PkUoAd1zi37oFAMSyJx4CwuWvZ-szvYmszUd0eSJG-tySjypznLKO1Gs4xiDCgY30ziTR_Yhq3czrbZ37oMnH3HRAF6JB_vyH3ay-1ARUcekFSZnpMnJ62aaV76ZxKI8x3iDTo701IFWwaoUTFyFMqcMEzSQNcYBP1FtM1yCuc2g29qVr8xHiJ-TFmQROnvqI18Sw7d6v2Oa-HIRoBhbpORjUj5ggg" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium group-hover:text-sky-400 transition-colors">Minimalism as a Creative Paradigm</p>
                                            <p className="text-zinc-500 text-xs">12 min read • 1.2k views</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-zinc-900 text-zinc-400 border border-zinc-800">
                                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                                        Draft
                                    </span>
                                </td>
                                <td className="px-8 py-6">
                                    <span className="text-zinc-400 text-sm">Philosophy</span>
                                </td>
                                <td className="px-8 py-6 text-zinc-500 text-sm">Oct 22, 2023</td>
                                <td className="px-8 py-6 text-right">
                                    <button className="p-2 text-zinc-600 hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[18px]" data-icon="more_vert">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
