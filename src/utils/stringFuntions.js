export const capitalize = (string="hola") => {
    return string[0].toUpperCase() + string.slice(1);
}

export const numberToMoney = (number=0) => {
    return new Intl.NumberFormat('es-CO', {style: 'currency', currency:'COP', minimumFractionDigits: 0}).format(number)
}

export const parseDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${year}-${month}-${day}`;
}