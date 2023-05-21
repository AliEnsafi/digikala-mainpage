// show header in scroll 
// Hide Header on on scroll down
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.scrollnav').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.scrollnav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.scrollnav').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}




//  backToTop
const backToTop = document.querySelector(".backtoTop");

backToTop.addEventListener('click', function (e) {
    scrollTop(0, 1000)
})
function scrollTop(scroll, duration) {
    let doc = document.documentElement;
    let currentTime = duration;
    let speed = 15;
    let animate = () => {
        if (currentTime < 0) return;
        setTimeout(() => {
            doc.scrollTop -= doc.scrollTop / (currentTime / speed);
            currentTime -= speed;

            animate();
        }, speed);
    }
    animate();
}

// sliders
new sliders({
    el: document.querySelector("#sliders"),
    slideClass: "slider",
    // currentSlider: (slider) => {
    //     console.log(slider);
    // },
    auto: 3000
})

// support btn

// support btn
function myFun1() {
    let supporticon = document.getElementById("supporticon");
    let questionBox = document.querySelector(".online-support")
    if (supporticon.textContent = "headset_mic") {
        questionBox.style.display = "block";
    }
}

function closeBox() {
    let questionBox = document.querySelector(".online-support")
    supporticon.textContent = "headset_mic";
    questionBox.style.display = "none";
}

// showandhide 
function showMoreFun() {
    let showandhide = document.querySelector(".showandhide");
    let showMore = document.querySelector(".footer-explains-show");
    let hidemore = document.querySelector(".footer-explains-hide");

    let grid1 = document.querySelector(".footer-explains");
    grid1.classList.remove("col-lg-6");
    grid1.classList.add("col-lg-8");

    let grid2 = document.querySelector(".footer-Certificate");
    grid2.classList.remove("col-lg-6");
    grid2.classList.add("col-lg-4");

    showMore.style.display = "none";
    showandhide.style.display = "block";
    hidemore.style.display = "block";
}

function hidemoreFun() {
    let showandhide = document.querySelector(".showandhide");
    let showMore = document.querySelector(".footer-explains-show");
    let hidemore = document.querySelector(".footer-explains-hide");

    let grid1 = document.querySelector(".footer-explains");
    grid1.classList.remove("col-lg-8");
    grid1.classList.add("col-lg-6");

    let grid2 = document.querySelector(".footer-Certificate");
    grid2.classList.remove("col-lg-4");
    grid2.classList.add("col-lg-6");


    showMore.style.display = "block";
    showandhide.style.display = "none";
    hidemore.style.display = "none";
}