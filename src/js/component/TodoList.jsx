import React, {useState} from "react";


export const TodoList = () => {
    const [inputValue , setInputValue] = useState("");

    const [todos , setTodos] = useState ([]);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          const updatedTodos = [inputValue, ...todos];
          setTodos(updatedTodos);
          setInputValue("");
        };
    }

    return (
        <div className = "container">
            <h1>My Todo's</h1> 
            <ul>
                <li> 
                    <input type="text" 
                    onChange = {(e)=> setInputValue (e.target.value)}
                    value = {inputValue} 
                    onKeyPress= {handleKeyPress}
                    placeholder = "Add to list"/>
                </li>
              
                {todos.map((t, index) =>( 
                <li key={index} className={index !== undefined ? "fade-out" : ""}>
                    {t} <i class="fas fa-times" onClick ={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
                </li>))}
               
                
            </ul>
            <div> <h6>{todos.length} Tasks</h6></div>
        
        </div>
    )
};
