
const defaultState ={
    data:{}
}

const reducer = (state = defaultState,action) => {
    switch(action.type){
        case 'get' :
            return {
                ...state,
                data:action.data
            }
        default : return state
    }
}

export  {reducer}