import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";

// const email = form.email.value;
// const message = form.message.value;

const email = form.email;
const message = form.message;

form.addEventListener('input', throttle(setInLocalStorage, 500));
form.addEventListener('submit', submitForm);

checkLocalStorage();

function setInLocalStorage() {
    // const email = form.email.value;
    // // console.log(email);
    // const message = form.message.value;

    const feedback = {
        email: email.value,
        message: message.value,
        
    }
    const feedbackJSON = JSON.stringify(feedback);
    localStorage.setItem(LOCALSTORAGE_KEY, feedbackJSON);
}

function checkLocalStorage(evt) {
    // const parsedFeedback = localStorage.getItem(LOCALSTORAGE_KEY || "");
    const parsedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if (parsedData) {
        email.value = parsedData.email;
        message.value = parsedData.message;
    } else {
        email.value = "";
        message.value = "";
    }

}

function submitForm(evt) {
    evt.preventDefault();

    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}
