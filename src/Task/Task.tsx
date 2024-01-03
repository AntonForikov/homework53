import React from "react";

interface Props {
    todo: string,
    removeTask: React.MouseEventHandler,
    finished: React.MouseEventHandler,
    formStyle: object
}

const Task: React.FC<Props> = ({todo, removeTask, finished, formStyle}) => {
    return(
        <>
            <div style={formStyle}>
                <span>{todo}</span>
                <div>
                    <span>Finish task</span>
                    <input type="checkbox" onClick={finished}/>
                    <button onClick={removeTask}>Delete</button>
                </div>
            </div>
        </>
    )
};

export default Task;