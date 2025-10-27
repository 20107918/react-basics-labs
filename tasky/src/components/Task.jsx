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
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description"> {props.description}</p>
            <p className={`priority-label ${priorityClass}`}>{priorityLabel}</p>
        </div>
    )

}

export default Task;