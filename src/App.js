import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import NoRouteMatch from './pages/NoRouteMatch';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Theme from './files/theme'

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NoRouteMatch />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
