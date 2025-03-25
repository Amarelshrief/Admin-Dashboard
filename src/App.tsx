import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ManageTeamPage from "./pages/ManageTeam";
import ContactsInfoPage from "./pages/ContactsInfo";
import LineChartPage from "./pages/LineChart";
import PieChartPage from "./pages/PieChart";
import BarChartPage from "./pages/BarChart";
import FAQHelpPage from "./pages/FAQHelp";
import ProfileFormPage from "./pages/ProfileForm";
import DashboardRootLayout from "./pages/DashboardRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardRootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/manage-team", element: <ManageTeamPage /> },
      { path: "/contacts-info", element: <ContactsInfoPage /> },
      { path: "/profile-form", element: <ProfileFormPage /> },
      { path: "/faq-help", element: <FAQHelpPage /> },
      { path: "/bar-chart", element: <BarChartPage /> },
      { path: "/pie-chart", element: <PieChartPage /> },
      { path: "/line-chart", element: <LineChartPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
