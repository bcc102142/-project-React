import http from 'utils/fetch'


export const getcatalogsSync = (data) =>{
    return {
        type:'get',
        data
    }
}
export const getloadSync = (load) =>{
    return {
        type:'load',
        load
    }
}


export const getcatalogsAsync = () =>{
    
    return async (dispatch)=>{
      let data = await http.get('/mobileWeb/catalogs')
      dispatch(getcatalogsSync(data.info))
      dispatch(getloadSync(true))
    }
}
