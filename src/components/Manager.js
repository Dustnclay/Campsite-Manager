import React, {useEffect} from 'react'
import {Link,Route} from 'react-router-dom'
import {Spinner} from 'reactstrap'
import SitePage from "./SitePage"
import{connect} from 'react-redux'
import {getSite,getNo} from '../actions'
import MapContainer from "./GoogleMap"


function Manager(props) {
    const siteArr = props.siteArr
    useEffect(() => {
    props.getSite()
    },[])
    console.log('props in manager',props)
        return(
            <div class='manager'>
                
                <Route path={`/manager/${props.currentSite}`}>
                    <SitePage currentSite={props.currentSite}/>
                </Route>

                <span>Reviewed sites:</span>

                {props.isFetching && <Spinner size="sm" color="secondary" />}
                {props.siteArr.map(item => {
                    return(
                        <Link onClick={() => props.getNo(`${item}`,props.siteArr,props.currentSite)} key={item} to={ "/manager/"+ item}> {item} | </Link> 
                    )
                })}
                <MapContainer siteArr={props.siteArr} getNo={getNo} currentSite={props.currentSite} gMapArr={props.gMapArr}/>
            </div>
        )      
    }


const mapStateToProps = state => ({
    isFetching: state.isFetching,
    currentSite: state.currentSite,
    siteArr: state.siteArr,
    gMapArr:state.gMapArr
  })
  
  export default connect(
    mapStateToProps,
    {getSite, getNo}
    )(Manager);
