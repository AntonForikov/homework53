import React from "react";

interface Props {
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    setMessage: React.MouseEventHandler
}

const formStyle = {
    display: "flex",
    justifyContent: "space-between"
}
const AddTaskForm: React.FC<Props> = ({handleChange, setMessage}) => {
    return(
        <>
            <div style={formStyle}>
                <input type={"text"} onChange={handleChange}/> <button onClick={setMessage}>Add</button>
            </div>
        </>
    )
}

export default AddTaskForm;