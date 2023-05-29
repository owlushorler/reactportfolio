import { useState } from "react";
import "./holo.css";
import Done from "./done";


function Task(){
    let [img,setimg]=useState(true)
   

    let [list,setlist]=useState("")
    let [usee,setuse]=useState([])
    
    let [task,settask]=useState({
      head:"",
      date:"",
      note:""  
    })

    let [done,setdone]=useState([])

    function up (e){
      settask(el=>{
        return{...el,[e.target.name]:e.target.value}
      })

    }

    function lo(todo){
      let jol = {
        id:Math.random(),
        todo:todo

      }
      setuse(el=>[...el,jol])
      console.log(usee)
    }

    function  del(id){
     let oio= usee.filter(ele => ele.id !== id)

     setuse(oio)
      
      
    }

   let pppp = usee.map(ele =>{
      return <div className="boo" >
        <div><b> {ele.todo.head}</b></div>
        <div>  {ele.todo.date}</div>
        <div><i>{ele.todo.note}</i> </div>
        <div>
          <button className="www" onClick={()=>ga(ele.id)} >done</button> <button
      onClick={()=>del(ele.id)} className="www" >del</button></div> </div>
    } )

  

    function ga(id){
     let orr = usee.filter(ele => ele.id == id )

      setdone(el => ([...el,orr]))
      console.log(done)
    }
    
   


    return(
          
        <div className="wooo" >
          <div className="ll">
          <div>TRACKING YOUR TASK "" </div>
          <div>TASK {usee.length}</div>
          <div>DONE TASK {done.length}</div>
          </div>
          <h5  > <h1>TASK MANAGER</h1></h5>
         <div> 
            <button className="ww" 
            onClick={()=>setimg(el => el?false:true)}
             >task</button>

            

           
           </div> 
        
         { img && <div >
                    create a task

               <div className="w" >
                    <p>  <input 
                    className="www"
                     placeholder="heading"
                     name="head"
                     onChange={up}
                     /></p> 
                    
                     <input 
                     className="www"
                     type="date"
                     name="date"
                     onChange={up}/>
                </div>

                <div className="wo" >
          
                <textarea
                placeholder="details"
                name="note"
                onChange={up}/>

                <button className="ww" onClick={()=>lo(task)}  >add</button>
                </div>
                <div>{pppp}</div>


            </div>}



            <Done
            ap={setdone}
             app={done}/>

            
        </div>
    )
    }
    export default Task