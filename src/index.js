import React from 'react';
import ReactDOM from 'react-dom/client';
import
{
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import RecipesPage from './pages/RecipesPage';
import RecipePage from './pages/RecipePage';
import ShopPage from './pages/ShopPage';
import CheckoutPage from './pages/CheckoutPage';

import recipes from './resources/recipes.json';

const router = createBrowserRouter([
    {
        path: 'blog-shop/',
        element: <App />
    },
    {
        path: 'blog-shop/recipes',
        element: <RecipesPage />
    },
    ...recipes.map((recipe) => (
        {
            path: `blog-shop/recipes/${recipe.route}`,
            element: <RecipePage fileName={recipe.file} />
        }
    )),
    {
        path: 'blog-shop/shop',
        element: <ShopPage />
    },
    {
        path: 'blog-shop/checkout',
        element: <CheckoutPage />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
