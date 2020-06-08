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
    addToDo: function(todoText) {
        this.todo.push({
            todoText: todoText,
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
        this.displayToDo();
    },
    toggleAll: function() {
        var totalTodos = this.todo.length;
        var completedTodos = 0;
        this.todo.forEach(function(todo) {
            if (todo.completed === true) {
                completedTodos++;
            }
        });

        this.todo.forEach(function(todo) {
            if (completedTodos === totalTodos) {
                todo.completed = false;

            } else {
                todo.completed = true;
            }
        });
    }
};

var handlers = {
    displayBtn: function() {
        todoList.displayToDo()
    },

    addText: function() {
        var addTextInput = document.getElementById("addTextInput");
        todoList.addToDo(addTextInput.value);
        addTextInput.value = "";
        view.displayTodos();
    },
    changeToDo: function() {
        var changeTodoPosition = document.getElementById("changePositionInput");
        var changeTextInput = document.getElementById("changeTextInput");
        todoList.updateToDo(changeTodoPosition.value, changeTextInput.value)
        changeTodoPosition.value = "";
        changeTextInput.value = "";
        view.displayTodos();

    },
    deleteToDo: function(position) {
        todoList.delToDo(position);
        view.displayTodos();

    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.value);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();

    },
    toggleAllBtn: function() {
        todoList.toggleAll();
        view.displayTodos();

    }
}

var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = "";

        todoList.todo.forEach(function(todo, position) {

            var todoLi = document.createElement('li');
            var todoTextCompletion = "";

            if (todo.completed === true) {
                todoTextCompletion = "(x)" + todo.todoText;
            } else {
                todoTextCompletion = "( )" + todo.todoText;
            }

            todoLi.id = position;
            todoLi.textContent = todoTextCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);

        }, this);
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    },
    setUpEventListener: function() {
        var todosUl = document.querySelector("ul");

        todosUl.addEventListener("click", function(event) {
            var elementClicked = event.target;
            if (elementClicked.className === "deleteButton") {
                handlers.deleteToDo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};