import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material';
import SearchAppBar from './components/AppBar';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router } from "react-router-dom";
import AppContent from './components/AppContent';


const theme = createTheme({
  palette: {
    primary: {
      main: '#77C8F5',
    },
    secondary: {
      main: '#A87431',
    },
  },
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <SearchAppBar />
        <AppContent />
      </Router>
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
