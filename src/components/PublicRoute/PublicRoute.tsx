import { Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext } from "react";

interface PublicRouteProps {
	element: React.ReactElement;
	redirectTo?: string;
}
export const PublicRoute: React.FC<PublicRouteProps> = ({ element, redirectTo = "/dashboard" }) => {
	const { user } = useContext(CurrentUserContext);

	return user ? <Navigate to={redirectTo} /> : element;
};
