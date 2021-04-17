import React, {useEffect} from 'react'
import {Link,Route} from 'react-router-dom'
import SitePage from "./SitePage"
import{connect} from 'react-redux'
import {getSite,getNo} from '../actions'



function Manager(props) {
    // console.log("props",props)

    useEffect(() => {
    props.getSite()
    },props.siteArr)

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
