const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an error
    setTimeout(() => reject(new Error('Something went wrong')), 100);
  });
}