const ball = document.querySelector(".football");

// Get The Screen Width And Height To Adjust Values Dynamically
const screenWidth = window.innerWidth;

// Initial Position Of The Ball
const startX = screenWidth > 420 ? 100 : -300;
const startY = screenWidth > 420 ? 500 : 1200;

// Coordinates Of Where The Scroll Will Stop
// Subtract The Initial Starting Point To Compensate For The Change In
const targetX = (screenWidth > 420 ? 1210 : 105) - startX;
const targetY = (screenWidth > 420 ? 1270 : 1980) - startY;

// Scroll Range Within Which The Animation Should Happen. With Each Scroll Of The Value `window.scrollY` Increases By 100. With `scrollStart` Value Of 200, The Scroll Will Start After 2 Scrolls.
const scrollStart = screenWidth > 420 ? 200 : 1100;
const scrollEnd = screenWidth > 420 ? 800 : 1600;

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;

  // Calculate Scroll Progress As A Percentage (Between 0 And 1).
  const scrollPercentage = (scrollY - scrollStart) / (scrollEnd - scrollStart);

  // To Stop The Scroll After Reaching The Target Coordinates, We Introduced The `min` Method, So That Even After We Scroll Past The Target Coordinates, The Scroll Progress Does Not Exceed 1.
  // We Used The `Math.max` Method Inside So That (scrollY - scrollStart) Does Not Give A Negative Value.
  const scrollProgress = Math.min(Math.max(scrollPercentage, 0), 1);

  // Move The Ball According To The Scroll Progress
  const x = startX + targetX * scrollProgress;
  const y = startY + targetY * scrollProgress;
  const scale = screenWidth > 420 ? 1 + scrollProgress : 1; // `scale = 1 + (scrollProgress x 2)` For 3x Scaling. No Scaling For Smaller Screens

  // Apply The `translate3d` Transformation
  ball.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
});
