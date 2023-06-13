document.getElementById('myli').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    let task = document.getElementById('task').value;
  
    console.log({ task });
  
    let result = await fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task: task
      })
    })
    .then(response => response.json())
    .then(response => response)
    .catch(error => error.message);
    console.log({ result });
  
    let success = document.getElementById('success');
    result.id ? success.innerHTML = 'Task added successfully' : success.innerHTML = 'Task not added';
  });
  
  fetch('https://dummyjson.com/todos/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      todo: 'Use DummyJSON in the project',
      completed: false,
      userId: 5,
    })
  })
  .then(response => response.json())
  .then(console.log);
  
  fetch('https://dummyjson.com/todos/1', {
    method: 'PUT', /* or PATCH */
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      completed: false,
    })
  })
  .then(response => response.json())
  .then(console.log);
  
  fetch('https://dummyjson.com/todos/1', {
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(console.log);