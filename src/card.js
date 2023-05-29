import { useState } from "react"
import "./index"
import "./holo.css"

function Name(){
    const [man,setman]=useState({
        mail:"",pass:"",pas:""
    })
 function kol(event){
    setman(ele=>{
        const {name,value}=event.target
        return{
         ...man,[name]:value
        }
    })
 }

 function sub(){
  man.pass == man.pas?alert("login success"):alert("incorrect password")
 }

    return(
   <div className="book" >
    <form onSubmit={sub} >

   <p> <input
    type="text"
    placeholder="email"
    name="mail"
    onChange={kol}
    value={man.mail}
    /></p>

<p><input
    type="password"
    placeholder="password"
    name="pas"
    onChange={kol}
    value={man.pas}
    /></p>

<p> <input
    type="password"
    placeholder="password"
    name="pass"
    onChange={kol}
    value={man.pass}
    /></p>
    <button className="aaa" >summit</button>
    </form>
    </div> 
    )

}
export default Name