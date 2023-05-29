import { useState } from "react"
import "./holo.css"

function Todo(){
const [list, setlist]=useState('')
const [neww,setneww]=useState([])

function todo(e){
    setlist(el=> {
        return [e.target.value]
    })
}
 function add(todo){
    let lest = {
        id:Math.random(),
        todo:todo
    }
    setneww(el=>[...el,lest])

 }

 function del(id){
    console.log(neww[0].id)
   let koi= neww.filter(ele=>ele.id !== id )
    setneww(koi)
    console.log(neww.id)
 }

 let popopo = neww.map(ele=><div className="" ><p>{ele.todo}
 <button className="www" onClick={()=>{del(ele.id)}} >del</button></p></div>)




return(
    <div className="loo" >
     
        <div>

        <h1>TODO LIST</h1>
        <input
        className="www"
        type="text"
        name="todo"
        onChange={todo}/>


        <button className="ww" onClick={()=>add(list)} >add</button>
        </div>
        
       <div> <p>{popopo}</p></div>
    </div>
)
}
export default Todo