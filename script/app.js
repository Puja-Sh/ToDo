const addBtn = document.getElementById('add-Btn');

const todoItemsArray= [];

const renderlists = () => {
    const todoLists = document.getElementById('todo-show-list');
    
    todoLists.innerHTML = '';

    todoItemsArray.forEach((list) => {     /* 'list' is a new name taken here */
        const listElement = document.createElement('li');
        listElement.textContent = list.inputText;
        todoLists.append(listElement);
    });
};

const addHandler = () => {
    const inputText = document.getElementById('input-text').value;
    if ( inputText.trim() === '') {
        return;
    }

    const newTodo = {
        inputText,
        id: Math.random()
    };

    todoItemsArray.push(newTodo);
    renderlists();
};


addBtn.addEventListener('click',addHandler);