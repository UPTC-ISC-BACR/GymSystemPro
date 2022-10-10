import React from 'react';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import { PrincipalRoute } from './components/Routers/PrincipalRoute';
import { store } from './store/store';

const  App = () =>{
  return (
    <React.StrictMode>
      <Provider store = {store}>
      <PrincipalRoute/>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
