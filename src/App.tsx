import React, {ReactNode, useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm.tsx";
import Task from "./Task/Task.tsx";

interface State {
    task: string,
    id: null | string
}

function App() {
    const [todo, setTodo] = useState<State[]>([
        {task: "Make homework", id: null},
        {task: "Take shower", id: null},
        {task: "Make koffee", id: null},
    ])

    const deleteTask = (index: number) => {
        const taskCopy = [...todo];
        taskCopy.splice(index, 1);
        setTodo([...taskCopy]);
    };

    const todoList: ReactNode = (<>
        {todo.map((task, index) => {
            task.id = index.toString()
            return <Task todo={task.task} removeTask={() => deleteTask(index)} key={task.id}/>
        })}
    </>);

    let message = "";
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        message = event.target.value;
    }

    const setMessage = () => {
      const todoCopy = [...todo];
      if (message.length > 0) {
        const newTodo = {task: message, id: todo.length.toString()}
        setTodo([newTodo, ...todoCopy])
      } else {
        alert("Write something to add new message!")
      }
    }

    return (
        <>
            <AddTaskForm
                handleChange={(event) => handleChange(event)}
                setMessage={setMessage}/>
            {todoList}
        </>
    )
}

export default App;
