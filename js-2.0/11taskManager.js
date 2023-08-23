function createTaskPlanner() {
  const tasksList = [];
  
  return {
    addTask(task) {
      task.completed = false;
      tasksList.push(task);
      // console.log(tasksList);
    },

    removeTask(value) {
      // value = name or id
      tasksList.forEach( element => {
        if (element.id === value ) {
          delete element; 
        } else if (element.name === value) {
          delete element;  
        }
      })
    },

    getTasks() {
      return tasksList;
    },

    getPendingTasks() {

      return tasksList.filter( element => {
        if (element.completed === false) {
          return element;
        }
      })
    },

    getCompletedTasks() {
      return tasksList.filter( element => {
        if (element.completed === true) {
          return element;
        }
      })

    },

    markTaskAsCompleted(value) {
      // completed => id name
      tasksList.forEach( element =>{ 
        console.log(element.id);
        if (element.id === value ) {
          element.completed = true;  
        } else if (element.name === value) {
          element.completed = true;  
        }

      })
    },

    getSortedTasksByPriority () {
      return 
    },
  
    filterTasksByTag(tag) {
  
    },
  
    updateTask(taskId, updates) {
  
    }
  }
    
}

const planner = createTaskPlanner(); 


// Input
planner.addTask({
  id: 1,
  name: "buy milk",
  priority: 1,
  tags: ["shopping", "home"]
});

planner.addTask({
  id: 2,
  name: "buy apple",
  priority: 1,
  tags: ["shopping", "home"]
});

planner.addTask({
  id: 3,
  name: "buy orange",
  priority: 1,
  tags: ["shopping", "home"]
});
// planner.removeTask("buy milk")
// planner.removeTask(1)
// planner.getTasks()
planner.markTaskAsCompleted(1)
console.log(planner.getCompletedTasks())
console.log(planner.getPendingTasks())
// planner.addTask({
//     id: 2,
//     name: "calling to Juan",
//     priority: 3,
//     tags: ["personal"]
// });

// planner.markTaskAsCompleted("calling to Juan")

// // Output
// planner.getCompletedTasks()
// [{
//     id: 2,
//     name: "calling to Juan",
//     completed: true,
//     priority: 3,
//     tags: ["personal"]
// }]

// // Input
// planner.addTask({
//     id: 1,
//     name: "buy milk",
//     priority: 1,
//     tags: ["shopping", "home"]
// });

// planner.addTask({
//     id: 2,
//     name: "calling to Juan",
//     priority: 3,
//     tags: ["personal"]
// });

// // Output
// planner.filterTasksByTag("shopping")
// [{
//     id: 1,
//     name: "buy milk",
//     completed: false,
//     priority: 3,
//     tags: ["shopping", "home"]
// }]