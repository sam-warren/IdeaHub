import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import appTheme from './themes/appTheme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <BrowserRouter>
          <CssBaseline />
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
