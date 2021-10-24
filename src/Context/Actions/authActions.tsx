import { User } from '../InitialStates/userState';

//export type
export enum AuthActionTypes {
    Login,
    Logout,
    LoadingAuth
}

export interface Login {
    type: AuthActionTypes.Login;
    payload: User;
}
export interface Logout {
    type: AuthActionTypes.Logout;
}

export interface LoadingUser {
    type: AuthActionTypes.LoadingAuth;
    payload: boolean;
}

export type AuthActions = Login | Logout | LoadingUser;
