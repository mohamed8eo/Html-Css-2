const shuffle = document.querySelectorAll(".shuffle li")
const shuffle_arry = Array.from(shuffle);

const images = document.querySelectorAll(".imgs-container .box")
const images_array = Array.from(images)

shuffle_arry.forEach(item => {
    item.addEventListener("click", function (e) {
        shuffle_arry.forEach(li => li.classList.remove("active"))
        e.currentTarget.classList.add("active")
        images_array.forEach(image => {
            image.style.display = "none";
            // document.querySelector(e.currentTarget.dataset.content).style.display = "block";
        })
        const targetImages = document.querySelectorAll(e.currentTarget.dataset.content);
        targetImages.forEach(image => {
            image.style.display = "block";
        });
    })
});