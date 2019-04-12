const defaultState = {
    urlParams : ''
}

const reducer = (state=defaultState,action) =>{
    switch(action.type){
        case 'getParams' :
            return {
                ...state,
                urlParams:action.urlParams
            }
        default : return state
    }
}

export { reducer }