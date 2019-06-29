import {teachType, teachDataType, teachUpdateType, teachDelType} from 'action/teachAction/actionType'

const defaultState = {
    data:[],
    modifyData:{}
}

export default (state=defaultState,action)=>{
    switch (action.type) {
        case teachType:
            let tabState = JSON.parse(JSON.stringify(state));
            tabState.data = action.value;
            return tabState;

        case teachDataType:
            let listState = JSON.parse(JSON.stringify(state));
            listState.modifyData = action.value;
            return listState;

        case teachUpdateType:
            let newState = JSON.parse(JSON.stringify(state));
            let {id,name,post,level} = action.value
            // newState.modifyData = action.value;
            newState.data.list.map(item => {
                if (item.id === id) {
                    item.name = name
                    item.post = post
                    item.level = level
                }
                return item;
            })
            // console.log(newState,action.value)
            return newState;

        case teachDelType:
            let delState = JSON.parse(JSON.stringify(state));
            delState.data.list.map((item,index) => {
                if (item.id === action.value) {
                    delState.data.list.splice(index,1)
                }
                return -1;
            })
            return delState;

        default:
            return state;
    }
}