import { combineReducers } from 'redux'



import { reducer as data } from 'pages/home/recommend/swiper/reducer'
import { reducer as catalogsData } from 'pages/home/catalogs/detail/other/reducer'
import { reducer as isLogin } from 'pages/home/reducer'
import { reducer as urlParams } from 'pages/home/search/reducer'
import { reducer as likeList } from 'pages/home/alreadyLogin/reducer'




export default combineReducers({
    data,
    catalogsData,
    isLogin,
    urlParams,
    likeList
  })