'use strict';

let express = require('express');

let app = express();
let port = 3000;

/**
 * Define a route on the path `/` with the `GET` method
 * Respond with the string: 'A'
 */
app.get('/', function (request, response) {
  response.send('A');
});

/**
 * Define a route on the path `/` with the `POST` method
 * Respond with the string: 'B'
 */
app.post('/', function (request, response) {
  response.send('B');
});

/**
 * Define a route on the path `/foo` with the `GET` method
 * Respond with the string: 'C'
 */
app.get('/foo', function (request, response) {
  response.send('C');
});

/**
 * Define a route on the path `/user/:id` with the `PUT` method
 * Respond with the ID from the path parameter
 */
app.put('/user/:id', function (request, response) {
  response.send(request.params.id);
});

/**
 * Define a route on the path `/add/:a/:b` with the `GET` method
 * Respond with `a` and `b` combined as one string (concatenated)
 */
app.get('/add/:a/:b', function (request, response) {
  response.send(request.params.a + request.params.b);
});

function handleServerListen() {
  console.log(`Server is listening on port ${port}`);
}
app.listen(port, handleServerListen);
