import { User } from '../InitialStates/userState';

//export type
export enum UserActionTypes {
    GetUsers,
    LoadingUser
}

export interface GetUsers {
    type: UserActionTypes.GetUsers;
    payload: User[];
}
export interface LoadingUser {
    type: UserActionTypes.LoadingUser;
    payload: boolean;
}

export type UserActions = GetUsers | LoadingUser;

//export actions
export const getUsers = async (userDispatch: React.Dispatch<UserActions>) => {
    userDispatch({ type: UserActionTypes.LoadingUser, payload: true });
    const fakeUsers: User[] = [
        { email: 'email1@gmail.com', roles: ['1', '2'], id: '1' },
        { email: 'email2@gmail.com', roles: ['1', '2', '3', '4'], id: '2' }
    ];
    const users = await asyncFetch(fakeUsers);
    userDispatch({ type: UserActionTypes.GetUsers, payload: users });
    userDispatch({ type: UserActionTypes.LoadingUser, payload: false });
};

async function asyncFetch(users: User[]) {
    return new Promise<User[]>((resolve) => {
        setTimeout(() => {
            resolve(users);
        }, 1000);
    });
}
