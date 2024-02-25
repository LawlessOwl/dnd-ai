import React from 'react';
import ReactDOM from 'react-dom/client';
import '../style.scss';
import App from '../App';
import { Data, addMessage } from '../data/data';


export let rerenderTree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App userInfo={Data.userInfo} addMessage={addMessage}/>
    </React.StrictMode>
  );
}