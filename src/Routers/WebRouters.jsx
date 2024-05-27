import React from "react";
import Login from "../login/Login";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Lawdocument from "../Lawdocument";
import Main from "../main/Main";
import Sidebar from "../Sidebar";
import useAuth from "../hooks/useAuth";
import Adduser from "../components/admin/Adduser"
import Edituser from "../components/admin/Edituser";
import Header from "../Header";
import Mainuser from "../components/user/Mainuser";
import Baruser from "../components/user/Baruser";
import Footeruser from "../components/user/Footeruser";

const guestRouter =createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <Login /> },
      { path: '*', element: <p>PAGE NOT FOUND</p>},
    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header/>
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <Mainuser /> },
      { path: '/Baruser', element: <Baruser /> },
      { path: '/Footeruser', element: <Footeruser /> },
    ]
  },
]);

const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header/>
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <Main /> },
      { path: '/Lawdocument', element: <Lawdocument /> },
      { path: '/Main', element: <Main /> },
      { path: '/Sidebar', element: <Sidebar /> },
      { path: '/Adduser', element: <Adduser /> },
      { path: '/Edituser', element: <Edituser /> },
      { path: '*', element: <p>PAGE NOT FOUND</p>},
    ]
  }
])

function WebRouters() {
  const { user } = useAuth()
  const finalRouter = user?.CID ? user.admin === 1 ? adminRouter : userRouter : guestRouter
 return <RouterProvider router={finalRouter} />;
}

export default WebRouters;
