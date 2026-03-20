function formatFullName(firstName, lastName) {
    if (!firstName || !lastName) {
        return "Invalid name input.";
    }

    let formattedFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    let formattedLast = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    return formattedLast + ", " + formattedFirst;
}