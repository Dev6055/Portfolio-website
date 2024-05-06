// ========================================
// creating a Responsive navbar component
// ========================================

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click' , () => {
    headerElem.classList.toggle("active");
})

// ========================================
// creating a portfolio tabbed component
// ========================================


// This all not working we can check it in another device too till then we are commenting it.... Part to show projects seleceted

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    // console.log(e.target);

    // we will get which child element was clicked
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    if (!p_btn_clicked.classList.contains("p-btn")) return;
    // always remove the classList first then add the class
    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    // img_div.forEach((curElem) =>
    //   curElem.classList.remove("portfolio-image-active")
    // );

    p_btn_clicked.classList.add("p-btn-active");

    // to find the p-img class number of the images using the btn data attribute number

    const btn_num = p_btn_clicked.dataset.btnNum;
    // console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    // console.log(img_active);

    p_img_elem.forEach((curElem) =>
        curElem.classList.add("p-image-not-active")
    );

    img_active.forEach((curElem) =>
        curElem.classList.remove('p-image-not-active')
    );
});


// ========================================
//  Timer code
// ========================================

const counterNum = document.querySelectorAll(".counter-numbers");

counterNum.forEach((curElem) => {
    const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        if(initialNum > targetNumber){
            curElem.innerText = `${initialNum - 1} Sec Left (Times Slipping)`;
            setTimeout(updateNumber, 1000);
        }
        if(initialNum === targetNumber){
            curElem.innerText = `Ahhh Don't worry take your time`;
            setTimeout(updateNumber, 1000);
            document.querySelector('.timer-p').innerHTML = ' I was just kidding'
        }
    };
    updateNumber();
});


// ========================================
//  Swiper js code for testimonial
// ========================================
// Swiper Code

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: ".swiper_pagination",
        clickable: true
    },
});


const myJsmedia = (widthSize) => {
    if(widthSize.matches){
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
        });
    }else{
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
        });
    }
}

const widthSize = window.matchMedia("(max-width: 780px)");
// call the listner function at runtime
myJsmedia(widthSize);
// attach listner function on state changes
widthSize.addEventListener("change" , myJsmedia);





// ========================================
//  scroll to top
// ========================================

const heroSection = document.querySelector(".section-hero");
const footerElm = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

// I am adding the button element inside the div element above we can also do this in html using div but here we are creating the button using js
scrollElement.innerHTML = ` <ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

// add to the bottom of the page
footerElm.after(scrollElement);

// deleting the dom element
const scrollTop = () => {
    heroSection.scrollIntoView({ behavior: "smooth" });
};

document.querySelector(".scroll-top").addEventListener("click", scrollTop);

// get the data attributes


// ========================================
//  Scroll Reveal
// ========================================
const sr = ScrollReveal ({
    distance : '65px',
    duration : 2600,
    delay : 450,
    reset : true
});

sr.reveal('.section-hero-data' , {delay:200 , origin: 'left'});

sr.reveal('.section-hero-image' , {delay:200 , origin: 'right'});

sr.reveal('.bio-data' , {delay:200 , origin: 'right'});
