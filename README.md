# Express.js Unhandled Promise Rejection
This repository demonstrates a common error in Express.js applications: unhandled promise rejections within route handlers.  Unhandled rejections can lead to crashes without clear error messages, making debugging difficult.

## Bug
The `bug.js` file shows an Express.js route handler that performs an asynchronous operation using `Promise`.  However, it lacks error handling, leading to an unhandled rejection if the asynchronous operation fails.

## Solution
The `bugSolution.js` file provides a corrected version with proper error handling using `.catch()`, ensuring that errors are gracefully handled and logged, preventing server crashes.