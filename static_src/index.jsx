import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import initStore from './utils/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
    <Provider store={ initStore([]) }>
        <MuiThemeProvider>
            <Layout />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
