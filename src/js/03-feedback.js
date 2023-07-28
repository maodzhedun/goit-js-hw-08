import throttle from "lodash.throttle";

const DATA_LS_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

form.addEventListener('input', throttle(inputData, 500));
form.addEventListener('submit', formSubmit);
let objectUserDAta = {};

loadPage();

function inputData(event) {
    objectUserDAta[event.target.name] = event.target.value.trim();
    console.log(objectUserDAta);
    localStorage.setItem(DATA_LS_KEY, JSON.stringify(objectUserDAta));
 }

function loadPage() { 
    const data = localStorage.getItem(DATA_LS_KEY);
    if (!data) {
        return;
    } 
    objectUserDAta = JSON.parse(data);
    Object.entries(objectUserDAta).forEach(([key, val]) => {
        form.elements[key].value = val
    })
}

function formSubmit(event) {
    event.preventDefault();
    console.log(objectUserDAta);
    event.currentTarget.reset();
    localStorage.removeItem(DATA_LS_KEY);
}