import React from "react";

interface Props {
    todo: string,
    removeTask: React.MouseEventHandler
}

const formStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    width: "500px"
}
const Task: React.FC<Props> = ({todo, removeTask}) => {
    return(
        <>
            <div style={formStyle}>
                <span>{todo}</span><button onClick={removeTask}>Delete</button>
            </div>
        </>
    )
}

export default Task;