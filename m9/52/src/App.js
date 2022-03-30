import './App.css';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome React Router 6</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/friends' element={<Friends/>}/>
      </Routes>
    </div>
  );
}

export default App;
