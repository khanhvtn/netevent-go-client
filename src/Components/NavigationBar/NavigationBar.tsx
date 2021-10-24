import * as React from 'react';
import { AccountCircle, ExitToApp } from '@mui/icons-material';
import {
    AppBar,
    IconButton,
    MenuItem,
    Menu,
    Toolbar,
    Typography
} from '@mui/material';
import { AppContext } from '../../Context/AppProvider';
import { AuthActionTypes } from '../../Context/Actions/authActions';
import { ApolloError, useMutation } from '@apollo/client';
import { logout } from '../../GraphQL/auth.graphql';

const NavigationBar: React.FunctionComponent = () => {
    const { authState, authDispatch } = React.useContext(AppContext);
    const [mutationLogout, { error }] = useMutation(logout());
    const handleLogout = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        try {
            await mutationLogout();
            authDispatch({ type: AuthActionTypes.Logout });
        } catch (error) {
            if (error instanceof ApolloError) {
                console.log((error as ApolloError).message);
            } else {
                console.log(error);
            }
        }
    };
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    NetCompany
                </Typography>
                {!!authState.currentUser && (
                    <IconButton
                        size="large"
                        onClick={handleLogout}
                        color="inherit">
                        <ExitToApp />
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;
