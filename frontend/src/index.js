import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import theme from './theme'
import Router from './Router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CSSReset />
        <Router />
    </ThemeProvider>, 
    document.getElementById('root'));

serviceWorker.register();
