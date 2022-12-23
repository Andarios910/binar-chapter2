const isValidPassword = (password) => {
    if (password == undefined) {
        return 'Error: need parameter';
    } else if (typeof password !== 'string') {
        return 'Error: Invalid Data Type';
    }
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w\W]{8,}$/.test(password);
}

console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());