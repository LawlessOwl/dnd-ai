import React from 'react';
import ReactDOM from 'react-dom/client';
import '../style.scss';
import App from '../App';
import { updateMessageText, addMessage } from '../data/data';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderTree = (Data) => {
  root.render(
    <React.StrictMode>
      <App userInfo={Data.userInfo} addMessage={addMessage} updateMessageText={updateMessageText} newMessageText={Data.newMessageText}/>
    </React.StrictMode>
  );
}