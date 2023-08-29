import React from 'react';
import MainLayout from '../layouts/MainLayout';
import PostPreview from '../components/PostPreview';
import Stack from 'react-bootstrap/Stack';

function BlogPage()
{
    //Set the post count - POSTS MUST BE NAMED post#.md
    const recipeCount = 1;
    const recipes = Array.from(Array(recipeCount).keys()).map(i => `post${i + 1}.md`);

    return (
        <MainLayout>
            <Stack gap={3}>
                {recipes.map((recipe, i) => <PostPreview key={i} fileName={recipe} />)}
            </Stack>
        </MainLayout>
    );
}

export default BlogPage;