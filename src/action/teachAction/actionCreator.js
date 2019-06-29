import {teachType, teachDataType, teachUpdateType, teachDelType} from './actionType'
import {getTeachList} from 'api/teachList'

export const teachAction = () => {
    return async dispatch => {
        let data = await getTeachList();
        return dispatch({
            type: teachType,
            value: data
        })
    }
}

export const teachDataAction = (val) => ({
    type: teachDataType,
    value: val
})

export const teachUpdAction = (val) => ({
    type: teachUpdateType,
    value: val
})

export const teachDelAction = (val) => ({
    type: teachDelType,
    value: val
})