import React from 'react';
import MainLayout from '../layouts/MainLayout';
import RecipePreview from '../components/RecipePreview';
import Stack from 'react-bootstrap/Stack';

function RecipesPage()
{
    //Set the post count - POSTS MUST BE NAMED post#.md
    const recipeCount = 2;
    const recipes = Array.from(Array(recipeCount).keys()).map(i => `recipe${i + 1}.md`);

    return (
        <MainLayout>
            <Stack gap={3}>
                {recipes.map((recipe, i) => <RecipePreview key={i} fileName={recipe} />)}
            </Stack>
        </MainLayout>
    );
}

export default RecipesPage;