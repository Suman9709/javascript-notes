const inputBar = document.querySelector("#inputNum");
const submitButton = document.querySelector(".submitBtn")
const result = document.querySelector(".result");



function SquareRoot(num) {
    let sqrtsResult = [];
    for (let i = 1; i <= num; i++) {
        let sqrts = Math.sqrt(i);
        if (Number.isInteger(sqrts)) {
            sqrtsResult.push(i)
        }
    }
    return sqrtsResult
};


submitButton.addEventListener("click", () => {
    const number = inputBar.value;

    if (isNaN(number) || number < 1) {
        alert("please enter a valid number")
        inputBar.value = "";
        inputBar.focus();
        return
    }
    let sqrtval = SquareRoot(number)

    result.innerHTML = `perfect square up ${number} is ${sqrtval}`;
})





// const data = {
//     data1: "value",
//     val: function () {
//         console.log(this);
//         const ans = () => {
//         }
//         ans();
//     }
// }

// data.val()

// let fn = data.val;
// fn();

// const ds = () => {
//     console.log(this);

// }
// ds();