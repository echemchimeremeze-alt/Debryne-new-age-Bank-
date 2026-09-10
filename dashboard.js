const balance = document.getElementById("balance");
const hideBalance = document.getElementById("hideBalance");

let balanceVisible = true;

hideBalance.addEventListener("click", function () {

    if (balanceVisible) {

        balance.textContent = "₦••••••••";
        hideBalance.textContent = "🙈";

        balanceVisible = false;

    } else {

        balance.textContent = "₦250,000.00";
        hideBalance.textContent = "👁️";

        balanceVisible = true;

    }

});


function copyAccount() {

    navigator.clipboard.writeText("0123454521");

    alert("Account number copied!");

}


function openPage(page) {

    alert("This feature will be connected next.");

}
