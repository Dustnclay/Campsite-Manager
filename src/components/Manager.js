import React, {useEffect} from 'react'
import {Link,Route} from 'react-router-dom'
import {Spinner} from 'reactstrap'
import SitePage from "./SitePage"
import{connect} from 'react-redux'
import {getSite,getNo} from '../actions'



function Manager(props) {
    const siteArr = props.siteArr
    useEffect(() => {
    props.getSite()
    },siteArr)

        return(
            <div class='manager'>
                
                <Route path={`/manager/${props.currentSite}`}>
                    <SitePage currentSite={props.currentSite}/>
                </Route>

                <span>Reviewed sites:</span>

                {props.isFetching && <Spinner size="sm" color="secondary" />}
                {props.siteArr.map(item => {
                    return(
                        <Link onClick={() => props.getNo(`${item}`,props.siteArr,props.currentSite)} key={item} to={ "/manager/"+ item}> {item} </Link> 
                    )
                })} 
            </div>
        )        
    }


const mapStateToProps = state => ({
    isFetching: state.isFetching,
    currentSite: state.currentSite,
    siteArr: state.siteArr
  })
  
  export default connect(
    mapStateToProps,
    {getSite, getNo}
    )(Manager);
