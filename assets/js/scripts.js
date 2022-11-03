const dropdown = document.querySelector('.nav-item.sub');
dropdown.addEventListener('click',(e)=>{
    e.preventDefault();
   // e.path[1].children[1].classList.toggle('active');
   dropdown.classList.toggle('active');
    console.dir(e.path[1].children[1]);
});