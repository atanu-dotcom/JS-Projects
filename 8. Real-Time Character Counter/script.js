const textareaE1 = document.getElementById("textarea");
const totalE1 = document.getElementById("total-counter");
const remainingE1 = document.getElementById("remaining-counter");

textareaE1.addEventListener("keyup", () => {
    updateCounter();
});

// updateCounter();

function updateCounter() {
    totalE1.innerText = textareaE1.value.length;
    remainingE1.innerText = textareaE1.getAttribute("maxLength") - textareaE1.value.length;

}