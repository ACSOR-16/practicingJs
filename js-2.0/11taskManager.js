function createTaskPlanner() {
  const tasksList = [];
  
  return {
    addTask(task) {
      tasksList.push(task);
      console.log(tasksList);
    },

    removeTask(value) {
      // value = name or id
      tasksList.forEach( element => {
        if (value === element.name || element.id) {
          
          console.log(element.name);
          delete element;
        }
      })
    },

    getTasks() {

    }
  }
  
  

  function getTasks() {

  }
  
  function getPendingTasks() {

  }

  function getCompletedTasks() {


  }

  function markTaskAsCompleted(value) {

  }

  function getSortedTasksByPriority () {

  }

  function filterTasksByTag(tag) {

  }

  function updateTask(taskId, updates) {

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

planner.removeTask("buy milk")
planner.removeTask(1)
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