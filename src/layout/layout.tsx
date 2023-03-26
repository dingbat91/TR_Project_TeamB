import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
