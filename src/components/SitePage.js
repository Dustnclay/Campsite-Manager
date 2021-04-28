
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
              {props.currentSite && <h3>Current site: {props.currentSite}</h3>}
              <p>Has the site been contained?</p>
              <Chart form={props.allState.contained}/>
              <p>Is there possible residential use?</p>
              <Chart form={props.allState.residential}/>             
              <p>Has erosion occured?</p>
              <Chart form={props.allState.erosion}/> 
              <p>In what state is the vegitation?</p>
              <Chart form={props.allState.groundDisturbance}/> 
              <p>Square footage of disturbed area?</p>
              <Chart form={props.allState.disturbedArea}/>
              <p>How many trees are damaged?</p>
              <Chart form={props.allState.treesDamaged}/>  
              <p>Within the site how many spots have human waste?</p>
              <Chart form={props.allState.humanWaste}/> 
              <p>Have improvments been made to the site?</p>
              <Chart form={props.allState.improvements}/> 
              <p>Is the site within 100 feet of a trail?</p>
              <Chart form={props.allState.nearTrail}/> 
              <p>Is the site within 100 feet of water?</p>
              <Chart form={props.allState.nearWater}/> 
              <p>If a social trail is present, how long in square foot is it?</p>
              <Chart form={props.allState.socialTrail}/> 
              <p>If a social road is present, how long in square foot is it?</p>
              <Chart form={props.allState.socialRoad}/> 
              <p>How much trash is present, in gallons, trashbags, or a truckload?</p>
              <Chart  form={props.allState.trash}/> 
              <p>How many fire rings are present?</p>
              <Chart  form={props.allState.fireRings}/> 
              <p>Site has had containment repair done?</p>
              <Chart  form={props.allState.doneContainmentRepair}/> 
              <p>Site is in need of containment repair?</p>
              <Chart  form={props.allState.needContainmentRepair}/> 
              <p>Have fire rings been removed?</p>
              <Chart  form={props.allState.doneFireRingRemoval}/> 
              <p>Does this site need fire rings removed?</p>
              <Chart  form={props.allState.needFireRingRemoval}/> 
              <p>Has the site's signage been fixed?</p>
              <Chart  form={props.allState.doneSignageFix}/> 
              <p>Does this site need signage fixed?</p>
              <Chart  form={props.allState.needSignageFix}/> 
              <p>Has the trash been picked up?</p>
              <Chart  form={props.allState.doneTrashPickup}/> 
              <p>Does the site need trash pickup?</p>
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