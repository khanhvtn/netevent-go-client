import gql from 'graphql-tag';

export const login = () => {
    return gql`
        mutation Login($email: String!, $password: String!) {
            login(input: { email: $email, password: $password }) {
                id
                email
                roles
            }
        }
    `;
};
export const logout = () => {
    return gql`
        mutation {
            logout
        }
    `;
};
