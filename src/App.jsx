import { useCallback, useState } from "react";
import Count from "./components/Count";
import Title from "./components/Title";
import Age from "./components/Age";
import CountBtn from "./components/CountBtn";
import AgeBtn from "./components/AgeBtn";

export default function App(){
  let [count, setCount]= useState(0)
  let [age, setAge] = useState(18)

  const handleCount = useCallback (() => {
    setCount(count + 1)
  }, [count])

  const handleAge = useCallback(() => {
    setAge(age + 1)
  }, [age])
  return (<>
    <Title/>
    <Count count={count}/>
    <CountBtn handleCount={handleCount}/>
    <Age age={age}/>
    <AgeBtn handleAge={handleAge}/>
  </>)
}