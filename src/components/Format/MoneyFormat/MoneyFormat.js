
const MoneyFormat = params => {
    const value = Number(params)
    let text = ' '
    if (!isNaN(value)){ 
        text = value.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR'})
    }
    return text
}

export default MoneyFormat