const sumTotal = (data) => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total+=data[i].price;
    }
    return total;
}

const isIntegerType = (data) => {
    return typeof(data) == "number"
}

module.exports = {
    sumTotal,
    isIntegerType
};