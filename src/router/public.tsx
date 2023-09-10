import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


export const PublicRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Welcome Home!</div>
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}