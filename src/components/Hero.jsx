import React from 'react'

import styles from "../style";
import {navLinks} from '../constants';

const Hero1 = () => {
  return (
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
  )
}

export default Hero1
