const addBtn = document.getElementById('add-btn');
const input = document.getElementById("todo-input")
const list = document.getElementById("todo-list");


addBtn.addEventListener('click',function(){
    const task = input.value.trim()
    if(task !== ''){
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = task
    li.appendChild(span)
    list.appendChild(li);
    input.value = ''
    }
    
})