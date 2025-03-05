
document.addEventListener("scroll", function() {
    let textBox = document.querySelector(".text-box");
    let boxTop = textBox.getBoundingClientRect().top;

    if (boxTop < window.innerHeight * 0.8) {
        textBox.classList.add("visible");
    }
});

