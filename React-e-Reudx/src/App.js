import React from "react";
import Foto from "./Foto";

const App = () =>  {
  const [toggle, setToggle] = React.useState(true);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)} >Clica</button>
      {
        toggle && <Foto />
      }
    </div>
  );
}

export default App;
