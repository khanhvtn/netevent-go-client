import { ApolloError, useMutation } from '@apollo/client';
import * as React from 'react';
import { useHistory } from 'react-router';
import { AuthActionTypes } from '../../Context/Actions/authActions';
import { UserActionTypes } from '../../Context/Actions/userActions';
import { AppContext } from '../../Context/AppProvider';
import { login } from '../../GraphQL/auth.graphql';

const Login = () => {
    const history = useHistory();
    const { authDispatch } = React.useContext(AppContext);
    const [state, setState] = React.useState({ email: '', password: '' });
    const [loginErrs, setLoginErrs] = React.useState<string[]>([]);
    const [mutationLogin, { data, loading }] = useMutation(login());

    React.useEffect(() => {
        if (data) {
            authDispatch({
                type: AuthActionTypes.Login,
                payload: {
                    email: data.login.email,
                    roles: data.login.roles,
                    id: data.login.id
                }
            });
            history.push('/pickRole');
        }
    }, [data]);
    const renderErrs = loginErrs.map((err, index) => {
        return <h5 key={index}>{err}</h5>;
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await mutationLogin({
                variables: {
                    email: state.email,
                    password: state.password
                }
            });
        } catch (error) {
            if (error instanceof ApolloError) {
                setLoginErrs(() => {
                    return (error as ApolloError).message.split(';');
                });
            } else {
                console.log(error);
            }
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
                {loading && <h2>Loading...</h2>}
            </form>
            {!loading && renderErrs}
        </div>
    );
};

export default Login;
