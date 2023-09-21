import { useState } from "react";

export default function ButtonTrocaFundo({trocarFundo}) {
  return (
    <div>
      <button
        onClick={trocarFundo}
        className="btn hover:scale-110 rounded-md w-20 h-10 bg-slate-500  text-[#FFF]"
      >
        Click me!
      </button>
    </div>
  );
}
