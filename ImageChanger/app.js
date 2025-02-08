
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
