import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store/store";
import {ThemeProvider} from "@mui/styles";
import {SnackbarProvider} from 'notistack';


const theme = {
    spacing: 8,
};

const rootElement = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={6}>
                    <App/>
                </SnackbarProvider>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
