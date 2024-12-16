import { useState, useEffect, useCallback, useRef } from "react";

function PasswordGen() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNum] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const copyPass = useRef(null);

  const generatePass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "`~!@#$%^&*(){}/";
    for (let i = 0; i < length; i++) {
      let rand = Math.floor(Math.random() * str.length);
      pass += str.charAt(rand);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(generatePass, [length, numAllowed, charAllowed]);

  const copyToClipboard = useCallback(() => {
    copyPass.current?.select();
    // copyPass.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="w-screen flex justify-center text-center">
      <div className="w-full max-w-md shadow-md rounded-md bg-slate-600 text-orange-500 md:font-semibold">
        <h2 className="my-2">Password Generator</h2>
        <div className="flex shadow rounded-md overflow-hidden mb-4 mx-2">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={copyPass}
          />
          <button
            className="rounded-s-none outline-none shrink-0 bg-orange-500 text-white"
            onClick={copyToClipboard}
          >
            copy
          </button>
        </div>
        <div className="flex gap-2 mx-3 mb-2">
          <input
            type="range"
            min={8}
            max={16}
            value={length}
            className="cursor-pointer outline-none"
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex gap-2 mx-3 mb-2">
          <input
            type="checkbox"
            value={numAllowed}
            onChange={() => setNum((prev) => !prev)}
          />
          <label>Numbers</label>
        </div>
        <div className="flex gap-2 mx-3 mb-2">
          <input
            type="checkbox"
            value={charAllowed}
            onChange={() => setChar((prev) => !prev)}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGen;
