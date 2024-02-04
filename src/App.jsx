import styles from "./style";

import { Navbar1 } from "./components";

const App = () => (
  <div>
    <div className='bg-primary w-full overflow-hidden'>
      <Navbar1 />
      <div className="bg-jkt-light h-screen"></div>
    </div>
  </div>
);

export default App