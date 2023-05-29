import { useEffect, useState } from "react"
import "./holo.css"

function Meme (){
 let [meme,setmem]=useState('')
 let [count, usecount]=useState(0)
 useEffect(function (){
    fetch("https://api.imgflip.com/get_memes")
    .then(res=> res.json())
    .then(data => setmem(el => <div className="me" >
        <div><h2>{data.data.memes[count].name}</h2></div>
 <div><img className="me" src={data.data.memes[count].url} alt=""></img>  </div>
   </div>))


 },[count])

 function jo(){
    usecount(el => el + 1)
 }

 function dow(){
    usecount(el => el - 1)
 }
 function ppo(e){
    usecount(e.target.value)
 }

    return(
        <div className="ty" >
          <div><h2>MEMES GENRATOR</h2></div>  

          <div><input className="ww"
            type="number" min={0} max={100}
            onChange={ppo}/>
             <button className="ww"  onClick={()=>dow()} >down</button>
            <button className="ww" onClick={()=>jo()} >up</button>
            </div>  
            <div className="www" >number of most check meme on the internet  {count}</div>
            
           <div>{meme}</div> 


        
        </div>
    )
}

export default Meme