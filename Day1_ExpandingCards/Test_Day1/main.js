const panels = document.querySelectorAll('.panel__item');
const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

let currentPanel = 1;
let currentCircle = 1;


next.addEventListener('click', () => {
    currentCircle++;
    currentPanel++;

    if (currentPanel > panels.length && currentCircle > circles.length) {
        currentPanel = panels.length;
        currentCircle = circles.length;
    }
    update();
})
prev.addEventListener('click', () => {
    currentCircle--;
    currentPanel--;

    if (currentPanel < 1 && currentCircle < 1) {
        currentCircle = 1;
        currentPanel = 1;
    }
    update();
})
function update() {
    circles.forEach((circle, index) => {
        if (index < currentCircle) {
            circle.classList.add('active-progress');
        }
        else {
            circle.classList.remove('active-progress');
        }
    })
    panels.forEach((panel, index) => {
        if (index < currentPanel) {
            remove();
            panel.classList.add('active');
        }
    })
    function remove() {
        panels.forEach((panel) => {
            panel.classList.remove('active');
        })
    }

    const acProgress = document.querySelectorAll('.active-progress')
    console.log('acProgress: ' + acProgress.length);
    progress.style.width = ((acProgress.length - 1) / (circles.length - 1) * 100 + '%');
    console.log(((acProgress.length - 1) / (circles.length - 1) * 100 + '%'))
    console.log(currentCircle);
    if (currentCircle === 1) {
        prev.disabled = true;
    }
    else if (currentCircle === circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}