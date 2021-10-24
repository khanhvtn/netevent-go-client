export interface User {
    id: string;
    email: string;
    roles: string[];
}
export interface IUserState {
    isLoading: boolean;
    users: User[] | null;
}
export const userInitialState: IUserState = {
    isLoading: false,
    users: null
};
