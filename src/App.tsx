import * as React from 'react';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Error from './Components/Error/Error';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PickRole from './Components/PickRole/PickRole';
const App: React.FunctionComponent = () => {
    return (
        <div>
            <NavigationBar />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute path="/pickRole">
                        <PickRole />
                    </PrivateRoute>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
