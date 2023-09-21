import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ButtonTrocaFundo from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [cor, setCor] = useState(false);
  function trocarFundo() {
    setCor(!cor);
  }
  return (
    <main
      className={`flex flex-col justify-center text-center ${
        cor ? "bg-red-500" : null
      } min-h-screen`}
    >
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-red-500">
        Click on the Vite and React logos to learn more
      </p>
      <ButtonTrocaFundo trocarFundo={trocarFundo} />
    </main>
  );
}

export default App;
