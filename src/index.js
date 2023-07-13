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

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/blog",
        element: <BlogPage />,
    }
    //Add routes for all the post pages programmatically
    ,
    ...Array.from(Array(2).keys()).map(i => (
        {
            path: `/blog/post${i + 1}`,
            element: <PostPage fileName={`post${i + 1}.md`} />,
        }
    ))
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
