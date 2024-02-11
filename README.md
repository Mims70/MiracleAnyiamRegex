# MiracleAnyiamRegex

# Credit Card Validation Program

This is a JavaScript program for validating credit card numbers, specifically for Mastercard.

## Overview

This program validates credit card numbers using a regular expression pattern specific to Mastercard and the Luhn algorithm. It ensures that the input follows the format of a valid Mastercard number and also performs a checksum verification using the Luhn algorithm to detect any typing errors or other common mistakes.

## Regular Expression Pattern

The regular expression pattern used to validate Mastercard numbers is:
/^5[1-5][0-9]{14}$


Explanation of the pattern:
- `^5`: The number must start with a `5`.
- `[1-5]`: The second digit must be in the range from `1` to `5`.
- `[0-9]{14}`: There must be 14 additional digits (for a total of 16 digits).

## Luhn Algorithm

The Luhn algorithm (also known as the Luhn formula or modulus 10 algorithm) is a checksum formula used to validate a variety of identification numbers, including credit card numbers. It verifies the integrity of the number by performing a simple mathematical formula on the digits. The Luhn algorithm is used to catch accidental errors such as mistyping a digit or swapping adjacent digits.

## Usage

To use this program, provide a credit card number as input and run the `validateMastercard` function. If the number is a valid Mastercard number, the function will return `true`; otherwise, it will return `false`.

```javascript
const cardNumber = "5412345678901232"; // Example Mastercard number
if (validateMastercard(cardNumber)) {
    console.log("Valid Mastercard card number.");
} else {
    console.log("Invalid card number.");
}

