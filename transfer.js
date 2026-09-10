const accountNumber = document.getElementById("accountNumber");
const amount = document.getElementById("amount");
const total = document.getElementById("total");


// Only allow numbers in account number
accountNumber.addEventListener("input", function () {

    this.value = this.value.replace(/\D/g, "");

});


// Update total amount
amount.addEventListener("input", function () {

    const value = Number(this.value);

    if (value > 0) {
        total.textContent = "₦" + value.toLocaleString("en-NG", {
            minimumFractionDigits: 2
        });
    } else {
        total.textContent = "₦0.00";
    }

});


// Transfer form
document.getElementById("transferForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const account = accountNumber.value;
    const bank = document.getElementById("bank").value;
    const amountValue = Number(amount.value);

    if (account.length !== 10) {

        alert("Please enter a valid 10-digit account number.");
        return;

    }

    if (!bank) {

        alert("Please select a bank.");
        return;

    }

    if (amountValue <= 0) {

        alert("Please enter a valid amount.");
        return;

    }

    alert(
        "Transfer details received.\n\n" +
        "Account: " + account + "\n" +
        "Bank: " + bank + "\n" +
        "Amount: ₦" + amountValue.toLocaleString()
    );

});


function goBack() {

    window.location.href = "dashboard.html";

}
