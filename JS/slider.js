document.addEventListener("DOMContentLoaded", function () {
    const slides = [
      {
        imagePath: "img/AdobeStock_277241798.png",
        contentHTML: `
          <h1 id="main_title">Shop Hotel Pillows</h1>
          <h2 id="italic_part">
            <i>Experience hotel relaxation in the comfort of your home.</i>
          </h2>
          <p id="text_part">
            Bring the same bedding featured in your favorite hotel or resort to your
            home. Find your favorite pillow from the most popular hotel chains:
            <strong>Marriott ®, Hampton Inn ®, Hilton ®, Four Seasons ®, Ritz-Carlton ®,</strong>
            and so much more!
          </p>
          <div id="button_div">
            <button class="button"><strong>SHOP HOTEL PILLOWS</strong></button>
            <button class="button"><strong>FIND YOUR DREAM PILLOW</strong></button>
          </div>
        `,
      },
      {
        imagePath: "img/AdobeStock_v2.png", 
        contentHTML: `
            <h1 id="main_title">Just For Show</h1>
            <h2 id="italic_part">
            <i>This Test is Just a Placeholder</i>
            </h2>
            <p id="text_part">
                Just placeholder text here to show that this part is moving, cool is it not!!
            </p>
            <div id="button_div">
                <button class="button"><strong>BUTTON ONE</strong></button>
                <button class="button"><strong>BUTTON TWO</strong></button>
            </div>
        `,
      },
      {
        imagePath: "img/AdobeStock_v3.png", 
        contentHTML: `
            <h1 id="main_title">Just For Show v2.0</h1>
            <h2 id="italic_part">
            <i>This Test is Just a Placeholder v2.0</i>
            </h2>
            <p id="text_part">
                Just placeholder text here to show that this part is moving, cool is it not!!
            </p>
            <div id="button_div">
                <button class="button"><strong>BUTTON ONE</strong></button>
            </div>
        `,
      },
    ];
  
    const sliderDots = document.querySelectorAll(".slider-dot");
    const girlImage = document.getElementById("girl_sleep");
    const mainDiv = document.getElementById("main_div");
  
    let currentSlideIndex = 0;
  
    function updateSlider() {
      girlImage.src = slides[currentSlideIndex].imagePath;
      mainDiv.innerHTML = slides[currentSlideIndex].contentHTML;
  
      sliderDots.forEach((dot) => dot.classList.remove("active"));
  
      sliderDots[currentSlideIndex].classList.add("active");
    }
  
    function handleDotClick(event) {
      const slideIndex = event.target.getAttribute("data-slide");
      if (slideIndex !== null) {
        currentSlideIndex = parseInt(slideIndex);
        updateSlider();
        clearInterval(autoSlideInterval);
      }
    }
  
    sliderDots.forEach((dot) => {
      dot.addEventListener("click", handleDotClick);
    });
  
    function changeSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      updateSlider();
    }
  
    const autoSlideInterval = setInterval(changeSlide, 20000);
  
    updateSlider();
});
  