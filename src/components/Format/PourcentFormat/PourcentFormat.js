
const PourcentFormat = params => {
    const value = Number(params)
    let text = ' '
    if (!isNaN(value)){ 
        text = value.toFixed(2) + '%'
    }
    return text
}
export default PourcentFormat