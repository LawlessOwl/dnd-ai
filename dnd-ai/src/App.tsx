import './App.css'
import Body from './components/body/body'
import Sidebar from './components/body/sidebar/sidebar'
import Header from './components/header/header'

const App = () => {

  return (
   <>
    <div className='page-container'>
      <Header />
      <div className='body'>
        <Sidebar />
        <Body />
      </div>
    </div>
    </>
  )
}

export default App
