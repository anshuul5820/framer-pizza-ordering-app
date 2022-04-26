import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { x: '100vw', opacity: 0 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.5 } },
  //transition applied on visible
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className='toppings container'
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : ''
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
          )
        })}
      </ul>

      <Link to='/order'>
        <button>Order</button>
      </Link>
    </motion.div>
  )
}

export default Toppings
