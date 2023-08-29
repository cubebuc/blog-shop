import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import ReactLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';

function PostPreview({ fileName })
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
        <ReactLink className='bg-info-subtle rounded p-3' as={Link} to={`/blog-shop/recipes/${fileName.substring(0, fileName.length - 3)}`}>
            <Markdown>{recipe.substring(0, 100) + '...'}</Markdown>
        </ReactLink>
    );
}

export default PostPreview;