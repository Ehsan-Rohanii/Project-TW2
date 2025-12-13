'use strict';
// Hambergeri Menu
const hamberIcon = document.querySelector('.categories');
const hamberMenu = document.querySelector('.hambergeri');
hamberIcon.addEventListener('click', () => {
    hamberMenu.classList.toggle('active-menu');
});

// heart icon sec5
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("active-heart-sec5")){
        e.target.classList.toggle("active1-heart-sec5");
    }
});

// fetch sec8
const sec8Fetch = document.querySelector(".sec8-div");
(async() => {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        data.slice(0,9).map((pr) => {
            sec8Fetch.innerHTML += `
            <div class="sec8-div-d">
                <img src="${pr.image}" alt="">
                <p>${pr.title.split(" ").slice(0,3).join(" ")}</p>
                <div class="sec8-div-d-price">
                    <p>$${pr.price}</p>
                    <span>70% off</span>
                </div>
            </div>
            `
        })
    } catch (error) {
        console.log("Error fetching data:", error);
    }
})();