
export const CategoriesCol = {
  headerName: "Catégories",
  valueGetter: (params) => params.data.categorie.map((ligne) => ligne.nom),
  type: "NomType",
}

export const CategorieCol = {
  headerName: "Catégories",
  type: "NomType",
  valueGetter: (params) => params?.data?.categorie[0]?.nom,
}

export const CategorieAchatCol = {
  ...CategorieCol,
  valueGetter: (params) => params?.data?.achat?.categorie[0]?.nom,
}

export const CategoriePrixCol = {
  ...CategorieCol,
  valueGetter: (params) => params?.data?.prix?.achat?.categorie[0]?.nom,
}

export const CategoriesVenduCol = {
  ...CategoriesCol,
  headerName: "Catégories Vendues",
  valueGetter: (params) => params.data.categorieAchat.map((ligne) => ligne.nom),
}
