
import { useRecoilState } from "recoil";
import { filterAtom } from "./stores/atom/theme";

export function FilterTodo({todos}){
    const [filter,setFilter] = useRecoilState(filterAtom);

    const filterTodos = todos.filter((todo)=>{
        return (
            todo.title.toLowerCase().includes(filter.toLowerCase()) || 
            todo.description.toLowerCase().includes(filter.toLowerCase())
          );
    })

    return(
        <div>
            <input type="text" placeholder="Search" onChange={(e)=>setFilter(e.target.value)}/> <br />
            {filterTodos.map((todo)=>{
                return <div>
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>
                </div>
            })}
        </div>
    )
}
