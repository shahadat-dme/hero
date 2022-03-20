import './App.css';
import Cosmetic from './components/Cosmetic/Cosmetic';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Shoes from './components/Shoes/Shoes';
// import Device from './components/Device/Device';
// import Dial from './components/Dial/Dial';
// import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      {/* <h1>Shahadat</h1> */}
      {/* <Device name="ph" price="780"/> */}
      {/* <Watch/> */}
      {/* <Dial/> */}
      <Cosmetic/>
      <Cosmetics/>
      <Shoes/>
    </div>
  );
}

export default App;
