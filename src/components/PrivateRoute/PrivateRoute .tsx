import { Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext } from "react";

interface PrivateRouteProps {
	element: React.ReactElement;
	redirectTo?: string;
}
export const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, redirectTo = "/" }) => {
	const { user } = useContext(CurrentUserContext);

	return user ? element : <Navigate to={redirectTo} />;
};
