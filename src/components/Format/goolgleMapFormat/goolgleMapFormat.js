
const goolgleMapFormat = adresse => {
    const newAdresse = (
        adresse ?
        (adresse.ligne1?adresse.ligne1:'') + 
        (adresse.ligne2?' - '+adresse.ligne2+', ':', ') + 
        adresse.codePostal + ' ' + adresse.ville
        : ''
    )
    const query = encodeURI(newAdresse)
    const googleLink = `https://www.google.com/maps/search/?api=1&query=${query}`
    
    return {googleLink, adresse: newAdresse}
}

export default goolgleMapFormat