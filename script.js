var todoList = {
        todo: [],
        displayToDo: function() {
            if (this.todo.length === 0) {
                console.log("Your list is empty")
            } else {
                for (var i = 0; i < this.todo.length; i++) {
                    if (this.todo[i].completed === true) {
                        console.log("(x)", this.todo[i].todoText)
                    } else {
                        console.log("( )", this.todo[i].todoText)
                    }
                }
            }
        },
        addToDo: function(ToDoText) {
            this.todo.push({
                todoText: ToDoText,
                completed: false
            });
            this.displayToDo();
        },
        updateToDo: function(position, todoText) {
            this.todo[position].todoText = todoText;
            this.displayToDo();
        },
        delToDo: function(position) {
            this.todo.splice(position, 1);
            this.displayToDo();
        },
        toggleCompleted: function(position) {
            var todo = this.todo[position];
            todo.completed = !todo.completed;
            //this.todos[position].completed = !this.todos[position].completed;   *we declared var todo just for escape such long line of code
            this.displayToDo();
        },
        toggleAll: function() {
            var totalTodos = this.todo.length;
            var completedTodos = 0;
            for (var i = 0; i < totalTodos; i++) {
                if (this.todo[i].completed === true) {
                    completedTodos++;
                }
            }
            if (completedTodos === totalTodos) {
                for (var i = 0; i < totalTodos; i++) {
                    this.todo[i].completed = false;
                }
            } else {
                for (var i = 0; i < totalTodos; i++) {
                    this.todo[i].completed = true;
                }
            }
            this.displayToDo();
        }
    }
    /*var displayBtn = document.getElementById("displayBtn");
    var toggleAllBtn = document.getElementById("toggleAllBtn");

    displayBtn.addEventListener("click", function() {
        todoList.displayToDo();
    });

    toggleAllBtn.addEventListener("click", function() {
        todoList.toggleAll();
    });*/

var handlers = {
    displayBtn: function() {
        todoList.displayToDo()
    },

    addText: function() {
        var addTextInput = document.getElementById("addTextInput");
        todoList.addToDo(addTextInput.value);
        addTextInput.value = "";
    },
    changeToDo: function() {
        var changeTodoPosition = document.getElementById("changePositionInput");
        var changeTextInput = document.getElementById("changeTextInput");
        todoList.updateToDo(changeTodoPosition.value, changeTextInput.value)
        changeTodoPosition.value = "";
        changeTextInput.value = "";
    },
    deleteToDo: function() {
        var deletePosition = document.getElementById("deletePosition");
        todoList.delToDo(deletePosition.value);
        deletePosition.value = "";
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.value);
        toggleCompletedPositionInput.value = "";
    },
    toggleAllBtn: function() {
        todoList.toggleAll()
    }
}

var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = "";
        for (var i = 0; i < todoList.todo.length; i++) {
            var todoLi = document.createElement('li');
            todosUl.appendChild("todoLi");
        }
    }
};