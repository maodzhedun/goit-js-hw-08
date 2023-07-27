import throttle from "lodash.throttle";
// console.log(localStorage);


const form = document.querySelector(".feedback-form");
// console.log(form);
const email = document.querySelector(".feedback-form input");
// console.log(email);
const msg = document.querySelector(".feedback-form textarea")
// console.log(msg);



form.addEventListener('input', inputData);

function inputData(event) {
    console.log(event.currentTarget.value);
    localStorage.setItem("feedback-form-state", JSON.stringify({email, msg}));
}

