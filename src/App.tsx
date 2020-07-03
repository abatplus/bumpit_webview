import React from 'react';
import 'fontsource-roboto';
import './App.css';
import { MuiThemeProvider, Paper, CssBaseline } from '@material-ui/core';
import mainTheme from './theme/mainTheme';
import Routings from './components/Routings';
import Header from './components/Header';
import Copyright from './components/Copyright';

function App() {
  const locale = navigator.language;

  return (
    <MuiThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Header />
      <main>
        <Paper elevation={4} style={{ margin: '10px' }}>
          <Routings />
        </Paper>
      </main>
      <footer>
        <Copyright />
      </footer>
    </MuiThemeProvider>
  );
}

export default App;
