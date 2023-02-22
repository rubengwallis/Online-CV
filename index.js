const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementsRight = document.querySelectorAll(".hidden-right");
hiddenElementsRight.forEach((el) => observer.observe(el));

const hiddenElementsBackground = document.querySelectorAll(".hidden-background");
hiddenElementsRight.forEach((el) => observer.observe(el));