import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Loader from './Loader'

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    // transition: { yoyo: 10 },
    transition: { yoyo: Infinity },
  },
}
//yoyo- used to supply multiple keyframes, 10- no of keyframes, animates scale from 1.1->1->1.1->1

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1.5, duration: 1.5 } },
  exit: { x: '-100vw', transition: { ease: 'easeInOut' } },
}

const Home = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='home container'
    >
      <motion.h2>Welcome to Pizza Joint</motion.h2>
      <Link to='/base'>
        <motion.button
          animate='visible'
          variants={buttonVariants}
          whileHover='hover'
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home
