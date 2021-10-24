import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../../Context/AppProvider';

interface PrivateRouteProps {
    children: React.ReactNode;
    path: string;
}
const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
    children,
    ...rest
}) => {
    const context = React.useContext(AppContext);
    let auth = !!context.authState.currentUser;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
