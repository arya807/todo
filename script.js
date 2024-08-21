document.getElementById('addBtn').addEventListener('click', function() {
    const taskText = document.getElementById('todo-input').value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('todo-list').appendChild(li);

    document.getElementById('todo-input').value = ''; // Clear input
});
