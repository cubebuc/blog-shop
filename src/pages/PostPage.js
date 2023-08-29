import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import MainLayout from '../layouts/MainLayout';
import rehypeRaw from 'rehype-raw';

function PostPage({ fileName })
{
    const [recipe, setRecipe] = useState('Loading...');

    useEffect(() =>
    {
        import(`../resources/${fileName}`)
            .then(res => 
            {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setRecipe(res))
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    }, [fileName]);

    return (
        <MainLayout>
            <Markdown rehypePlugins={[rehypeRaw]}>{recipe}</Markdown>
        </MainLayout>
    );
}

export default PostPage;