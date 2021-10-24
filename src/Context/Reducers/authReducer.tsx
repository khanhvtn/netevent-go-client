import { AuthActions, AuthActionTypes } from '../Actions/authActions';
import { authInitialState, IAuthState } from '../InitialStates/authState';

export const authReducer = (
    state: IAuthState,
    action: AuthActions
): IAuthState => {
    switch (action.type) {
        case AuthActionTypes.LoadingAuth:
            return { ...state, isLoading: action.payload };
        case AuthActionTypes.Login:
            return { ...state, currentUser: action.payload };
        case AuthActionTypes.Logout:
            return authInitialState;
        default:
            return state;
    }
};
