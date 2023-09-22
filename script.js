// eslint-disable-next-line no-unused-vars
const clearForm = () => {
    const form = document.querySelector("form");
    form.reset(); // Corrected function name to reset the form
};

// eslint-disable-next-line no-unused-vars
const calculateMonthlyPayment = (event) => {
    event.preventDefault();
    const price = document.getElementById("purchaseInput").value;
    const interest = document.getElementById("interestInput").value;
    const months = document.getElementById("monthInput").value;
    const tradeIn = document.getElementById("tradeInput").value;
    const cashRebate = document.getElementById("cashInput").value;
    const downPayment = document.getElementById("paymentInput").value;
    const amtOwed = document.getElementById("owedInput").value; // Corrected variable name

    const monthlyPayment =
        ((price - tradeIn - cashRebate - downPayment - amtOwed) *
            (1 + interest / 100)) /
        months;

    document.getElementById("calculatePayment").textContent =
        "$" + monthlyPayment.toFixed(2);
};
