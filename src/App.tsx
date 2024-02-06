import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import "preline/preline";
import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

import styles from "./style";

import { Navbar } from "./components";
import { Hero } from "./components";

const App = () => {
  
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  
  return (
    <div>
      <div className='bg-primary w-full overflow-hidden'>
        <Navbar />
        <div className={`${styles.padding} ${styles.flexCenter} bg-jkt-light z-50`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
      </div>
    </div>
  )};

export default App