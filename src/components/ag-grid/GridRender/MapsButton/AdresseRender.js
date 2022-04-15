import goolgleMapFormat from "../../../Format/goolgleMapFormat"

const AdresseRender = params =>{
    const adresse = params.data?.adresse ? params.data.adresse : params.data
    const {googleLink} = goolgleMapFormat(adresse)
    return googleLink
}

export default AdresseRender