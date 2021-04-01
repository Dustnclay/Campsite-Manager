
import React, {Component,useEffect} from "react"
import axios from 'axios'

function SitePage(props) {
    // console.log(props)    
    let db_url = process.env.DB_URL || "https://campsite-manager.herokuapp.com/form/"

    let forms = []

    useEffect(() => {
        axios.get(db_url + props.currentSite)
        .then(res => console.log('axios',res))
        .catch(err => console.log(err))
        }
    )

    return(
        <>
        <p>{props.currentSite}</p>
        </>
    )
}
export default SitePage