import { FC, useState, createContext, PropsWithoutRef, PropsWithChildren } from 'react';
type AuthContext = {
    auth: null | { access_token: string };
    updateAuth: (val: null | AuthContext['auth']) => void;
};
export const AuthContext = createContext<AuthContext>(
    {} as AuthContext
);
export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [auth, setAuth] = useState<null | AuthContext['auth']>(null);
    const updateAuth = (val: null | AuthContext['auth']) => {
        setAuth(val);
        localStorage.setItem("jwt",val?val.access_token:"")
    };
    return (
        <AuthContext.Provider
            value={{ auth, updateAuth }}
        >
            {children}
        </AuthContext.Provider>
    );
};
