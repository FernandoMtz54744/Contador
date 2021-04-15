import './App.css';
import {useState} from "react";

const Contador = () =>{
//Definiendo los contadores
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
//Definiendo las funciones para el contador 1
  const add1 = ()=>{
    setCount1(count1+1);
  }
  const substract1 = ()=>{
    setCount1(count1-1);
  }
  const reset1 = ()=>{
    setCount1(0);
  }

  //Definiendo las funciones para el contador 2
  const add2 = ()=>{
    setCount2(count2+count1);
  }
  const substract2 = ()=>{
    setCount2(count2-count1);
  }
  const reset2 = ()=>{
    setCount2(0);
  }


  return (
    <>
    <section>
    <p>Contador 1</p>
    <h1>{count1}</h1>
    <div id="botones">
    <button onClick={add1}>Sumar</button>
    <button onClick={substract1}>Restar</button>
    <button onClick={reset1}>Reset</button>
    </div>
    </section>

    <section>
    <p>Contador 2</p>
    <h1>{count2}</h1>
    <div id="botones">
    <button onClick={add2}>Sumar</button>
    <button onClick={substract2}>Restar</button>
    <button onClick={reset2}>Reset</button> 
    </div>
    </section>
    </>
  )
}

export {Contador};
