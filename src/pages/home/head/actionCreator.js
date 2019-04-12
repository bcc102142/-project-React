
import req from "utils/req"

export  const setUserInfoSync = (info)=>{
    return {
            type:"setUserInfo",
            info
    }
}

const getUserInfo =  function(){
    return req({
        url: '/api/v1/users/info'
    })
}

export const setUserInfoAsync = ()=>{
    return async(dispatch)=>{
        console.log('ada')
        let data = await req({
            url: '/api/v1/users/info'
        })
        console.log('da')
        // dispatch(setUserInfoSync(data))
    }
}