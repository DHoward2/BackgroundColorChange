const h1 = document.querySelector('h1');
const body = document.querySelector('body');


h1.addEventListener('click', function() {
    body.style.backgroundColor = 'red';
})

body.addEventListener('click', function(){
    body.style.backgroundColor = 'white'
})