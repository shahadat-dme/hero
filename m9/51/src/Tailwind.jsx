import './App.css';
import Header from './tailwind/Header/Header';
import Pricing from './tailwind/Pricing/Pricing';


function Tailwind() {
  return (
    <div className="App">
      <Header />
      <h1 className='text-6xl'>Welcome to my pricing club</h1>
      <Pricing />
    </div>
  );
}

export default Tailwind;
