function generateResultsRepayment(repayments, total) {
    return ' \
        <p class="otitle">Your results</p> \
        <p class="obody">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p> \
        <div class="obox"> \
            <output class="monthlypayments">${repayments}</output> \
            <output class="total">${total}</output> \
        </div> \
    ';
}

function calculate() {
    const amount = document.getElementById("amount").value;
    const term = document.getElementById("term").value;
    const rate = document.getElementById("rate").value / 100 / 12;
    const interestOnly = document.getElementById("interestonly").checked;
    
    if (!interestOnly) {
        const numberOfPayments = term * 12;
        const repayments = (amount * (rate * (1 + rate) ** numberOfPayments) / ((1 + rate) ** numberOfPayments - 1)).toFixed(2).toString();
        const total = (repayments * numberOfPayments).toFixed(2).toString();

        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = generateResultsRepayment(repayments, total);
    }

}