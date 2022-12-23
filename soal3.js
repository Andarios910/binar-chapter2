const checkEmail = (email) => {
    if (email === undefined) {
        return `Error: Need Parameter`;
    } else if (typeof email !== 'string') {
        return 'Error: Invalid Data Type';
    } else if (!/@\w+([\.-]?\w+)/.test(email)) {
        return 'Error: email yang diinput salah';
    } else {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? 'VALID' : 'INVALID';
    }

}

console.log(checkEmail('apranata@binar.co.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata@binar'));
console.log(checkEmail('apranata'));
console.log(checkEmail(3322));
console.log(checkEmail());