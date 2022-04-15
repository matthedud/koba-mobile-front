import React from 'react'
import goolgleMapFormat from '../goolgleMapFormat'
import "./AdresseFormat.css"

const AdresseFormat = props => {
    const { googleLink, adresse } = goolgleMapFormat(props.adresse)
    return (
        <a className="adresse-link" href={googleLink} target="_blank" rel="noopener noreferrer">
            {adresse}
        </a>
    )
}

export default AdresseFormat