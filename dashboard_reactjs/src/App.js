import {useState} from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Generality from './pages/generality'
const App = () => {
  return (
    <div className="container">
      <Sidebar/>
      <Generality/>
    </div>
  );
}

export default App;
