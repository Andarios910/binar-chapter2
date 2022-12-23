const getAngkaTerbesarKedua = (dataAngka) => {
    if (dataAngka == undefined) {
        return 'Error: need parameter';
    } else if (!Array.isArray(dataAngka)) {
        return 'Error: Invalid Data Type';
    } else {
        const result = dataAngka.sort((a, b) => {
            return a - b;
        }).reverse();
        return result[1];
    }
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
const dataAngka2 = [9, 4, 7, 7, 4, 3, 2, 2, 8, 10, 11]
console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(dataAngka2));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());