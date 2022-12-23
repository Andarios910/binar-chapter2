//no2
const checkTypeNumber = (givenNumber) => {
    if (givenNumber == undefined) {
        return 'Error: Bro where is the parameter?';
    } else if (!Number.isInteger(givenNumber)) {
        return 'Error: Invalid data type';
    } else {
        return givenNumber % 2 === 0 ? 'GENAP' : 'GANJIL';
    }
}

console.log(checkTypeNumber(30));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber('3'));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());