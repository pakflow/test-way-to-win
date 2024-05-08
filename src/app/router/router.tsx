import Doctors from "@/pages/doctors/ui/Doctors";
import Nurses from "@/pages/nurses/ui/Nurses";
import { ROUTES } from "@/shared/routes/routes";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Doctor from "@/pages/doctor/ui/Doctor";
import Nurse from "@/pages/nurse/ui/Nurse";

export const router = createBrowserRouter([
  {
    path: ROUTES.DOCTORS,
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.DOCTORS,
        element: <Doctors />,
      },
      {
        path: ROUTES.NURSES,
        element: <Nurses />,
      },
      {
        path: `${ROUTES.DOCTORS}/:doctorId`,
        element: <Doctor />,
      },
      {
        path: `${ROUTES.NURSES}/:nurseId`,
        element: <Nurse />,
      },
    ]
  }
]);
