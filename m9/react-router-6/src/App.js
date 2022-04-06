import { Link, Route, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'

// components
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import NotFound from './components/NotFound'

function App() {
  const [cartIsEmpty] = useState(false)

  return (
    <div className="App">
      
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/test" element={(
            <div>
              <h2>Test page</h2>
            </div>
          )} />
          <Route path="/redirect" element={<Navigate to="/about" />} />
          <Route 
            path="/checkout" 
            element={cartIsEmpty ? <Navigate to="/products" /> : <p>checkout</p>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default App