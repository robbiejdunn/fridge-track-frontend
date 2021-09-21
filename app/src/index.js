import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Camera from './components/Camera';
import NewItemDialog from './components/NewItemDialog';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#097D1C'
    },
    secondary: {
      main: '#C94922'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    {/* <Camera /> */}
    <ThemeProvider theme={theme}>
      <NewItemDialog />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

console.log(process.env.NODE_ENV);
console.log(navigator);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
