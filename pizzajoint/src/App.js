import React, { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Base from './components/Base'
import Toppings from './components/Toppings'
import Order from './components/Order'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Modal from './components/Modal'

function App() {
  const [pizza, setPizza] = useState({ base: '', toppings: [] })
  const [showModal, setShowModal] = useState(false)
  const location = useLocation()

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping) => {
    let newToppings
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping]
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping)
    }
    setPizza({ ...pizza, toppings: newToppings })
  }

  //TODO- animate pages when they exit from DOM->
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
      {/* exitBeforeEnter- makes sure current component exists DOM completely b4 new enters */}
      {/* onExitComplete- whenever the route changes, run exitModal function */}
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Routes location={location} key={location.key}>
        {/* location={location} key={location.key} are required so AnimatePresence knows when page changes */}
        <Route
          path='/base'
          element={<Base addBase={addBase} pizza={pizza} />}
        />
        <Route
          path='/toppings'
          element={<Toppings addTopping={addTopping} pizza={pizza} />}
        />
        k
        <Route
          path='/order'
          element={<Order pizza={pizza} setShowModal={setShowModal} />}
        />
        <Route path='/' element={<Home />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
