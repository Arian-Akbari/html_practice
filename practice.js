function incrementString(strng) {
    let number = strng.match(/\d+$/g);
    console.log(number);
    strng = strng.replace(new RegExp(Number(number).toString() + '$'), "");
    if (number === null) strng = strng + '1';
    else {
        if ((Number(number)).toString().length !== number.toString().length) {
            if ((Number(number) + 1).toString().length > number.length) {
                strng = strng.slice(0, -1);
                strng = strng + (Number(number) + 1);
            } else strng = strng + (Number(number) + 1);
        } else {
            strng = strng + (Number(number) + 1);
        }
    }
    return strng;
}

console.log(incrementString("fo99obar99"));