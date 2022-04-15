
const NumberFormat = params => {
    const value = Number(params)
    let text = ' '
    if (!isNaN(value)){ 
        const roundedNumber = Number(value.toFixed(3))
        text = roundedNumber.toLocaleString('fr-FR')
    }
    return text
}

export default NumberFormat