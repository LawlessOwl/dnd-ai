import './style.scss';
import reportWebVitals from './reportWebVitals';
import { rerenderTree } from './rerender/rerender';
import { Data } from './data/data';


rerenderTree(Data)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
