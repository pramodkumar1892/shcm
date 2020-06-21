import './styles/style.scss'
import React from 'react';
import Routes from './routes'
import configurationSetting from './api/httpcliennt'

configurationSetting()
function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
