const pinInputs = document.querySelectorAll(".pin-box input");


// Automatically move to the next PIN box
pinInputs.forEach((input, index) => {

    input.addEventListener("input", function () {

        this.value = this.value.replace(/\D/g, "");

        if (this.value && index < pinInputs.length - 1) {
            pinInputs[index + 1].focus();
        }

    });

});


// Go back
function goBack() {
    window.location.href = "transfer.html";
}


// Open PIN screen
function showPinScreen() {

    document.getElementById("pinModal").style.display = "flex";

    pinInputs[0].focus();

}


// Close PIN screen
function closePinScreen() {

    document.getElementById("pinModal").style.display = "none";

}


// Process demo transfer
function processTransfer() {

    let pin = "";

    pinInputs.forEach(input => {
        pin += input.value;
    });


    if (pin.length !== 4) {

        alert("Please enter your 4-digit transaction PIN.");
        return;

    }


    // Demo only
    document.getElementById("pinModal").style.display = "none";


    setTimeout(function() {

        window.location.href = "transfer-success.html";

    }, 300);

}
