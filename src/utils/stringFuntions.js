export const capitalize = (string="hola") => {
    return string[0].toUpperCase() + string.slice(1);
}

export const numberToMoney = (number=0) => {
    return new Intl.NumberFormat('es-CO', {style: 'currency', currency:'COP', minimumFractionDigits: 0}).format(number)
}