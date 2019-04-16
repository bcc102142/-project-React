

const defaultState = {
    likeList:[]
}

const reducer = (state=defaultState,action) => {
    switch(action.type){
        case 'getLikeList' : 
            return {
                ...state,
                likeList:action.likeList
            }
        case 'setLikeList' :
           
            let list = [...state.likeList]
            list.push(action.likeItem)
            return{
                ...state,
                likeList:list
            }
        default : return state
    }
}

export { reducer }