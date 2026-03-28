import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { LayoutDashboard, FileText, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({ children }) {
    const { url } = usePage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Posts', href: '/posts', icon: FileText },
    ];

    const NavLinks = () => (
        <>
            {navItems.map((item) => {
                const isActive = url.startsWith(item.href);
                const Icon = item.icon;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                            isActive 
                            ? 'bg-primary text-primary-foreground' 
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                    >
                        <Icon className="h-5 w-5" />
                        {item.name}
                    </Link>
                );
            })}
        </>
    );

    return (
        <div className="flex min-h-screen w-full flex-col bg-background md:flex-row">
            {/* Mobile Header */}
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 md:hidden">
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="md:hidden" 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
                <div className="flex w-full justify-between items-center">
                    <span className="font-semibold text-lg tracking-tight">MyApp</span>
                    <Button variant="ghost" size="icon">
                        <User className="h-5 w-5" />
                    </Button>
                </div>
            </header>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar (Desktop & Mobile) */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 border-r bg-card transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex h-14 items-center justify-between border-b px-4 md:h-16">
                    <Link href="/dashboard" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
                        <LayoutDashboard className="h-6 w-6 text-primary" />
                        <span>MyApp</span>
                    </Link>
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </div>
                <div className="flex-1 overflow-auto py-4">
                    <nav className="grid gap-2 px-4">
                        <NavLinks />
                    </nav>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col p-4 md:p-8 overflow-y-auto">
                {/* Desktop Topbar */}
                <div className="hidden md:flex justify-end items-center mb-6">
                    <Button variant="ghost" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>Profile</span>
                    </Button>
                </div>
                {children}
            </main>
        </div>
    );
}
