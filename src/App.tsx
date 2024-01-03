import React, {ReactNode, useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm.tsx";
import Task from "./Task/Task.tsx";

interface State {
    task: string,
    id: null | string,
    finished: boolean
}

function App() {
    const [todo, setTodo] = useState<State[]>([
        {task: "Make homework", id: null, finished: false},
        {task: "Take shower", id: null, finished: false},
        {task: "Make koffee", id: null, finished: false},
    ]);

    const deleteTask = (index: number) => {
        const taskCopy = [...todo];
        taskCopy.splice(index, 1);
        setTodo([...taskCopy]);
    };

    let taskStyle: object;
    const finishedTask = (index: number) => {
        const todoCopy = [...todo];
        todoCopy[index].finished = !todoCopy[index].finished;
        console.log(todoCopy);
        setTodo([...todoCopy]);
    };

    const todoList: ReactNode = (<>
        {todo.map((task, index) => {
            task.id = index.toString();
            if (task.finished) {
                taskStyle = {
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                    width: "500px",
                    borderRadius: "8px",
                    paddingLeft: "5px"
                }
            } else if (!task.finished) {
                taskStyle = {
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                    width: "500px",
                    borderRadius: "8px",
                    paddingLeft: "5px"
                }
            }
            return <Task todo={task.task} removeTask={() => deleteTask(index)} key={task.id}
                         finished={() => finishedTask(index)} formStyle={taskStyle}/>
        })}
    </>);

    let message = "";
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        message = event.target.value;
    };

    const setMessage = () => {
        const todoCopy = [...todo];
        if (message.length > 0) {
            const newTodo = {task: message, id: todo.length.toString(), finished: false}
            setTodo([newTodo, ...todoCopy]);
        } else {
            alert("Write something to add new message!");
        }
    };

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
