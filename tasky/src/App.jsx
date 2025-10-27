import React, { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {

    const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: ""
  });


  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", priority: 1, done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: 2, done: false },
      { id: 3, title: "Tidy up", deadline: "Today", priority: 3, done: false }
    ]
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (              
        <Task 
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          key={task.id}
          priority={task.priority}
          done={task.done}
          markDone={() => doneHandler(index)}
        />
      ))}
    </div>
  );

}

export default App;