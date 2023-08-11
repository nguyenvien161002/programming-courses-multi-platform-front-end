import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import GlobalStyles from '~/shared/components/GlobalStyles';
import reduxStore from './shared/redux';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <Provider store={reduxStore}>
                <App />
            </Provider>
        </GlobalStyles>
    </React.StrictMode>,
);
