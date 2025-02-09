// document.addEventListener("DOMContentLoaded", function () {
//     const paraval = document.querySelector(".para");

//     let countdownDate = new Date("2025-03-10T23:59:59").getTime();

//     function updateCountdown() {
//         let now = Date.now();
//         let timeDate = countdownDate - now;

//         if (timeDate <= 0) {
//             clearInterval(x);
//             paraval.innerHTML = "Countdown Ended!";
//             return;
//         }

//         let day = Math.floor(timeDate / (1000 * 60 * 60 * 24));
//         let hr = Math.floor((timeDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         let min = Math.floor((timeDate % (1000 * 60 * 60)) / (1000 * 60));
//         let sec = Math.floor((timeDate % (1000 * 60)) / 1000);

//         paraval.innerHTML = `<strong>${day}</strong> days <strong>${hr}</strong> hours <strong>${min}</strong> minutes <strong>${sec}</strong> seconds`;
//     }
//     updateCountdown();
//     let x = setInterval(updateCountdown, 1000);
// });