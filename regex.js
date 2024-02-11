function validateMastercard(cardNumber) {
    // Regular expression for Mastercard
    const mastercardRegex = /^5[1-5][0-9]{14}$/;

    // Check if the input matches Mastercard format
    if (!mastercardRegex.test(cardNumber)) {
        return false;
    }

    // Check if the card number is valid using the Luhn algorithm
    if (!luhnCheck(cardNumber)) {
        return false;
    }

    return true;
}

function luhnCheck(cardNumber) {
    let sum = 0;
    let doubleUp = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = +cardNumber[i];

        if (doubleUp) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        doubleUp = !doubleUp;
    }

    console.log("Sum:", sum); // Logging the sum for debugging purposes
    return sum % 10 === 0;
}

// Example usage:
const cardNumber = "5412345678901208"; // Example Mastercard number
if (validateMastercard(cardNumber)) {
    console.log("Valid Mastercard card number.");
} else {
    console.log("Invalid card number.");
}
