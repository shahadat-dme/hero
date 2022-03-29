import './App.css';
import Header from './tailwind/Header/Header';
import Pricing from './tailwind/Pricing/Pricing';
// import Bootstrap from './Bootstrap';

function App() {
  return (
    <div className="App">
      {/* <Bootstrap/> */}
      <Header/>
      <h1 className='text-6xl'>Welcome to my pricing club</h1>
      <Pricing/>
    </div>
  );
}

export default App;
