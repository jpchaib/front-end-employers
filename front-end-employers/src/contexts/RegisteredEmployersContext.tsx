import { createContext } from "react";

export type RegisteredEmployersContextType = {
    employers: Object | null;
    setEmployers: React.Dispatch<React.SetStateAction<Object | null>>;
};

const registeredEmployersContextState = {
    employers: null,
    setEmployers: () => {},
};

export const RegisteredEmployersContext = createContext<RegisteredEmployersContextType>(registeredEmployersContextState);
