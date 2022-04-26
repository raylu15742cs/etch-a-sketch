const box_container = document.querySelector('.box_container')

let createbox = function(height) {
    heights = 700/ height;
    heights += 'px';
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
}
createbox(4);