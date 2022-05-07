import React from 'react';
import ReactDOM from 'react-dom';
import { theme } from 'theme/theme';
import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
