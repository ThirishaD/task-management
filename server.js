const express = require('express');
const app = express();
const port = 3000;

// Import routes
const tasks = require('./routes/tasks');

// Use routes
app.use('/tasks', tasks);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
