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
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import ShopPage from './pages/ShopPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/blog',
        element: <BlogPage />
    },
    ...Array.from(Array(2).keys()).map(i => (
        {
            path: `/blog/post${i + 1}`,
            element: <PostPage fileName={`post${i + 1}.md`} />
        }
    )),
    {
        path: '/shop',
        element: <ShopPage />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
