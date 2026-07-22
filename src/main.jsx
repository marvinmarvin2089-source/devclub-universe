import "@fontsource/orbitron/700.css";
import "@fontsource/orbitron/800.css";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App.jsx';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { UniverseProvider } from "./context/UniverseProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UniverseProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </UniverseProvider>
  </StrictMode>
);