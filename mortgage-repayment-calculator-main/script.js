function calculate() {
    const amount = document.getElementById("amount").value;
    const term = document.getElementById("term").value;
    const rate = document.getElementById("rate").value / 100 / 12;
    const interestOnly = document.getElementById("interestonly").checked;

    const numberOfPayments = term * 12;
    const repayments = amount * (rate * (1 + rate) ** numberOfPayments) / ((1 + rate) ** numberOfPayments - 1);
    const total = repayments * numberOfPayments;

    const repaymentsElement = document.getElementById("monthlypayments");
    repaymentsElement.textContent = repayments.toFixed(2).toString();
    const totalElement = document.getElementById("total");
    totalElement.textContent = total.toFixed(2).toString();
    
}