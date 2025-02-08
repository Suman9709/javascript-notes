const form = document.querySelector("form")
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const submitbtn = document.querySelector("#submit");
const errorpara = document.querySelector(".para");

form.addEventListener("submit", e => {
    if (fname.value === "" || lname.value === "") {
        e.preventDefault();
        // alert("Please enter a first name and last name")
        errorpara.innerHTML = "Please enter a first name and last name"
    }

})


/*

Sometimes, you'll come across a situation where you want to prevent an event from doing what it does by default. The most common example is that of a web form, for example, a custom registration form. When you fill in the details and click the submit button, the natural behavior is for the data to be submitted to a specified page on the server for processing, and the browser to be redirected to a "success message" page of some kind (or the same page, if another is not specified).

The trouble comes when the user has not submitted the data correctly — as a developer, you want to prevent the submission to the server and give an error message saying what's wrong and what needs to be done to put things right. Some browsers support automatic form data validation features, but since many don't, you are advised to not rely on those and implement your own validation checks.
*/
