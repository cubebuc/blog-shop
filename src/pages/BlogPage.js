import React from 'react';
import MainLayout from '../layouts/MainLayout';
import PostPreview from '../components/PostPreview';
import Stack from 'react-bootstrap/Stack';

function BlogPage()
{
    //Set the post count - POSTS MUST BE NAMED post#.md
    const postCount = 2;
    const posts = Array.from(Array(postCount).keys()).map(i => `post${i + 1}.md`);

    return (
        <MainLayout>
            <Stack gap={3}>
                {posts.map((post, i) => <PostPreview key={i} fileName={post} />)}
            </Stack>
        </MainLayout>
    );
}

export default BlogPage;;