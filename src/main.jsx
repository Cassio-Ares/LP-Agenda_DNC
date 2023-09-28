import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./Global.scss";
import Tasks from "./views/Tasks/Tasks";
import Organization from "./views/Organization/Organization";
import {schedule} from "../mock/ScheduleMock"



const router = createBrowserRouter([
  
   {
    path: "/",
   element: <Tasks data={schedule} />
    
  },

  {
  path: "/Organization",
   element: <Organization data={schedule}/>
 },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
