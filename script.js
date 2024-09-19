const pen = document.querySelector(".pen");

// window.addEventListener("scroll", function () {
//   const scrollY = window.scrollY;
//   const targetX = 930;
//   const targetY = 660;

//   // You can control how much scroll is required to reach the target position
//   const maxScroll = 500; // Adjust based on your needs

//   // Calculate how much the pen should move
//   const x = (targetX * scrollY) / maxScroll;
//   const y = (targetY * scrollY) / maxScroll;

//   // Ensure the pen stops at (938, 664)
//   if (x > targetX) x = targetX;
//   if (y > targetY) y = targetY;

//   pen.style.transform = `translate3d(${x}px, ${y}px, 0)`;
// });

// // window.addEventListener('mousemove', (event) => {
// //     console.log(event.x, event.y);
// // })

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const targetX = 930;
    const targetY = 660;
    
    // Scroll range within which the animation should happen
    const scrollStart = 0;    // Start of scroll to begin the animation
    const scrollEnd = 500;   // Adjust based on the desired scroll length
    
    // Calculate scroll progress as a percentage (between 0 and 1)
    const scrollProgress = Math.min(Math.max((scrollY - scrollStart) / (scrollEnd - scrollStart), 0), 1);

    // Move the pen according to the scroll progress
    const x = targetX * scrollProgress;
    const y = targetY * scrollProgress;

    // Apply the translate3d transformation
    pen.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});