import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/custom/Sidebar/Dashboard";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard />, children: [] },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
