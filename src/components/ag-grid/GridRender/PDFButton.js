import React from "react"

import { GrDocumentPdf } from 'react-icons/gr'
import Tooltip from '../../Tooltip'

const PDFButton = <span><div 
    style={{cursor:'pointer'}}>
    <Tooltip title={'Afficher PDF'}>
        <GrDocumentPdf style={{fontSize:'1.3rem'}}/>
    </Tooltip >
</div></span>

export default PDFButton