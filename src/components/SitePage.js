
import React, {useEffect} from "react"
import Chart from "./Chart"
import {getForms} from '../actions'
import{connect} from 'react-redux'


function SitePage(props) {
  console.log("props in sitePage allstate",props.allState)

  useEffect(() => {
    props.getForms(props.currentSite)
  },[props.currentSite])

    return(
        <>  
              {props.currentSite && <h1 class='centerText pb-5'>Current site: {props.currentSite}</h1>}
              <h3>Has the site been contained?</h3>
              <Chart form={props.allState.contained}/>
              <h3>Is there possible residential use?</h3>
              <Chart form={props.allState.residential}/>             
              <h3>Has erosion occured?</h3>
              <Chart form={props.allState.erosion}/> 
              <h3>In what state is the vegitation?</h3>
              <Chart form={props.allState.groundDisturbance}/> 
              <h3>Square footage of disturbed area?</h3>
              <Chart form={props.allState.disturbedArea}/>
              <h3>How many trees are damaged?</h3>
              <Chart form={props.allState.treesDamaged}/>  
              <h3>Within the site how many spots have human waste?</h3>
              <Chart form={props.allState.humanWaste}/> 
              <h3>Have improvments been made to the site?</h3>
              <Chart form={props.allState.improvements}/> 
              <h3>Is the site within 100 feet of a trail?</h3>
              <Chart form={props.allState.nearTrail}/> 
              <h3>Is the site within 100 feet of water?</h3>
              <Chart form={props.allState.nearWater}/> 
              <h3>If a social trail is present, how long in square foot is it?</h3>
              <Chart form={props.allState.socialTrail}/> 
              <h3>If a social road is present, how long in square foot is it?</h3>
              <Chart form={props.allState.socialRoad}/> 
              <h3>How much trash is present, in gallons, trashbags, or a truckload?</h3>
              <Chart  form={props.allState.trash}/> 
              <h3>How many fire rings are present?</h3>
              <Chart  form={props.allState.fireRings}/> 
              <h3>Site has had containment repair done?</h3>
              <Chart  form={props.allState.doneContainmentRepair}/> 
              <h3>Site is in need of containment repair?</h3>
              <Chart  form={props.allState.needContainmentRepair}/> 
              <h3>Have fire rings been removed?</h3>
              <Chart  form={props.allState.doneFireRingRemoval}/> 
              <h3>Does this site need fire rings removed?</h3>
              <Chart  form={props.allState.needFireRingRemoval}/> 
              <h3>Has the site's signage been fixed?</h3>
              <Chart  form={props.allState.doneSignageFix}/> 
              <h3>Does this site need signage fixed?</h3>
              <Chart  form={props.allState.needSignageFix}/> 
              <h3>Has the trash been picked up?</h3>
              <Chart  form={props.allState.doneTrashPickup}/> 
              <h3>Does the site need trash pickup?</h3>
              <Chart  form={props.allState.needTrashPickup}/>               

        </>
    )
}
const mapStateToProps = state => ({

  currentSite: state.currentSite,
  siteArr: state.siteArr,
  allState:state
})

export default connect(
  mapStateToProps,
  {getForms}
  )(SitePage);