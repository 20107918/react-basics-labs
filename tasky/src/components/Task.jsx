import React from 'react';

const Task = (props) => {

    const getPriorityLabel = (priority) => {
        switch (priority) {
        case 3:
            return 'High'
        case 2:
            return 'Medium'
        case 1:
            return 'Low'
        default:
            return ''
        }
    };

    const priorityLabel = getPriorityLabel(props.priority);
    const priorityClass = priorityLabel.toLowerCase();
    
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description"> {props.description}</p>
            <p className={`priority-label ${priorityClass}`}>{priorityLabel}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )

}

export default Task;