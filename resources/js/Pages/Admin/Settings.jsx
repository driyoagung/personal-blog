import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Settings() {
    return (
        <AdminLayout>
            <Head title="Settings | The Digital Curator" />
            
            <div className="max-w-5xl mx-auto px-12 py-16 text-[#e5e2e1]">
                {/* Page Header */}
                <div className="mb-16">
                    <h2 className="text-5xl font-black text-white font-headline tracking-tighter mb-4">Editorial Settings</h2>
                    <p className="text-[#bdc8d1] text-lg max-w-2xl leading-relaxed">Manage your curatorial presence, site parameters, and security protocols through this centralized administrative interface.</p>
                </div>

                {/* Bento Layout Sections */}
                <div className="grid grid-cols-12 gap-8">
                    
                    {/* Section: Profile */}
                    <div className="col-span-12 lg:col-span-8 bg-[#1c1b1b] p-10 rounded-xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-10">
                                <div>
                                    <span className="text-[10px] text-[#8ed5ff] font-label tracking-[0.2em] uppercase block mb-2">Identity Control</span>
                                    <h3 className="text-2xl font-bold text-white font-headline">Public Profile</h3>
                                </div>
                                <button className="bg-gradient-to-br from-[#8ed5ff] to-[#38bdf8] text-[#001e2c] px-6 py-2 rounded-md font-bold text-sm hover:opacity-90 transition-opacity">
                                    Save Profile
                                </button>
                            </div>

                            <div className="flex flex-col md:flex-row gap-12">
                                <div className="flex-shrink-0">
                                    <div className="relative w-32 h-32 group/avatar cursor-pointer">
                                        <img alt="Profile" className="w-full h-full object-cover rounded-xl grayscale group-hover/avatar:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYJJYnkDhaHD6OrQ9n--Fw4DARrSvZY3wN4D_aqNaqW4xZs1NYwQ6expC-8r7fMJA4ziAfrjTk3DAviuLAnrf1S5XVd7led_Bmlo67dhZihmymzoYLJHTG1DH8SBLB30hc2moJjyxuhXzTvhpHx8RWzhToMCFtWwL-e07bLKcXd8coZsgusnUe1qEr9Sct1vwru8xbf7-kLCo2B7RGrGY4KChUmRSnCKShBapfYIg8qj9wLHXTSmfJRcp3IULxF8srncLLmHYO4A" />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity rounded-xl">
                                            <span className="material-symbols-outlined text-white text-3xl">photo_camera</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-grow space-y-8">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] text-[#87929a] font-label uppercase tracking-widest">Display Name</label>
                                            <input className="w-full bg-[#0e0e0e] border-none focus:ring-1 focus:ring-[#8ed5ff]/30 rounded-lg p-4 text-white text-sm" type="text" defaultValue="Julian Thorne" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] text-[#87929a] font-label uppercase tracking-widest">Professional Title</label>
                                            <input className="w-full bg-[#0e0e0e] border-none focus:ring-1 focus:ring-[#8ed5ff]/30 rounded-lg p-4 text-white text-sm" type="text" defaultValue="Senior Digital Curator" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-[#87929a] font-label uppercase tracking-widest">Biographical Sketch</label>
                                        <textarea className="w-full bg-[#0e0e0e] border-none focus:ring-1 focus:ring-[#8ed5ff]/30 rounded-lg p-4 text-white text-sm leading-relaxed resize-none" rows="4" defaultValue="Navigating the intersection of brutalist architecture and digital minimalism. Editorial lead for The Digital Curator since 2021."></textarea>
                                    </div>
                                    
                                    <div className="flex items-center justify-between p-4 bg-[#353534]/30 rounded-lg border border-[#3e484f]/10">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-[#8ed5ff]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                            <div>
                                                <p className="text-sm font-bold text-white">Verified Status</p>
                                                <p className="text-xs text-[#bdc8d1]">Display curator badge on profile</p>
                                            </div>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" defaultChecked />
                                            <div className="w-11 h-6 bg-[#353534] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8ed5ff]"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section: Security */}
                    <div className="col-span-12 lg:col-span-4 bg-[#2a2a2a] p-10 rounded-xl flex flex-col justify-between border border-[#3e484f]/5">
                        <div>
                            <span className="text-[10px] text-[#8ed5ff] font-label tracking-[0.2em] uppercase block mb-2">Protection</span>
                            <h3 className="text-2xl font-bold text-white font-headline mb-8">Access Security</h3>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] text-[#87929a] font-label uppercase tracking-widest">Current Password</label>
                                    <input className="w-full bg-[#0e0e0e] border-none focus:ring-1 focus:ring-[#8ed5ff]/30 rounded-lg p-4 text-white text-sm" placeholder="••••••••" type="password" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-[#87929a] font-label uppercase tracking-widest">New Password</label>
                                    <input className="w-full bg-[#0e0e0e] border-none focus:ring-1 focus:ring-[#8ed5ff]/30 rounded-lg p-4 text-white text-sm" placeholder="••••••••" type="password" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 space-y-4">
                            <button className="w-full py-3 border border-[#3e484f]/20 text-white font-bold text-sm rounded-md hover:bg-white hover:text-black transition-all">
                                Update Credentials
                            </button>
                            <p className="text-[10px] text-center text-[#bdc8d1] italic">Last changed 24 days ago</p>
                        </div>
                    </div>

                    {/* Section: Site Configuration */}
                    <div className="col-span-12 bg-[#0E0E0E] p-12 rounded-xl">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="w-full md:w-1/3">
                                <span className="text-[10px] text-[#8ed5ff] font-label tracking-[0.2em] uppercase block mb-2">Engine Settings</span>
                                <h3 className="text-3xl font-bold text-white font-headline mb-4">Site Configuration</h3>
                                <p className="text-[#bdc8d1] text-sm leading-relaxed">Adjust the core parameters of your publication, including brand identity and search engine optimization targets.</p>
                            </div>
                            
                            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                <div className="space-y-2">
                                    <label className="text-[10px] text-[#87929a] font-label uppercase tracking-widest">Publication Name</label>
                                    <input className="w-full bg-transparent border-b border-[#3e484f] focus:border-[#8ed5ff] transition-colors py-4 text-white font-headline text-lg focus:ring-0 outline-none" type="text" defaultValue="The Digital Curator" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-[#87929a] font-label uppercase tracking-widest">Primary Domain</label>
                                    <input className="w-full bg-transparent border-b border-[#3e484f] focus:border-[#8ed5ff] transition-colors py-4 text-white font-headline text-lg focus:ring-0 outline-none" type="text" defaultValue="curator.digital" />
                                </div>
                                <div className="col-span-full space-y-4">
                                    <label className="text-[10px] text-[#87929a] font-label uppercase tracking-widest">SEO Keywords</label>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-[#2a2a2a] rounded-full text-xs text-[#8ed5ff] flex items-center gap-2">Design <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span></span>
                                        <span className="px-3 py-1 bg-[#2a2a2a] rounded-full text-xs text-[#8ed5ff] flex items-center gap-2">Editorial <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span></span>
                                        <span className="px-3 py-1 bg-[#2a2a2a] rounded-full text-xs text-[#8ed5ff] flex items-center gap-2">Minimalism <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span></span>
                                        <span className="px-3 py-1 bg-[#2a2a2a] rounded-full text-xs text-[#8ed5ff] flex items-center gap-2">Tech <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span></span>
                                        <button className="px-3 py-1 border border-dashed border-[#3e484f] rounded-full text-xs text-[#bdc8d1] hover:text-white transition-colors">+ Add Keyword</button>
                                    </div>
                                </div>
                                <div className="col-span-full flex justify-end gap-4 mt-6">
                                    <button className="text-sm font-bold text-[#bdc8d1] hover:text-white transition-colors">Discard Changes</button>
                                    <button className="px-8 py-3 bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-[#8ed5ff] transition-colors">Apply Global Config</button>
                                </div>
                            </div>
                        </div>

                        {/* Footer-like task area */}
                        <div className="flex items-center justify-between py-12 border-t border-[#3e484f]/10 mt-8">
                            <div className="flex items-center gap-8">
                                <div>
                                    <p className="text-[10px] text-[#87929a] font-label uppercase tracking-widest mb-1">Current Version</p>
                                    <p className="text-sm font-bold text-white">v4.2.0-stable</p>
                                </div>
                                <div className="h-8 w-px bg-[#3e484f]/20"></div>
                                <div>
                                    <p className="text-[10px] text-[#87929a] font-label uppercase tracking-widest mb-1">Server Region</p>
                                    <p className="text-sm font-bold text-white">EU-Central-1</p>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-[#ffb4ab] text-sm font-bold hover:underline">
                                <span className="material-symbols-outlined text-sm">delete_forever</span>
                                Deactivate Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
