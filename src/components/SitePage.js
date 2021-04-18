
import React, {useEffect,useState} from "react"
import axios from 'axios'
import Chart from "./Chart"
import {getForms} from '../actions'
import{connect} from 'react-redux'


function SitePage(props) {
  console.log("props in sitePage allstate",props.allState)
  let complete = false

  const db_url = process.env.DB_URL || "https://campsite-manager.herokuapp.com/form/"
useEffect(() => {
  props.getForms(props.currentSite)
},[props.currentSite])

 
const [total,setTotal] = useState({
  "contained":[
      {name: 'Yes',
        uv: 0,  
      },
      {name: 'No',
        uv: 0,
      }],
    "erosion":[
      {name: 'Yes',
        uv: 0,
      },
      {name: 'No',
        uv: 0,
      }],
    "humanWaste":[
      {name: 'Yes',
        uv: 0,
      },
      {name: 'No',
        uv: 0,
      }],
    "improvements":[
      {name: 'Yes',
        uv: 0,
      },
      {name: 'No',
        uv: 0,
      }],
    "nearWater":[
      {name: 'Yes',
        uv: 0,
      },
      {name: 'No',
        uv: 0,
      }],
    "nearTrail":[
      {name: 'Yes',
        uv: 0,
      },
      {name: 'No',
        uv: 0,
      }],
    "trash":[
      {name: 'Yes',
        uv: 0,
      },
      {name: 'No',
        uv: 0,
      }],
    "doneContainmentRepair":[
      {name: 'true',
        uv: 0,
      },
      {name: 'false',
        uv: 0,
      }],
    "doneFireRingRemoval":[
      {name: 'true',
        uv: 0,
      },
      {name: 'false',
        uv: 0,
      }],
    "doneSignageFix":[
      {name: 'true',
        uv: 0,
      },
      {name: 'false',
        uv: 0,
      }],
    "doneTrashPickup":[
      {name: 'true',
        uv: 0,
      },
      {name: 'false',
        uv: 0,
      }],
    "needContainmentRepair":[
      {name: 'true',
        uv: 0,
      },
      {name: 'false',
        uv: 0,
      }],
    "needFireRingRemoval":[
      {name: 'true',
        uv: 0,
      },
      {name: 'false',
        uv: 0,
      }],
    "needSignageFix":[
      {name: 'true',
        uv: 0,
      },
      {name: 'false',
        uv: 0,
      }],
    "needTrashPickup":[
      {name: 'true',
        uv: 0,
      },
      {name: 'false',
        uv: 0,
      }],
  })


    return(
        <>  
              {props.currentSite && <h3>current site {props.currentSite}</h3>}
              <p>has it been contained?</p>
              <Chart form={props.allState.contained}/>
              <p>residential?</p>
              <Chart form={props.allState.residential}/>             
              <p>is there erosion?</p>
              <Chart form={props.allState.erosion}/> 
              <p>is there ground disturbance?</p>
              <Chart form={props.allState.groundDisturbance}/> 
              <p>is the area disturbed?</p>
              <Chart form={props.allState.disturbedArea}/>
              <p>are the trees damaged?</p>
              <Chart form={props.allState.treesDamaged}/>  
              <p>is there human waste?</p>
              <Chart form={props.allState.humanWaste}/> 
              <p>is there improvments?</p>
              <Chart form={props.allState.improvements}/> 
              <p>is near a trail?</p>
              <Chart form={props.allState.nearTrail}/> 
              <p>is it near water?</p>
              <Chart form={props.allState.nearWater}/> 
              <p>how long is the social trail?</p>
              <Chart form={props.allState.socialTrail}/> 
              <p>how long is the social road?</p>
              <Chart form={props.allState.socialRoad}/> 
              <p>is there trash?</p>
              <Chart  form={props.allState.trash}/> 
              <p>Are there fire Rings?</p>
              <Chart  form={props.allState.fireRings}/> 
              <p>containment repair done?</p>
              <Chart  form={props.allState.doneContainmentRepair}/> 
              <p>need containment repair?</p>
              <Chart  form={props.allState.needContainmentRepair}/> 
              <p>fire ring removal done?</p>
              <Chart  form={props.allState.doneFireRingRemoval}/> 
              <p>need fire ringsremoved?</p>
              <Chart  form={props.allState.needFireRingRemoval}/> 
              <p>signage fixed?</p>
              <Chart  form={props.allState.doneSignageFix}/> 
              <p>need sigange fix?</p>
              <Chart  form={props.allState.needSignageFix}/> 
              <p>trash picked up?</p>
              <Chart  form={props.allState.doneTrashPickup}/> 
              <p>need trash pickup?</p>
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