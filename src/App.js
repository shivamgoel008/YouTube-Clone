import React from 'react';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './Utils/store';

const App=()=> {
  return (
    <Provider store={store}>
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
    </Provider>
  );
}

export default App;
