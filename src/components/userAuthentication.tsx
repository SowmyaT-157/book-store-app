import React, { useContext, createContext, useState, ReactNode } from "react";
import User from "./staticData";

type AuthContextType = {
    users: User | null;
    login: (user: User) => void;
};

type Auth = {
    children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<Auth> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const login = (users: User) => {
        setCurrentUser(users);
    };
    const value = {
        users: currentUser,
        login: login,
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
