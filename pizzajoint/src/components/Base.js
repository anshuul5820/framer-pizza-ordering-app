import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

//variants used in achieving cleaner code
const containerVariants = {
  hidden: { x: '100vw', opacity: 0 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.5 } },
  //transition applied on visible
} //hidden, visible, containerVariants are arbitrary names

const nextVariants = {
  hidden: { x: '-100vw' },
  visible: { x: 0, transition: { type: 'spring', stiffness: 200 } },
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust']

  return (
    <motion.div
      className='base container'
      variants={containerVariants}
      initial='hidden' //variant obj key
      animate='visible'
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : ''
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className='next'
          variants={nextVariants}
          // initial='hidden'
          // animate='visible'
          //initial and animate props will be used from parent element- 'hidden', 'visible'
        >
          <Link to='/toppings'>
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 8px rgb(255,255,255)',
                boxShadow: '0px 0px 8px rgb(255,255,255)',
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Base
