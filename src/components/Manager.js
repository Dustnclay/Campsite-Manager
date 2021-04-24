import React, {useEffect} from 'react'
import {Link,Route} from 'react-router-dom'
import SitePage from "./SitePage"
import{connect} from 'react-redux'
import {getSite,getNo} from '../actions'



function Manager(props) {
    const siteArr = props.siteArr
    useEffect(() => {
    props.getSite()
    },siteArr)

        return(
            <div>
                <span>Reviewed sites:</span>
             {props.siteArr.map(item => {
                return(
                   <Link onClick={() => props.getNo(`${item}`,props.siteArr,props.currentSite)} key={item} to={ "/manager/"+ item}> {item} </Link> 
                    )
                })} 
                <Route path={`/manager/${props.currentSite}`}>
                    <SitePage currentSite={props.currentSite}/>
                </Route>
            </div>
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
