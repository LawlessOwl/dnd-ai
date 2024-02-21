import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Body } from './components/body/body';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app'>
        <Body userInfo={props.userInfo}/>
        <div>
          <Routes>
            <Route/>
            <Route/>
            <Route/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

