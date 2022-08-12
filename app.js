let tasklist = document.querySelector('.tasklist');
let btnadd = document.querySelector('.add');
let btndel = document.querySelectorAll('.delbtn');

btnadd.addEventListener('click', ()=>{
    let newtask = document.createElement('div');
    newtask.classList.add('task');

    let newtaskcontent = document.createElement('div');
    newtaskcontent.classList.add('taskcontent');
    
    let newtasktitle = document.createElement('h2');
    newtasktitle.textContent = 'This is a task. Just a task.';

    let newtaskdescripction = document.createElement('p');
    newtaskdescripction.textContent = 'and this is just a description.'

    let newtaskdelbtn = document.createElement('a');
    newtaskdelbtn.classList.add('btn');
    newtaskdelbtn.classList.add('delbtn');
    newtaskdelbtn.setAttribute('href','#d');
    newtaskdelbtn.textContent = 'x';
    newtaskdelbtn.addEventListener('click',()=>{
        newtaskdelbtn.parentElement.remove();
    });


    newtaskcontent.appendChild(newtasktitle);
    newtaskcontent.appendChild(newtaskdescripction);


    newtask.appendChild(newtaskcontent);
    newtask.appendChild(newtaskdelbtn);

    tasklist.appendChild(newtask);

    btndel = document.querySelectorAll('.delbtn');
});