import { FC, useState, createContext, PropsWithChildren } from 'react';

type TAuthContext = {
	auth: null | { access_token: string };
	updateAuth: (val: null | TAuthContext['auth']) => void;
};

export const AuthContext = createContext<TAuthContext>({} as TAuthContext);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [auth, setAuth] = useState<null | TAuthContext['auth']>(null);
	const updateAuth = (val: null | TAuthContext['auth']) => {
		setAuth(val);
		localStorage.setItem("jwt", val ? val.access_token : "")
	};

	return (
		<AuthContext.Provider
			value={{ auth, updateAuth }}
		>
			{children}
		</AuthContext.Provider>
	);
};
