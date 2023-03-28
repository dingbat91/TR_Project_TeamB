import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/header";
import { WatchListProvider } from "../watchList_context";
export const Layout: React.FC = () => {
	return (
		<>
			<Header />
			<WatchListProvider>
				<Outlet />
			</WatchListProvider>
		</>
	);
};
