import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './Context/AppProvider';
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    createHttpLink
} from '@apollo/client';
import './index.css';

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({
        uri:
            process.env.NODE_ENV != 'production'
                ? 'http://localhost:5000/query'
                : 'http://localhost:5000/query',
        credentials: 'include'
    })
});

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <AppProvider>
            <App />
        </AppProvider>
    </ApolloProvider>,
    document.getElementById('root')
);
