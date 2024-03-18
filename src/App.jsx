
import "@natscale/react-calendar/dist/main.css";
import "./App.css";
import DetailScreen from "./screen/DetailScreen";
import NoteScreen from "./screen/์NoteScreen";
import WriteScreen from "./screen/WriteScreen";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeScreen />
    ),
  },
  {
    path: "detail/:id",
    element: (
      <DetailScreen />
    ),
  },
  {
    path: "note",
    element: (
      <NoteScreen />
    ),
  },

]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}