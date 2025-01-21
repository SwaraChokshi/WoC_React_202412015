const textInput = document.getElementById('txt_input');
const listContainer = document.getElementById('list_container');
const addButton = document.getElementById('add_btn');

addButton.onclick = function () {
    if (textInput.value === '') {
        alert("Please enter your task first");
    } else {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';

        const taskText = document.createElement('span');
        taskText.textContent = textInput.value;
        taskText.className = 'task-text';

        checkbox.onclick = function () {
            if (checkbox.checked) {
                taskText.style.textDecoration = 'line-through';
            } else {
                taskText.style.textDecoration = 'none';
            }
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        deleteBtn.onclick = function () {
            listContainer.removeChild(listItem);
        };

        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteBtn);

        listContainer.appendChild(listItem);

        textInput.value = '';
    }
};
