import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { x: '100vw', opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 2,
    },
  },
  //transition applied on visible
  //when- transition orchestration props- defines when to start animation wrt children props
  //beforeChildren- animate b4 children are loaded into DOM
  //mass- higher mass, lower speed
  //damping- retarding force, 0- bounce indefinitely
  //staggerChildren- delays animation start of each children by .4s
}

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Order = ({ pizza }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className='container order'
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Order
