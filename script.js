const pen = document.querySelector(".pen");

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  
  // Coordinates Of Where The Scroll Will Stop
  const targetX = 930;
  const targetY = 660;

  // Scroll Range Within Which The Animation Should Happen. With Each Scroll Of The Value `window.scrollY` Increases By 100
  const scrollStart = 0;
  const scrollEnd = 500;

  /*
  Calculate Scroll Progress As A Percentage (Between 0 And 1). 
  To Stop The Scroll After Reaching The Target Coordinates, We Introduced The `min` Method, So That Even After We Scroll Past The Target Coordinates, The Scroll Progress Does Not Exceed 1.
  */
  const scrollProgress = Math.min((scrollY - scrollStart) / (scrollEnd - scrollStart), 1);

  // Move The Pen According To The Scroll Progress
  const x = targetX * scrollProgress;
  const y = targetY * scrollProgress;

  // Apply The `translate3d` Transformation
  pen.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});
