import React from "react";
import Button from "./Button";

//import { useToggleButton } from "./hook/toggle";

function App() {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {};

  return (
    <>
      <Button onClick={handleClick}>default</Button>
      <Button disabled={true} onClick={handleClick}>
        disabled
      </Button>
      <br />
      <Button size="sm" onClick={handleClick}>
        sm
      </Button>
      <Button size="md" onClick={handleClick}>
        md
      </Button>
      <Button size="lg" onClick={handleClick}>
        lg
      </Button>
      <Button size="xl" onClick={handleClick}>
        xl
      </Button>
      <br />
      <Button variant="primary" onClick={handleClick}>
        primary
      </Button>
      <Button variant="success" onClick={handleClick}>
        success
      </Button>
      <Button variant="warning" onClick={handleClick}>
        warning
      </Button>
      <Button variant="error" onClick={handleClick}>
        error
      </Button>
    </>
  );
}

export default App;
