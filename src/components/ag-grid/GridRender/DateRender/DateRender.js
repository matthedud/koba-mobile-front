import moment from 'moment'
import {dateViewFormat, dateSaveFormat} from '../../../Format'

const DateRender = params =>{
    return params.value ? 
        moment(params.value, dateSaveFormat).format(dateViewFormat)
        : null
} 

export default (DateRender)