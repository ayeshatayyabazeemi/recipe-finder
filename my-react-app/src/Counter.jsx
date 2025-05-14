import react,{useState} from "react";


function Counter(){
    const [todolist,settodolist]=useState([]);
    const addtask=()=>{
    const task=document.getElementById("task").value;
    document.getElementById("task").value="";
    console.log({task});
    settodolist(t=>[...t,task]);
    }
    const deletetask=(index)=>{
        settodolist(t=>t.filter((_,idx)=>idx!==index));
    }
    const up=(index)=>{
       
        if (index>0){
        const newtodo=[...todolist];
        [newtodo[index],newtodo[index-1]]=[newtodo[index-1],newtodo[index]];
        settodolist(newtodo);
        };
    }
    const down=(index)=>{
        
        if (index<todolist.length-1){
        const newtodo=[...todolist];
        [newtodo[index],newtodo[index+1]]=[newtodo[index+1],newtodo[index]];
        settodolist(newtodo);
    };  
    }
    return(
        <div>
            <h1>TO DO LIST</h1>
            <br></br>
            <input type="text" placeholder="enter a task" id="task"/>
            <button onClick={addtask}>Add</button>
            <ol>
                {todolist.map((elements,index)=> 
                <li key={index}>
                    <span>{elements}</span>
                    <button className="del" onClick={()=>deletetask(index)}>DELETE</button>
                    <button className="move" onClick={()=>up(index)}>MOVE UP</button>
                    <button className="move" onClick={()=>down(index)}>MOVE DOWN</button>
                 </li>
                 )}
            </ol>
        </div>
    );


}
export default Counter