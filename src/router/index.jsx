import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage404 from '../components/pages/ErrorPage404';
import PaginaBuscador from "../components/pages/PaginaBuscador";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaBuscador></PaginaBuscador>,
  },
  {
    path: "/buscador/",
    element: <PaginaBuscador></PaginaBuscador>,
  },
  {
    path: "*",
    element: <ErrorPage404/>,
  },
]);
