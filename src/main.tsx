import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.tsx";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage.tsx";
import { LoginPage } from "./pages/LoginPage/LoginPage.tsx";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage.tsx";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage.tsx";
import "./index.css";
import { Header } from "./components/Header/Header.tsx";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute .tsx";
import { PublicRoute } from "./components/PublicRoute/PublicRoute.tsx";
import { CatergoryPage } from "./pages/CatergoryPage/CatergoryPage.tsx";



const router = createBrowserRouter([
	{
		path: "/",
		element: <Header />,
		children: [
			{
				path: "/",
				element: <PublicRoute element={<HomePage />} />,
			},
			{
				path: "/sign-up",
				element: <PublicRoute element={<SignUpPage />} />,
			},
			{
				path: "/login",
				element: <PublicRoute element={<LoginPage />} />,
			},
			{
				path: "/profile",
				element: <PrivateRoute element={<ProfilePage />} />,
			},
			{
				path: "/dashboard",
				element: <PrivateRoute element={<Layout />} />,
				children: [
					{
						path: "/dashboard",
						element: <DashboardPage />,
					},
					{
						path: "/dashboard/:category",
						element: <CatergoryPage />,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
