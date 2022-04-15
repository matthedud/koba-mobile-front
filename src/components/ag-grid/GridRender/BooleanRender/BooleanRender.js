import "./BooleanRender.scss"

const booleanRender = (params) => {
  if(params.data?.nature === 'footer') return ''
  return params.value ? "oui" : "non"
}
export default booleanRender
