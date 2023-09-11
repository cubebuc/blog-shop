import React from 'react';
import MainLayout from '../layouts/MainLayout';
import RecipePreview from '../components/RecipePreview';
import Stack from 'react-bootstrap/Stack';

import recipes from '../resources/recipes.json';

function RecipesPage()
{
    return (
        <MainLayout>
            <Stack gap={3}>
                {recipes.map((recipe, i) => <RecipePreview key={i} recipe={recipe} />)}
            </Stack>
        </MainLayout>
    );
}

export default RecipesPage;