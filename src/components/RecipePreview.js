import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import ReactLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';

function RecipePreview({ recipe })
{
    const [recipeText, setRecipeText] = useState('Loading...');

    useEffect(() =>
    {
        import(`../resources/${recipe.file}`)
            .then(res =>
            {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setRecipeText(res))
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    }, [recipe.file]);

    return (
        <ReactLink className='bg-info-subtle rounded p-3' as={Link} to={`/blog-shop/recipes/${recipe.route}`}>
            <Markdown>{recipeText.substring(0, 100) + '...'}</Markdown>
        </ReactLink>
    );
}

export default RecipePreview;