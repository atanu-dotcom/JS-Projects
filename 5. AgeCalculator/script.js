const birthDate = document.getElementById("birthday");
const button = document.getElementById("btn");
const result = document.getElementById("result");

function calculateAge() {
    const birthDayValue = birthDate.value;
    if (birthDate === " ") {
        alert("Please enter a valid date");
        return;
    } else {
        const age = getAge(birthDayValue);
        result.innerHTML = `Your age is ${age.years} years, ${age.months} months, and ${age.days} days.`;
    }
}

function getAge(birthDayValue) {
    const today = new Date();
    const birthDate = new Date(birthDayValue);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months += 12;
    }
    if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
    }
    return { years, months, days };
}

button.addEventListener("click", calculateAge);