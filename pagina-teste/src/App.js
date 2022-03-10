import { useState } from "react";
import Button from "./ButtonComponent/Button";

function App() {
  const [disabledI, setDisabledI] = useState(false)
  const HandleButtonClick2 = () => {
    setDisabledI(state => !state)
  }

  return (
    <>
      <Button color="primary" icon="arrow-right" disabled={disabledI} >CLICA EU</Button>
      <Button onClick={HandleButtonClick2} color="primary" icon="refresh" >Troca</Button>
    </>
  );
}

export default App;
