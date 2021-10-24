import { UserActions, UserActionTypes } from '../Actions/userActions';
import { IUserState } from '../InitialStates/userState';

export const userReducer = (
    state: IUserState,
    action: UserActions
): IUserState => {
    switch (action.type) {
        case UserActionTypes.GetUsers:
            return {
                ...state,
                users: action.payload
            };
        case UserActionTypes.LoadingUser:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};
