import React, { useState } from 'react';

const TodoList = () => {
    const [inputTask, setInputTask] = useState('');
    const [list, setList] = useState([]);

    const handleAddTodo = () => {
        const newTask = {
            id: Math.random(),
            todo: inputTask
        };

       setList([...list, newTask]);
        setInputTask('');
    };

   const handleDeleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    };

   const handleInputChange = (event) => {
        setInputTask(event.target.value);
    };

   return (
        <div className="todo">
            <h1>My To-Do List</h1>

            <div className="input-div">
                <input className="input" type="text" value={inputTask}
                   onChange={handleInputChange} placeholder="Enter a task" />

                <button className="btn" onClick={handleAddTodo}>ADD</button>
            </div>

           <ul>
                { list.map((todo) => (
                    <li className="task-list" key={todo.id}>
                        {todo.todo}
                        <button className="dlt" onClick={() => handleDeleteTodo(todo.id)}>
                           Delete
                       </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList; 