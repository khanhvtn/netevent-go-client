import { User } from './userState';

export interface IAuthState {
    isLoading: boolean;
    currentUser: User | null;
}

export const authInitialState: IAuthState = {
    isLoading: false,
    currentUser: null
};
