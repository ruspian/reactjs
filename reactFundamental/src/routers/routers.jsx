import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/blogs/Blog";
import BlogContent from "../pages/blogs/_id.jsx";
import ErrorPage from "../componenets/ErrorPage";

// import loader
import { data, dataById } from "../apis/loaders";

// fungsi membuat routing
export const Router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/blog",
                element: <Blog />,
                loader: data,
            },
            {
                path: "/blog/:id",
                element: <BlogContent />,
                loader: dataById,
            },
        ],
    },
]);

