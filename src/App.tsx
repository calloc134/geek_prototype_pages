import { useState } from "react";
import { css } from "./styled-system/css";
import { Button } from "./Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>

      <div className={css({ fontSize: "8xl", fontWeight: "bold" })}>
        Hello 🐼!
      </div>
    </>
  );
}

export default App;
