import { memo } from "react";
export default memo(function Age({age}){
    console.log('4. Age');
    
    return (<>
        <h3>The Age is {age}</h3>
    </>)
  })