function reverseString(str) {
    let reversed = 'anas';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
