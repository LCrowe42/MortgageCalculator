function generateResultsRepayment(repayments, total) {
    const repstring = repayments.toLocaleString("en-US", {style:"currency", currency:"USD"});
    const totstring = total.toLocaleString("en-US", {style:"currency", currency:"USD"});
    return `
        <div class="ocontainer">
            <p class="otitle">Your results</p>
            <p class="obody">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
            <div class="obox">
                <p class="repaymentstext">Your monthly payments</p>
                <output class="monthlypayments">${repstring}</output>
                <p class="totaltext">Total you'll repay over the term</p>
                <output class="total">${totstring}</output>
            </div>
        </div>
    `;
}

function calculate() {
    const amount = document.getElementById("amount").value;
    const term = document.getElementById("term").value;
    const rate = document.getElementById("rate").value / 100 / 12;
    const interestOnly = document.getElementById("interestonly").checked;
    if (amount < 0 || term == '' || rate == '') {
        if (amount == "" || amount < 0) {
            const amounterror = document.getElementById("amounterror");
            amounterror.textContent = "*Must contain a valid number";
        }
        if (term == '') {
            const termerror = document.getElementById("termerror");
            termerror.textContent = "*Must contain a valid number";
        }
        if (rate == '') {
            const rateerror = document.getElementById("rateerror");
            rateerror.textContent = "*Must contain a valid number";
        }
    }
    else if (!interestOnly) {
        const numberOfPayments = term * 12;
        const repayments = Number((amount * (rate * (1 + rate) ** numberOfPayments) / ((1 + rate) ** numberOfPayments - 1)).toFixed(2));
        const total = Number((repayments * numberOfPayments).toFixed(2));
        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = generateResultsRepayment(repayments, total);
    }
    else {
        const numberOfPayments = term * 12;
        const repayments = Number((rate*amount).toFixed(2));
        const total = Number((repayments*numberOfPayments).toFixed(2));
        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = generateResultsRepayment(repayments, total);
    }
}

