import React from 'react';
import { Link, useForm, usePage, Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';

import DashboardLayout from '@/Layouts/DashboardLayout';

const Edit = () => {
    const { post: postRecord } = usePage().props;
    const { data, setData, put, processing, errors } = useForm({
        title: postRecord.title || '',
        content: postRecord.content || '',
    });

    const submit = (e) => {
        e.preventDefault();
        put(`/posts/${postRecord.id}`);
    };

    return (
        <div className="container mx-auto p-4 md:p-8 max-w-2xl mt-12">
            <Head title="Edit Post" />
            <div className="mb-6">
                <Button variant="ghost" asChild className="mb-4">
                    <Link href="/posts">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back to Posts
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Edit Post</CardTitle>
                    <CardDescription>Update the details of your existing post.</CardDescription>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                type="text"
                                placeholder="Enter an engaging title"
                                value={data.title}
                                onChange={e => setData('title', e.target.value)}
                            />
                            {errors.title && <p className="text-destructive text-sm font-medium">{errors.title}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="content">Content</Label>
                            <textarea
                                id="content"
                                className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Write your post content here..."
                                value={data.content}
                                onChange={e => setData('content', e.target.value)}
                            />
                            {errors.content && <p className="text-destructive text-sm font-medium">{errors.content}</p>}
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2">
                        <Button variant="outline" type="button" asChild>
                            <Link href="/posts">Cancel</Link>
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Updating...' : 'Update Post'}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

Edit.layout = page => <DashboardLayout>{page}</DashboardLayout>;
export default Edit;
