class sliders {
    slideIndex = 1;

    constructor(options) {
        this.options = options;
        this.intialStuff();

        this.createNextAndPrevBtns();

        this.createDots();

        this.showSlides(1);

        this.setSlide();
    }
    intialStuff() {
        let { el: sliderElement, auto, slideClass } = this.options;
        if (!sliderElement) throw Error("I Have Not SliderElement");
        if (!slideClass) throw Error("I Have Not SlideClass");
        Number.isInteger(auto) ? this.auto = auto : this.auto = undefined;

        this.slider = [...sliderElement.children].filter(SlideElm => SlideElm.classList.contains(slideClass));
    }

    createNextAndPrevBtns() {
        let { el: sliderElement } = this.options;
        sliderElement.insertAdjacentHTML('beforeend', `
            <a class="next">&#10095;</a>
            <a class="prev">&#10094;</a>
        `);

        sliderElement.querySelector(".prev").addEventListener("click", () => this.prevFun());
        sliderElement.querySelector(".next").addEventListener("click", () => this.nextFun());
    }
    prevFun = () => {
        this.resetSlide();
        this.showSlides(this.slideIndex += 1);
    }
    nextFun = () => {
        this.resetSlide();
        this.showSlides(this.slideIndex -= 1);
    }
    currentFun = (n) => {
        this.resetSlide();
        this.showSlides(this.slideIndex = n);
    }
    createDots() {
        let { el: sliderElement } = this.options;
        let dotElements = [...this.slider].map((mySlide, index) => `<span class="dot" data-slide="${index + 1}"></span>`);

        let dots = document.createElement("div");
        dots.classList.add("dots");
        dots.innerHTML = `${dotElements.join("")}`;
        sliderElement.after(dots);

        this.dots = dots.querySelectorAll(".dot");
        this.dots.forEach(myDot => myDot.addEventListener("click", e => this.currentFun(parseInt(e.target.dataset.slide))));
    }

    showSlides(Number) {
        let { el: sliderElement, slideClass, currentSlider } = this.options;

        if (Number > this.slider.length) this.slideIndex = 1;
        if (Number < 1) this.slideIndex = this.slider.length;

        sliderElement.querySelector(`.${slideClass}.active`).classList.remove("active");
        this.dots.forEach(myDot => myDot.classList.remove("active"));

        this.slider[this.slideIndex - 1].classList.add("active");
        this.dots[this.slideIndex - 1].classList.add("active");

        currentSlider(this.slider[this.slideIndex - 1]);
    }

    setSlide() {
        if (this.auto != 0) {
            this.intevalID = setInterval(() => {
                this.showSlides(this.slideIndex += 1);
            }, this.auto);
        }
    }

    resetSlide() {
        clearInterval(this.intevalID);
        this.setSlide();
    }
}
