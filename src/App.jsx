import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ButtonTrocaFundo from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [random,setRandom] = useState(Math.floor(Math.random(4)));
  const [cor, setCor] = useState(false);
  function trocarFundo() {
    setCor(!cor);
    setRandom(Math.floor(Math.random()*4))
  }
  const colors = [
    'bg-green-500',
    'bg-blue-500',
    'bg-slate-500',
    'bg-black-500',
    

  ]
  return (
    <main
      className={`flex flex-col justify-center text-center ${
         colors[random] 
       
      } min-h-screen`}
    >
      
      
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        
      </div>
     
      <ButtonTrocaFundo trocarFundo={trocarFundo} />
    </main>
  );
}

export default App;
