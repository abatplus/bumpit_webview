import React from 'react';
import logo from './logo.svg';
import 'fontsource-roboto';
import './App.css';
import Typography from '@material-ui/core/Typography';

function App() {
  const locale = navigator.language;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography noWrap={true} variant={'h3'}>
          Current locale: {locale}
        </Typography>
        <p>
          Edit <code>src/App.tsx</code> and save to reload. Current locale: {locale}
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
