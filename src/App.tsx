import React from 'react';
import './App.css';

import Algorithm from "util/findwords"

function App() {
  const [data, setData] = React.useState<any[]>([]);
  const [input, setInput] = React.useState<string>("");

  const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value.toLowerCase());
  }

  const checkEnter = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setData(Algorithm(input));
    }
  }

  return <div className="App">
    <h1>Find Words</h1>
    <p>Enter letters with "." (period) as placeholders to find matching words and definitions</p>
    <input onChange={handleChange} value={input} onKeyPress={checkEnter}></input>
    <button className="btn-info px-4 mx-4" onClick={() => {setData(Algorithm(input))}}>Start</button>
    <ul className="word-list list-group my-4">
    {
      data.map((e,i) => <li key={"par"+i} className="list-group-item p-2"><strong>{e.word}</strong>: {e.def}</li>)
    }
    </ul>
  </div>
}

export default App;
