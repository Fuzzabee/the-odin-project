function add7 ( number ) {
    return number + 7;
}

function multiply ( number1, number2 ) {
    return number1 * number2;
}

function capitalize ( toCapitalize ) {
    toReturn = toCapitalize;
    toReturn = toReturn.toLowerCase();
    toReturn = toReturn.charAt(0).toUpperCase() + toReturn.slice(1);
    return toReturn;
}

function lastLetter ( string ) {
    return string.charAt( string.length - 1 );
}