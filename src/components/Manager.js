import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {Link,Route} from 'react-router-dom'
import SitePage from "./SitePage"
import{connect} from 'react-redux'
import {getSite,getNo} from '../actions'



function Manager(props) {
    console.log("props",props)
    const [current,setCurrent] = useState()

        // const siteArr=[];
        // const currentSite=null
        // const url = process.env.DB_URL || "https://campsite-manager.herokuapp.com/form"

    useEffect(() => {
    props.getSite()
    },props.siteArr)


    // function getSites () {
    //     const campArr = []

    //     axios.get("https://campsite-manager.herokuapp.com/form")
    //     .then(res => res.data.map(site => campArr.push(site.location)))
    //     .catch(err => console.log(err))

    //     siteArr = Array.from([...new Set(campArr)])
    // }



        return(
            <>
            <h1>Manager Page</h1>
             {props.siteArr.map(item => {
                return(
                   <Link onClick={() => props.getNo(`${item}`)} key={item} to={ "/manager/"+ item}> {item} </Link> 
                    )
                })} 
                <Route path={`/manager/${props.currentSite}`}>
                    <SitePage currentSite={props.currentSite}/>
                </Route>
            </>
        )        
    }


const mapStateToProps = state => ({

    currentSite: state.currentSite,
    siteArr: state.siteArr
  })
  
  export default connect(
    mapStateToProps,
    {getSite, getNo}
    )(Manager);
