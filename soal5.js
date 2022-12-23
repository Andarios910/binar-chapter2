const getSplitName = (personName) => {
    if (typeof personName == 'string') {
        const name = personName.trim().split(" ")
        const splitName = {
            firstName: name[0],
            middleName: name[1],
            lastName: name[2],
        }
        if (name.length == 3) {
            return splitName;
        } else if (name.length == 2) {
            splitName.middleName = null;
            splitName.lastName = name[1];
            return splitName;
        } else if (name.length == 1) {
            splitName.middleName = null;
            splitName.lastName = null;
            return splitName;
        } else {
            return 'Error: This function is only for 3 characters name';
        }
    } else if (personName == undefined) {
        return 'Error: need parameter';
    } else {
        return 'Error: Invalid Data Type';
    }
}

console.log(getSplitName('Aldi Daniela Pranata'));
console.log(getSplitName('Dwi Kuncoro'));
console.log(getSplitName('Aurora'));
console.log(getSplitName('Aurora Aureliya Sukma Darma'));