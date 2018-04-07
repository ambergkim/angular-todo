'use strict';

angular.module("todoListApp")
  .service('dataService', function ($http) {
    this.helloConsole = function () {
      console.log('This is the hello console service!');
    }

    this.getTodos = function (callback) {
      $http.get('mock/todos.json')
        .then(callback);
    }

    this.deleteTodo = function(todo, $index) {
      console.log(todo.name + ' deleted');
    }

    this.saveTodos = function(todo) {
      console.log(todo.length + ' todos saved');
    }
  });