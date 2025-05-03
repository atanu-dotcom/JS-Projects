const nextE1 = document.querySelector("#next");
const previewE1 = document.querySelector("#preview");

const stepsE1 = document.querySelectorAll(".step");

const progressE1 = document.querySelector(".progress-bar-font");

let currentChecked = 1;

nextE1.addEventListener("click", () => {
    currentChecked++;
    if (currentChecked > stepsE1.length) {
        currentChecked = stepsE1.length;
    }
    updateProgressBar();
});

previewE1.addEventListener("click", () => {
    currentChecked--;
    if (currentChecked < 1) {
        currentChecked = 1;
    }
    updateProgressBar();
});

function updateProgressBar() {
    stepsE1.forEach((stepsE1, idx) => {
        if (idx < currentChecked) {
            stepsE1.classList.add("checked");
            stepsE1.innerHTML = `
            <i class="fa-solid fa-check"></i>
            <small>${idx === 0 ? "Start" :
                    idx === stepsE1.length - 1 ? "Final" : "Step" + idx
                }</small>
            `
        } else {
            stepsE1.classList.remove("checked")
            stepsE1.innerHTML = `
            <i class="fa-solid fa-xmark"></i>
            `
        }
    });

    const checkedNumber = document.querySelectorAll(".checked");

    progressE1.style.width = ((checkedNumber.length - 1) / (stepsE1.length - 1)) * 100 + "%";

    if (currentChecked === 1) {
        previewE1.disabled = true;
    } else if (currentChecked === stepsE1.length) {
        nextE1.disabled = true;
    } else {
        previewE1.disabled = false;
        nextE1.disabled = false;
    }

}