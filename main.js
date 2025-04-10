// making toggle for mobile screan 
let toggle = document.querySelector("nav .toggle-menu");
let toggleUlli = document.querySelectorAll("header nav .toggle-menu + ul li");
let array_li = Array.from(toggleUlli);
let toggleUla = document.querySelectorAll("header nav .toggle-menu + ul li a");
let array_a = Array.from(toggleUla);

toggle.addEventListener("click", function () {
    array_li.forEach((li) => {
        li.style.display = "block"

        // change the active class for a 
        array_a.forEach((a) => {
            a.addEventListener("click", function (e) {
                array_a.forEach((a) => a.classList.remove("active"))
                e.currentTarget.classList.add("active")
            })
        })
    })
})

toggleUlli.forEach((li) => {
    li.addEventListener("click", function (e) {
        toggleUlli.forEach((li) => {
            li.style.display = "none";
        })
        
    }
    )
})




//making a searhc bar 
let search_icon = document.querySelector("header nav .form i");
let search_input = document.querySelector("header nav .form input");

search_icon.addEventListener("click", function () {
    search_input.style.display = "block";
    search_input.focus(); // Optional: focus the input
});
// Hide the input when Enter is pressed inside it
search_input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        search_input.style.display = "none";
    }
});




// making images section with js 
const shuffle = document.querySelectorAll(".shuffle li")
const shuffle_arry = Array.from(shuffle);
const images = document.querySelectorAll(".imgs-container .box")
const images_array = Array.from(images)

shuffle_arry.forEach(item => {
    item.addEventListener("click", function (e) {
        shuffle_arry.forEach(li => li.classList.remove("active"))
        e.currentTarget.classList.add("active")
        images_array.forEach(image => { image.style.display = "none";})
        const targetImages = document.querySelectorAll(e.currentTarget.dataset.content);
        targetImages.forEach(image => {image.style.display = "block";});
    })
});


//increase number counter
let statsSection = document.querySelector(".stats")
let statsDiv = document.querySelectorAll(".stats .box div ");

//skills setion 
const skillsSection = document.querySelector(".our-skills");
const spanSkills = document.querySelectorAll(".prog span");
let start = false;


window.onscroll = function () {
    if (window.scrollY >= statsSection.offsetTop - 450) {
        if (!start) {
            statsDiv.forEach((div)=> setcounter(div))
        }
        start = true;
    }
    // for progress bar in skills section 
    if (window.scrollY >= skillsSection.offsetTop) {
        spanSkills.forEach((span) => {
            span.style.width = span.dataset.progress;
            spanSkills.forEach(span => {
                // Wait 300ms, then show pseudo-elements again
                setTimeout(() => {
                    span.classList.remove('hide-pseudo');
                    span.classList.add('show-pseudo');
                }, 300);
            });
        })
    }
}
// increase the number to the limit 
function setcounter(el) {
    let goal = el.dataset.number;
    let counter = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(counter);
        }
    }, 10);
}


// Dynamic chage for the copyright year in footer 
let spanyear = document.querySelector("#currentyear");
let currentyear = new Date();
spanyear.innerText = currentyear.getFullYear();
