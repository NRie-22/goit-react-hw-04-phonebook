import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App'; // Update the import to use named export
import './index.css';
import { theme } from './components/theme';
import { ThemeProvider } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
