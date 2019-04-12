

const defaultState = {
    isLogin:false,
    info:{}
}

const reducer = (state=defaultState,action) => {
    switch(action.type){
        case 'getState' : 
            return {
                ...state,
                isLogin:action.isLogin
            }

        case 'setUserInfo' : 
            return {
                ...state,
                info:action.info
            }    
        default : return state
    }
}

export { reducer }