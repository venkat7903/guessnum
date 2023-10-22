const responseEl = document.getElementById("response");
let randomNum = Math.ceil(Math.random() * 10);
let spinner = document.getElementById("spinner");

const guessNum = function(event) {
    spinner.classList.toggle("d-none");
    responseEl.classList.toggle("d-none");
    if (parseInt(event.target.value) === randomNum) {
        setTimeout(() => {
            responseEl.classList.remove("failed");
            responseEl.classList.toggle("d-none");
            spinner.classList.toggle("d-none");
            responseEl.textContent = "Correct Guess";
            responseEl.classList.add("success");
        }, 1000);
        randomNum = Math.ceil(Math.random() * 10);
        console.log(randomNum);
    } else {
        setTimeout(() => {
            responseEl.classList.remove("success");
            responseEl.classList.toggle("d-none");
            spinner.classList.toggle("d-none");
            responseEl.textContent = "Better Luck next time";
            responseEl.classList.add("failed");
        }, 1000);
    }
};

console.log(randomNum);