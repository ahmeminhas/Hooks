import { memo } from "react";
export default memo(function CountBtn({handleCount}){
    console.log('3. CountBtn');
    
    return (<>
    <button onClick={handleCount}>++++</button>
    </>)
  })