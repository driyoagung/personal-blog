import React, { useState } from 'react';
import { Link, usePage, Head, router } from '@inertiajs/react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { Plus, Edit2, Trash2, ArrowUpDown, Search } from 'lucide-react';

import DashboardLayout from '@/Layouts/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Index = () => {
    const { posts } = usePage().props;
    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");
    const [deletePostId, setDeletePostId] = useState(null);

    const columns = [
        {
            accessorKey: "id",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="-ml-4 h-8"
                    >
                        ID
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="font-medium text-muted-foreground">{row.getValue("id")}</div>,
        },
        {
            accessorKey: "title",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="-ml-4 h-8"
                    >
                        Title
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="font-semibold text-foreground">{row.getValue("title")}</div>,
        },
        {
            accessorKey: "content",
            header: "Content Preview",
            cell: ({ row }) => {
                const content = row.getValue("content") || "";
                return <div className="text-muted-foreground truncate max-w-[300px]">{content.length > 50 ? content.substring(0, 50) + "..." : content}</div>;
            },
        },
        {
            id: "actions",
            header: () => <div className="text-right">Actions</div>,
            cell: ({ row }) => {
                const post = row.original;
                return (
                    <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" asChild>
                            <Link href={`/posts/${post.id}/edit`}>
                                <Edit2 className="h-4 w-4 mr-1" /> Edit
                            </Link>
                        </Button>
                        <Button 
                            variant="destructive" 
                            size="sm" 
                            onClick={() => setDeletePostId(post.id)}
                        >
                            <Trash2 className="h-4 w-4 mr-1" /> Delete
                        </Button>
                    </div>
                )
            },
        },
    ];

    const table = useReactTable({
        data: posts,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        state: {
            sorting,
            globalFilter,
        },
    });

    return (
        <div className="container mx-auto p-4 md:p-8 mt-8">
            <Head title="Posts Management" />
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Posts Management</h1>
                    <p className="text-muted-foreground mt-1">Manage and view all published posts.</p>
                </div>
                <Button asChild>
                    <Link href="/posts/create">
                        <Plus className="mr-2 h-4 w-4" /> Create New
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Posts</CardTitle>
                    <CardDescription>A list of all posts with quick management actions.</CardDescription>
                </CardHeader>
                <CardContent>
                    
                    {/* Search / Filter Bar */}
                    <div className="flex items-center py-4">
                        <div className="relative w-full max-w-sm">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search all columns..."
                                value={globalFilter ?? ""}
                                onChange={(event) => setGlobalFilter(event.target.value)}
                                className="pl-8"
                            />
                        </div>
                    </div>

                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                </TableHead>
                                            )
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            data-state={row.getIsSelected() && "selected"}
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={columns.length} className="h-24 text-center">
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex items-center justify-end space-x-2 py-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Custom Delete Confirmation Modal */}
            {deletePostId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-background/80 backdrop-blur-sm">
                    <div className="relative w-full max-w-sm p-4 animate-in fade-in zoom-in-95 duration-200">
                        <div className="relative rounded-lg bg-card text-card-foreground shadow-lg border border-border">
                            <div className="p-6">
                                <h3 className="text-lg font-semibold tracking-tight">Delete Post</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Are you sure you want to delete this post? This action cannot be undone.
                                </p>
                                <div className="mt-6 flex justify-end gap-3">
                                    <Button variant="outline" onClick={() => setDeletePostId(null)}>Cancel</Button>
                                    <Button variant="destructive" onClick={() => {
                                        router.delete(`/posts/${deletePostId}`, {
                                            onSuccess: () => setDeletePostId(null)
                                        });
                                    }}>Delete</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

Index.layout = page => <DashboardLayout>{page}</DashboardLayout>;
export default Index;
