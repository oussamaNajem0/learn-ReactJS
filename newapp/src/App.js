import './App.css';
import {useState} from 'react';

function App() {
  let [num,setNum] = useState(0);
  let [title, setTitle]= useState("Intro to React");
  let titles = ["intro a react","javascript","node js"];
  console.log("compenent rendred ...");
  function addHandler(){
    setNum((num)=>num+1);
    console.log(num);
    console.Log("fin");
  }

  function deleteHandeler(){
    // setNum(num-1);
    // setNum(num-1);
    setNum((num)=>num-1);
    console.log(num);
  }
  useEffect(()=>{
    setTitle(titles[Math.abs[num]%titles.length])
  });

  return (
    <div className="App">
      <h1>Le num est : {num}</h1>
      <header className="App-header">
        <button onClick={addHandler}>+</button>
        {num}
        <button onClick={deleteHandeler}>-</button>
      </header>
    </div>
  );
}

export default App;