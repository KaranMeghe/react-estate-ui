import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, HomePage } from "./routes";

function App() {
  // Lazy Loading
  const ListPage = lazy(() => import("./routes/listPage/ListPage"));
  const SinglePage = lazy(() => import("./components/SinglePage/SinglePage"));
  const ProfilePage = lazy(() => import("./routes/Profile/ProfilePage"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "list",
          element: (
            <Suspense>
              <ListPage />
            </Suspense>
          ),
        },
        {
          path: `/:id`,
          element: (
            <Suspense>
              <SinglePage />
            </Suspense>
          ),
        },
        {
          path: "/profile",
          element: (
            <Suspense>
              <ProfilePage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
