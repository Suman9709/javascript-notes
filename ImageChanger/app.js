
const img1 = document.querySelector(".img1");
const otherImages = document.querySelectorAll(".img-row img");

document.addEventListener("DOMContentLoaded", () => {

    otherImages.forEach(img => {
        img.addEventListener("click", () => {
            let temproaryimg = img1.src;
            img1.src = img.src;
            img.src = temproaryimg;
            
        });
    });
});



// To test a function and get back its return
// function printElapsedTime(testFn) {
//     const startTime = Date.now();
//     const result = testFn();
//     const endTime = Date.now();
  
//     console.log(`Elapsed time: ${String(endTime - startTime)} milliseconds`);
//     return result;
//   }
  
//   const yourFunctionReturn = printElapsedTime(yourFunction);
  