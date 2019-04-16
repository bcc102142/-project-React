
import http from 'utils/fetch'

export  const setLikeListSync = (item) =>{
    return {
        type:"setLikeList",
        likeItem:item
    }
}

export const setLikeListAsync = (id) =>{
    return  async(dispatch) =>{
        let url = '/sound/getsound?soundid='+id
        let item = await http.get(url)
        dispatch(setLikeListSync(item.info.sound))
    }
}