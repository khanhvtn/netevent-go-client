import * as React from 'react';
import { AuthActions } from './Actions/authActions';
import { UserActions } from './Actions/userActions';
import { authInitialState, IAuthState } from './InitialStates/authState';
import { IUserState, userInitialState } from './InitialStates/userState';
import { authReducer } from './Reducers/authReducer';
import { userReducer } from './Reducers/userReducer';

type InitialAppState = {
    userState: IUserState;
    userDispatch: React.Dispatch<UserActions>;
    authState: IAuthState;
    authDispatch: React.Dispatch<AuthActions>;
};

const initialAppState: InitialAppState = {
    userState: userInitialState,
    userDispatch: () => undefined,
    authState: authInitialState,
    authDispatch: () => undefined
};

//Provider
export const AppContext = React.createContext<InitialAppState>(initialAppState);
interface AppProviderProps {
    children: React.ReactNode;
}
//Initialize App context value
export const AppProvider = ({ children }: AppProviderProps) => {
    const [userState, userDispatch] = React.useReducer(
        userReducer,
        userInitialState
    );
    const [authState, authDispatch] = React.useReducer(
        authReducer,
        authInitialState
    );
    return (
        <AppContext.Provider
            value={{ userState, userDispatch, authState, authDispatch }}>
            {children}
        </AppContext.Provider>
    );
};
