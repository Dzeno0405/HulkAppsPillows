document.addEventListener("DOMContentLoaded", function () {

    const blueBarLeftTextElement = document.querySelector("#blue_bar_left .blue_bar_text");
    const blueBarCenterTextElement = document.querySelector("#blue_bar_center .blue_bar_text");
    const blueBarRightTextElement = document.querySelector("#blue_bar_right .blue_bar_rtext");

    const originalLeftText = blueBarLeftTextElement.textContent;
    const originalCenterText = blueBarCenterTextElement.textContent;
    const originalRightText = blueBarRightTextElement.textContent;

    const blueBarTexts = [
      {
        leftText: "Veteran ownerd Busines",
        centerText: "Are You A Vet, Then Come and See Us ",
        rightText: "Contact Us"
      },
      {
        leftText: originalLeftText,
        centerText: originalCenterText,
        rightText: originalRightText
      }
    ];

    let currentIndex = 0;

    function animateText(element, newText, duration) {
      element.style.transform = "perspective(400px) rotateX(0deg)";
      element.style.transition = `transform ${duration / 2}ms ease-out`;

      setTimeout(function () {
        element.style.transform = "perspective(400px) rotateX(90deg)";
      }, 0);

      setTimeout(function () {
        element.textContent = newText;
        element.style.transform = "perspective(400px) rotateX(0deg)";
      }, duration / 2);
    }

    function changeTextWithAnimation() {
      const newTexts = blueBarTexts[currentIndex];
      const animationDuration = 1000; 

      animateText(blueBarLeftTextElement, newTexts.leftText, animationDuration);
      animateText(blueBarCenterTextElement, newTexts.centerText, animationDuration);
      animateText(blueBarRightTextElement, newTexts.rightText, animationDuration);

      currentIndex = (currentIndex + 1) % blueBarTexts.length;
    }

    setInterval(changeTextWithAnimation, 5000);

    setInterval(function () {
      currentIndex = 0;
      blueBarLeftTextElement.textContent = originalLeftText;
      blueBarCenterTextElement.textContent = originalCenterText;
      blueBarRightTextElement.textContent = originalRightText;
    }, blueBarTexts.length * 5000); 
  });