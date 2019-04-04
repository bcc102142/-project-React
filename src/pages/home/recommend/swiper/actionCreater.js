import http from 'utils/fetch'


 export const getDataSync = (data)=>{
    return {
        type:"get",
        data
    }
}

 export const getDataAsync = () => {

    return async (dispatch) =>{
       let data = await http.get("/mobileWeb/newHomepage3")
       dispatch(getDataSync(data))
    }
}