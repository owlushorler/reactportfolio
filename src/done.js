import { useState } from "react"
import "./holo.css"

function Done (prop){
    let [lopp,setlopp]=useState(true)
    let {app, ap}=prop
    let lor = app.map(ele =><div className="bool" >
        <div>{ele[0].todo.head}</div>
        <div>{ele[0].todo.date}</div>
        <div>{ele[0].todo.note}</div>
        <button className="www" onClick={()=>del(ele[0].id)} >del</button>
        
        </div>)


function  del(id){
    let oio= app.filter(ele => ele[0].id !== id)
        ap(oio)     
   }

    return (
        <div ><div>
            <button
            onClick={()=>setlopp(el=>el?false:true)}
             className="ww" >done task</button>
            </div>

            <div>
            {lopp && lor}
            </div>
            
        </div>
    )
}

export default Done