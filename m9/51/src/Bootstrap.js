import './App.css';
// import Cart from './components/Cart/Cart';
import CartGroup from './components/CartGroup/CartGroup';
import {Button,Spinner} from 'react-bootstrap';
import CardGroup2 from './components/CardGroup2/CardGroup2';

function Bootstrap() {
  return (
    <div className="App">
      <Button variant='danger'>Add</Button>
      <br/>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <CardGroup2/>
      {/* <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>
      <button type="button" className="btn btn-link">Link</button> */}
      <CartGroup/>
      {/* <Cart/> */}
    </div>
  );
}

export default Bootstrap;
