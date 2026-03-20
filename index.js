//Task one formatFullName
function formatFullName(firstName, lastName) {
    if (!firstName || !lastName) {
        return "Invalid name input.";
    }

    let formattedFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    let formattedLast = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    return formattedLast + ", " + formattedFirst;
}

//Task 2 and 4 CalculateTotalCost
function calculateTotalCost(price, quantity, taxRate, discount = 0) {
    if (isNaN(price) || isNaN(quantity) || isNaN(taxRate) || isNaN(discount)) {
        return "Invalid input.";
    }

    let subtotal = (price * quantity) - discount;
    let totalCost = subtotal * (1 + taxRate);

    return totalCost;
}


//Task 3 check eligibility
function checkEligibility(age, isEmployed) {
    if (age > 18) {
        if (isEmployed) {
            return "You are eligible.";
        } else {
            return "You are conditionally eligible.";
        }
    }

    return "You are not eligible.";
}