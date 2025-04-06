// Get all list items inside the shuffle list
const shuffleList = document.querySelectorAll('.shuffle li');


shuffleList.forEach(item => {
    item.addEventListener("click", function () {
        shuffleList.forEach(li => li.classList.remove("active"));
        this.classList.add("active");
        // this.classList.add('active');
    })
})
