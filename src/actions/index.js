
import axios from "axios"
export const FETCH_SITE_NUM = "FETCH_SITE_NUM"
export const FETCH_SITE_SUCCESS = "FETCH_SITE_SUCCESS"
export const FETCH_SITE_FAIL = "FETCH_SITE_FAIL"
export const FETCH_FORMS = "FETCH_FORMS"
export const FETCH_FORMS_SUCCESS = "FETCH_FORMS_SUCCESS"
export const FETCH_FORMS_FAIL = "FETCH_FORMS_FAIL"
export const SET_CURRENT_SITE = "SET_CURRENT_SITE"

export const getSite = () => dispatch => {
    dispatch({type:FETCH_SITE_NUM});
    axios.get('https://campsite-manager.herokuapp.com/form/')
        .then(resp=>{
            // console.log('resp-axioscall',resp.data)
            dispatch({ type: FETCH_SITE_SUCCESS, payload:resp})
        })
        .catch(err => {
            console.log('error in fail',err)
            dispatch({ type: FETCH_SITE_FAIL, payload:err})
        })
} 

export const getNo = (siteNo) => dispatch => {
    dispatch({type:SET_CURRENT_SITE, payload:siteNo});
} 

export const getForms = (siteNo) => dispatch => {
    dispatch({type:FETCH_FORMS});
    axios.get(`https://campsite-manager.herokuapp.com/form/${siteNo}`)
        .then(resp=>{
            console.log('resp-axioscall',resp)
            dispatch({ type: FETCH_FORMS_SUCCESS, payload:resp})
        })
        .catch(err => {
            console.log('error in fail',err)
            dispatch({ type: FETCH_FORMS_FAIL, payload:err})
        })
} 