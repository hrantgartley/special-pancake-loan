// eslint-disable-next-line no-unused-vars
const clearOutput = () => {
    const output = document.getElementById("calculatePayment");
    output.innerHTML = "";
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
    const amtOwed = document.getElementById("owedInput").value;

    const monthlyPayment =
        (price -
            tradeIn -
            cashRebate -
            downPayment +
            amtOwed * (1 + interest / 100)) /
        months;

    if (isNaN(monthlyPayment)) {
        alert("Fill in all the fields!");
        return;
    } else if (monthlyPayment === Infinity) {
        console.log(monthlyPayment);
        return;
    } else if (monthlyPayment < 0) {
        alert("Fill in all the fields!");
        return;
    }

    document.getElementById("calculatePayment").textContent =
        "Monthly Car Payment = " +
        "$" +
        monthlyPayment.toFixed(2) +
        " " +
        "per month";
};
