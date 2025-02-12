import { useEffect } from "react"
import { useState} from "react"
import Block from "./Block"

export default function App(){
  let [count, setCount] = useState(0)
  let [animal, setAnimal] = useState("Snack")
  let [block, setBlock] = useState(true)
  const addOne = ()=> {setCount(count + 1)}
  const subOne = ()=> {setCount(count - 1)}
  const reset = ()=> {setCount(0)}
  // useEffect(()=>{
  //   console.log(count);
  //   console.log(animal);
    

    // if (count===5){console.log("Limit Reached!");
    // })

  // useEffect(()=>{
  //   console.log(animal);
    
  // }, [animal])

  return (<>
  <h2>Count:{count} </h2>
  <button onClick={addOne}>+1</button>
  <button onClick={subOne}>-1</button>
  <button onClick={reset}>Reset</button>
  <hr />
  <h3>{animal}</h3>
  <button onClick={()=>setAnimal('Cat')}>Change Animal</button>
  <hr />
  {block ? <Block/> : null}
  <button onClick={()=> setBlock(!block)}>Toggle Block</button>
  </>)
}