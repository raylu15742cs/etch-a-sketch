const box_container = document.querySelector('.box_container')
let createbox = function(height) {
    heights = (700/height) + 'px';
    for (let i = 1; i <= height; i++) {
        box = document.createElement('div');
        box.classList.add(i);
        box_container.appendChild(box);
        for (let i = 1; i <= height; i++) {
            minibox = document.createElement('div');
            minibox.classList.add(i);
            minibox.classList.add('border');
            minibox.style.height = heights;
            minibox.style.width = heights;
            box.appendChild(minibox)
        }
    }
    const listens = document.querySelectorAll(".border")
    listens.forEach(listen =>  {
        listen.addEventListener('mouseover', function() {
            listen.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16) ;
    })
})

}
createbox(10);


const changesize = document.querySelector('button')
changesize.addEventListener('click', function() {
    size = window.prompt('');
    if (size < 64) {
        document.querySelector(".box_container").innerHTML = '';
        createbox(size);
    }
})

