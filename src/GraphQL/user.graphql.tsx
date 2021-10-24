import { gql } from '@apollo/client';
export const usersGql = () => {
    return gql`
        query {
            users(filter: { defaultFilter: {} }) {
                pageInfo {
                    totalPage
                    currentPage
                }
                users {
                    id
                    email
                    roles
                }
            }
        }
    `;
};
