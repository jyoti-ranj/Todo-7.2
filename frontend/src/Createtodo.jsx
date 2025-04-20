import axios from "axios";
import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description , setDescription] = useState("");

    return(
        <div>
            <input type="text" placeholder="Enter the todo title here" onChange={(e)=>{
                setTitle(e.target.value);
            }}/> <br />
            <input type="text" placeholder="Enter the todo title here" onChange={(e)=>{
                setDescription(e.target.value);
            }}/> <br />
            <button onClick={()=>{
                axios.post('http://localhost:3000/todo',{
                    title:title,
                    description:description
                })
                .then((response)=>{
                    console.log(response.data);
                }).catch(()=>{
                    console.log("Error");
                })
                
            }}>Add Todo</button>

        </div>
    )
    
}