import { useState } from "react";

import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1 className='app transition-all ease-in'>
        <Home />
        <Canvas />
        <Customizer />
      </h1>
    </main>
  );
}

export default App;
