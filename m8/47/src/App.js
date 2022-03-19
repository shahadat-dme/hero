import './App.css';
import Device from './components/Device/Device';
// import Dial from './components/Dial/Dial';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <h1>Shahadat</h1>
      <Device name="ph" price="780"/>
      <Watch/>
      {/* <Dial/> */}
    </div>
  );
}

export default App;
