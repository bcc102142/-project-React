import { get } from "https";

const defaultState = {
    data : {},
    load:false

}

const reducer = (state=defaultState,action) =>{
    // console.log(action.load)
    switch(action.type){
        case 'get' : 
            return {
               ...state,
               data:action.data
            }
        case 'load':
            return {
                ...state,
                load:action.load
            }
        default : return state
    }
}

export { reducer}