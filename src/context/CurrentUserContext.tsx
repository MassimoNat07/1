import { createContext } from "react";
import { UserData } from "../types/types";

interface CurrentUserContextType {
  user?: UserData;
  setUser: (user?: UserData) => void;
}

export const CurrentUserContext = createContext<CurrentUserContextType>({
  user: undefined,
  setUser: () => {},
});
