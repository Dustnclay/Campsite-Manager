
import React, {useEffect,useState} from "react"
import axios from 'axios'
import Chart from "./Chart"
import {getForms} from '../actions'
import{connect} from 'react-redux'


function SitePage(props) {
  console.log("props in sitePage",props.allState)
  let complete = false

  const db_url = process.env.DB_URL || "https://campsite-manager.herokuapp.com/form/"
useEffect(() => {
  props.getForms(props.currentSite)
  // console.log("axios on sitePage",)
  //     axios.get(db_url + props.currentSite)
  //   .then(res => populateTotal(res.data))
  //   .catch(err => console.log(err))  
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
              <p>has it been contained?</p>
              <Chart title={"contained"} form={props.allState.contained}/>          
              <p>is there erosion?</p>
              <Chart title={"contained"} form={total.erosion}/> 
              <p>is there human waste?</p>
              <Chart title={"contained"} form={total.humanWaste}/> 
              <p>is there improvments?</p>
              <Chart title={"contained"} form={total.improvements}/> 
              <p>is near a trail?</p>
              <Chart title={"contained"} form={total.nearTrail}/> 
              <p>is it near water?</p>
              <Chart title={"contained"} form={total.nearWater}/> 
              <p>is there trash?</p>
              <Chart title={"contained"} form={total.trash}/> 
              <p>containment repair done?</p>
              <Chart title={"contained"} form={total.doneContainmentRepair}/> 
              <p>need containment repair?</p>
              <Chart title={"contained"} form={total.needContainmentRepair}/> 
              <p>fire ring removal done?</p>
              <Chart title={"contained"} form={total.doneFireRingRemoval}/> 
              <p>need fire ringsremoved?</p>
              <Chart title={"contained"} form={total.needFireRingRemoval}/> 
              <p>signage fixed?</p>
              <Chart title={"contained"} form={total.doneSignageFix}/> 
              <p>need sigange fix?</p>
              <Chart title={"contained"} form={total.needSignageFix}/> 
              <p>trash picked up?</p>
              <Chart title={"contained"} form={total.doneTrashPickup}/> 
              <p>need trash pickup?</p>
              <Chart title={"contained"} form={total.needTrashPickup}/>               

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