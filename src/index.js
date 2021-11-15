import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './MyComponents/StateProvider';
import reducer, { initialState } from './MyComponents/reducer';


ReactDOM.render(
  <React.StrictMode>
    {/*here we are just wrapping the app with StateProvider  
    1 ==>  initialState is - what does the data looks like in beginning 
    2 ==> reducer is - how can we manipulate the data

    DONT FORGET TO IMPORT STATEPROVIDER, INITIALSTATE, REDUCER
    */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

