import { useEffect } from "react"

export default function Block(){
    useEffect(()=>{
        console.log('Block Created!!!');
        return ()=>{
            console.log('Block Removed!!!'); //Cleanup Effect
        }
        
    })
    return (<div style={{
        background: "pink",
        color: 'red',
        margin: '10px,'
    }}>I am a Block</div>
    
    )
}