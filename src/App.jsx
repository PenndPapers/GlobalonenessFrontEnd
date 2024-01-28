import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/loginPage";
import LadingPage from "../pages/landingPage";
const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <LadingPage />,
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  //   children: [
  //     {
  //       index: true,

  //       element: <Blog />,
  //     },
  //     {
  //       path: "addCategory",
  //       element: <AddCategory />,
  //     },
  //     {
  //       path: "blogs",
  //       element: <BlogList />,
  //     },
  //     {
  //       path: "blogs/:blog",
  //       element: <BlogItem />,
  //     },
  //     {
  //       path: "customers",
  //       element: <Customers />,
    //   },
    // ],
  // },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
