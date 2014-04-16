window.indexedDB = window.indexedDB || window.mozIndexedDB ||
                window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction || 
                window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || 
                window.webkitIDBKeyRange || window.msIDBKeyRange;

var db = null;

function onerror(e) {
    console.log(e);
}

function open () {
    var version = 4;
    var request = indexedDB.open("todo-list", version);

    request.onupgradeneeded = function(e) {
        db = e.target.result;

        if(db.objectStoreNames.contains('todo-list')) db.deleteObjectStore('todo-list');

        var store = db.createObjectStore("todo-list", 
                    { keyPath: "timeStamp" });
    };

    request.onerror = onerror;

    request.onsuccess = function(e) {
        db = e.target.result;
        console.log("DB opened");
        getAllTodoItems();
    };
}

function add (todoText) {    
    var transaction = db.transaction(["todo-list"], "readwrite");
    var store = transaction.objectStore("todo-list");

    var data = {
        "text": todoText,
        "completada" : false,
        "timeStamp": new Date().getTime()
    };

    var request = store.put(data);

    request.onsuccess = function(e) {
        console.log("Sucessful add: "+e);
        getAllTodoItems();
    };

    request.onerror = function(e) {
        console.log("Error adding: ", e);
    };
}

function getAllTodoItems() {
    var todos = document.getElementById("todoItems");
    todos.innerHTML = "";

    var transaction = db.transaction(["todo-list"]);
    var store = transaction.objectStore("todo-list");

    var cursorRequest = store.openCursor();

    cursorRequest.onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            $('<li id="'+cursor.value.timeStamp+'">'+cursor.value.text+'<input type="checkbox" onclick="updateTodo('+cursor.value.timeStamp+');"><input type="button" value="Borrar" onclick="borraTodo('+cursor.value.timeStamp+');"></li>').appendTo('#todoItems'); // value is the stored object
            cursor.continue(); // get the next object
        } else {
        //Objects are in data[]
        }
    };

    cursorRequest.onerror = onerror;
}

function addTodo() {
    var todo = document.getElementById("todo");
    add(todo.value);
    todo.value = "";
}

function updateTodo(id) {
    var transaction = db.transaction(["todo-list"], "readwrite");
    var store = transaction.objectStore("todo-list");

    var valor = store.get(id);

    var borrar = store.delete(id);

    borrar.onsuccess = function(e) {
        valor.completada = "true";

        var request = store.put(valor);
        request.onsuccess = function(e) {
            getAllTodoItems();
        };

        request.onerror = function(e) {
         console.log("Error adding: ", e);
        };

    };

    borrar.onerror = function(e) {
        console.log("Error adding: ", e);
    };

}

function borraTodo(id) {
    var transaction = db.transaction(["todo-list"], "readwrite");
    var store = transaction.objectStore("todo-list");

    var request = store.delete(id);

    request.onsuccess = function(e) {
        getAllTodoItems();
    };

    request.onerror = function(e) {
        console.log("Error adding: ", e);
    };

}

function init() {
    open();
}

window.addEventListener("DOMContentLoaded", init, false);
