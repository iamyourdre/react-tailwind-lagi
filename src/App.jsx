import styles from "./style";
import { NavigationProvider } from "./contexts/ContextProvider";

import { Navbar1 } from "./components";

const App = () => (
  <NavigationProvider>
    <div className='bg-primary w-full overflow-hidden'>
      <Navbar1 />
      <div className="bg-jkt-light h-screen"></div>
    </div>
  </NavigationProvider>
);

export default App