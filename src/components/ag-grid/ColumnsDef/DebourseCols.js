
export const DebourseSecCol = {
    headerName: "Déboursé Sec",
    field: 'debourseSec',
    type: 'PrixType',
    aggFunc: "sum",
}


export const DebourseFournitureCol = {
    headerName: "Fourniture",
    field: 'debourseFourniture',
    columnGroupShow: 'open',
    type: 'PrixType',
    aggFunc: "sum",
}

export const DebourseMateriauxCol = {
    headerName: "Materiaux",
    field: 'debourseMateriaux',
    columnGroupShow: 'open',
    type: 'PrixType',
    aggFunc: "sum",
}

export const DebourseMaterielCol = {
    headerName: "Matériel",
    field: 'debourseMateriel',
    columnGroupShow: 'open',
    type: 'PrixType',
    aggFunc: "sum",
}

export const DebourseMOCol = {
    headerName: "Main D'Oeuvre",
    field: 'debourseMo',
    columnGroupShow: 'open',
    aggFunc: "sum",
    type: 'PrixType',
}

export const DebourseSTraitantCol = {
    headerName: "Sous-Traitant",
    field: 'debourseSousTraitant',
    columnGroupShow: 'open',
    aggFunc: "sum",
    type: 'PrixType',
}


export const DebourseCols = {
    headerName: "Détail Déboursé Sec",
    children: [
        DebourseSecCol,
        DebourseFournitureCol,
        DebourseMateriauxCol,
        DebourseMaterielCol,
        DebourseMOCol,
        DebourseSTraitantCol,
    ]
}