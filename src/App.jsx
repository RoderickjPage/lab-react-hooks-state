// App.jsx - root component. Holds dark mode, cart, and category state.
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  function handleAddToCart(product) {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product])
    }
  }

  const theme = {
    backgroundColor: darkMode ? '#1e1e2f' : '#ffffff',
    color: darkMode ? '#ffffff' : '#000000',
    minHeight: '100vh',
    padding: '1rem',
  }

  return (
    <div style={theme}>
      <h1>Shopping App</h1>
      <DarkModeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
      <div>
        <label>Filter by Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>
      <ProductList category={category} onAddToCart={handleAddToCart} />
      <Cart cart={cart} />
    </div>
  )
}

export default App
