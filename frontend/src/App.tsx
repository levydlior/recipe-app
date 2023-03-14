import './App.css';
import Layout from './components/Layout/Layout';
import { createTheme, PaletteColorOptions, PaletteOptions, ThemeProvider } from '@mui/material/styles';

interface CustomPalette extends PaletteOptions {
  customColor: PaletteColorOptions;
}

const theme = createTheme({
  palette: {
    customColor: {
      main: '#CCD6A6',
    },
  } as CustomPalette,
});

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
