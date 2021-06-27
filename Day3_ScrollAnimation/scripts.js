const boxes = document.querySelectorAll('.box');
console.log(boxes);
window.addEventListener('scroll', () => {
    //innetHeight lấy giá trị chiều cao làm cờ để kéo bottom
    const triggerBottom = window.innerHeight / 5 * 4;
    console.log(triggerBottom);
    boxes.forEach(box => {
        //getBoundingClientRect trả về vị trí position mà nó đứng
        //vị trí top của mỗi cái box
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop);
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
})