import { Navigate, Route } from "react-router-dom";
import React from "react";
import MyWebsites from "@/home/pages/MyWebsites";
import { appRoutes } from "@/constants/appRoutes";
import WorkInProgress from "../layouts/WorkInProgress";
import AddWebsite from "@/home/pages/AddWebsite";

export const publicRoutes: React.ReactNode = (
  <>
    <Route path="*" element={<Navigate to={appRoutes.myWebsites.main} />} />
    <Route path={appRoutes.myWebsites.main} element={<MyWebsites />} />
    <Route
      path={appRoutes.myWebsites.main + appRoutes.myWebsites.addWebsite}
      element={<AddWebsite />}
    />
    <Route
      path={appRoutes.marketplace}
      element={<WorkInProgress Page={"Marketplace"} />}
    />
    <Route
      path={appRoutes.myOrders}
      element={<WorkInProgress Page={"My Orders"} />}
    />
    <Route
      path={appRoutes.myProjects}
      element={<WorkInProgress Page={"My Projects"} />}
    />
    <Route
      path={appRoutes.recievedOrders}
      element={<WorkInProgress Page={"Recieved Orders"} />}
    />
  </>
);
