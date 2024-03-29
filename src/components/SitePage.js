
import React, {useEffect} from "react"
import Chart from "./Chart"
import {getForms} from '../actions'
import{connect} from 'react-redux'


function SitePage(props) {
  useEffect(() => {
    props.getForms(props.currentSite)
  },[props.currentSite])

    return(
        <>  
              {props.currentSite && <h1 className='centerText pb-5'>Current site: {props.currentSite}</h1>}
            <div className="container-fluid">
              <div className='row'>

                <div className="col-sm">
                  <h3>Has the site been contained?</h3>
                  <Chart form={props.allState.contained}/>
                </div>
    <div className="col-sm">
                <h3>Is there possible residential use?</h3>
                <Chart form={props.allState.residential}/>  
                </div>
    <div className="col-sm">
                <h3>Has erosion occured?</h3>
                <Chart form={props.allState.erosion}/> 
                </div>
    <div className="col-sm">
                <h3>In what state is the vegitation?</h3>
                <Chart form={props.allState.groundDisturbance}/> 
                </div>
    <div className="col-sm">
                <h3>Square footage of disturbed area?</h3>
                <Chart form={props.allState.disturbedArea}/>
                </div>
    <div className="col-sm">
                <h3>How many trees are damaged?</h3>
                <Chart form={props.allState.treesDamaged}/>  
                </div>
    <div className="col-sm">
                <h3>Within the site how many spots have human waste?</h3>
                <Chart form={props.allState.humanWaste}/> 
                </div>
    <div className="col-sm">
                <h3>Have improvments been made to the site?</h3>
                <Chart form={props.allState.improvements}/> 
                </div>
    <div className="col-sm">
                <h3>Is the site within 100 feet of a trail?</h3>
                <Chart form={props.allState.nearTrail}/> 
                </div>
    <div className="col-sm">
                <h3>Is the site within 100 feet of water?</h3>
                <Chart form={props.allState.nearWater}/> 
                </div>
    <div className="col-sm">
                <h3>If a social trail is present, how long in square foot is it?</h3>
                <Chart form={props.allState.socialTrail}/> 
                </div>
    <div className="col-sm">
                <h3>If a social road is present, how long in square foot is it?</h3>
                <Chart form={props.allState.socialRoad}/> 
                </div>
    <div className="col-sm">
                <h3>How much trash is present, in gallons, trashbags, or a truckload?</h3>
                <Chart  form={props.allState.trash}/> 
                </div>
    <div className="col-sm">
                <h3>How many fire rings are present?</h3>
                <Chart  form={props.allState.fireRings}/> 
                </div>
    <div className="col-sm">
                <h3>Site has had containment repair done?</h3>
                <Chart  form={props.allState.doneContainmentRepair}/> 
                </div>
    <div className="col-sm">
                <h3>Site is in need of containment repair?</h3>
                <Chart  form={props.allState.needContainmentRepair}/> 
                </div>
    <div className="col-sm">
                <h3>Have fire rings been removed?</h3>
                <Chart  form={props.allState.doneFireRingRemoval}/> 
                </div>
    <div className="col-sm">
                <h3>Does this site need fire rings removed?</h3>
                <Chart  form={props.allState.needFireRingRemoval}/> 
                </div>
    <div className="col-sm">
                <h3>Has the site's signage been fixed?</h3>
                <Chart  form={props.allState.doneSignageFix}/> 
                </div>
    <div className="col-sm">
                <h3>Does this site need signage fixed?</h3>
                <Chart  form={props.allState.needSignageFix}/> 
                </div>
    <div className="col-sm">
                <h3>Has the trash been picked up?</h3>
                <Chart  form={props.allState.doneTrashPickup}/> 
                </div>
    <div className="col-sm">
                <h3>Does the site need trash pickup?</h3>
                <Chart  form={props.allState.needTrashPickup}/>               
                </div>
              </div>
            </div>
              
        </>
    )
}
const mapStateToProps = state => ({

  currentSite: state.currentSite,
  siteArr: state.siteArr,
  allState:state,
  gMapArr:state.gMapArr
})

export default connect(
  mapStateToProps,
  {getForms}
  )(SitePage);