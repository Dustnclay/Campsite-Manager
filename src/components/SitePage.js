
import React, {Component,useEffect,useState} from "react"
import axios from 'axios'
import Chart from "./Chart"

function SitePage(props) {

  const [endresult,setEndResult] = useState([
    {collector: "dusty",
    contained: "No",
    date: "2021-04-01",
    disturbedArea: "1-5 sqft",
    doneContainmentRepair: "false",
    doneFireRingRemoval: "true",
    doneSignageFix: "true",
    doneTrashPickup: "true",
    erosion: "Yes",
    fireRings: "1",
    groundDisturbance: "site has recovered",
    hours: "1",
    humanWaste: "No",
    id: 6,
    image: "",
    improvements: "Yes",
    location: "107",
    nearTrail: "Yes",
    nearWater: "Yes",
    needContainmentRepair: "false",
    needFireRingRemoval: "false",
    needSignageFix: "false",
    needTrashPickup: "true",
    notes: "N/a",
    residential: "yes",
    siteDescription: "terrible",
    socialRoad: "-4",
    socialTrail: "2",
    survey: "newSurvey",
    trash: "No",
    treesDamaged: "-2",
    },
  ])



console.log('props',props)
  const total={
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
  }

  const totalwork = []
       
    let db_url = process.env.DB_URL || "https://campsite-manager.herokuapp.com/form/"

    const forms = [
      {collector: "dusty",
          contained: "No",
          date: "2021-04-01",
          disturbedArea: "1-5 sqft",
          doneContainmentRepair: "false",
          doneFireRingRemoval: "true",
          doneSignageFix: "true",
          doneTrashPickup: "true",
          erosion: "Yes",
          fireRings: "1",
          groundDisturbance: "site has recovered",
          hours: "1",
          humanWaste: "No",
          id: 6,
          image: "",
          improvements: "Yes",
          location: "107",
          nearTrail: "Yes",
          nearWater: "Yes",
          needContainmentRepair: "false",
          needFireRingRemoval: "false",
          needSignageFix: "false",
          needTrashPickup: "true",
          notes: "N/a",
          residential: "yes",
          siteDescription: "terrible",
          socialRoad: "-4",
          socialTrail: "2",
          survey: "newSurvey",
          trash: "No",
          treesDamaged: "-2",
          },
          {collector: "dusty",
          contained: "No",
          date: "2021-04-01",
          disturbedArea: "1-5 sqft",
          doneContainmentRepair: "false",
          doneFireRingRemoval: "false",
          doneSignageFix: "false",
          doneTrashPickup: "true",
          erosion: "No",
          fireRings: "1",
          groundDisturbance: "site has recovered",
          hours: "1",
          humanWaste: "No",
          id: 6,
          image: "",
          improvements: "Yes",
          location: "107",
          nearTrail: "Yes",
          nearWater: "Yes",
          needContainmentRepair: "false",
          needFireRingRemoval: "false",
          needSignageFix: "false",
          needTrashPickup: "false",
          notes: "N/a",
          residential: "yes",
          siteDescription: "terrible",
          socialRoad: "-4",
          socialTrail: "2",
          survey: "newSurvey",
          trash: "No",
          treesDamaged: "-2",
          },
          {collector: "dusty",
          contained: "No",
          date: "2021-04-01",
          disturbedArea: "1-5 sqft",
          doneContainmentRepair: "true",
          doneFireRingRemoval: "false",
          doneSignageFix: "false",
          doneTrashPickup: "false",
          erosion: "Yes",
          fireRings: "1",
          groundDisturbance: "site has recovered",
          hours: "1",
          humanWaste: "Yes",
          id: 6,
          image: "",
          improvements: "Yes",
          location: "107",
          nearTrail: "Yes",
          nearWater: "No",
          needContainmentRepair: "true",
          needFireRingRemoval: "false",
          needSignageFix: "false",
          needTrashPickup: "true",
          notes: "N/a",
          residential: "yes",
          siteDescription: "terrible",
          socialRoad: "-4",
          socialTrail: "2",
          survey: "newSurvey",
          trash: "No",
          treesDamaged: "-2",
          },]

          // const / = []

          useEffect(() => {
            axios.get(db_url + props.currentSite)
            .then(res => setEndResult(res.data),populateTotal())
            .catch(err => console.log(err))
          },[props.currentSite])
            

      // const endresult = forms
        function populateTotal() {
          // console.log("endresult",endresult)
        endresult.map(
        res => {
            total.contained.map(item => {
              if (item.name ==res.contained )
                {item.uv += 1}     
            })
            total.erosion.map(item => {
              if (item.name ==res.erosion )
                {item.uv += 1}
            })
            total.humanWaste.map(item => {
              if (item.name ==res.humanWaste )
                {item.uv += 1}
            })
            total.improvements.map(item => {
              if (item.name ==res.improvements)
                {item.uv += 1}
            })
            total.nearTrail.map(item => {
              if (item.name ==res.nearTrail)
                {item.uv += 1}
            })
            total.nearWater.map(item => {
              if (item.name ==res.nearWater)
                {item.uv += 1}
            })
            total.trash.map(item => {
              if (item.name ==res.trash)
                {item.uv += 1}
            })
            //
            total.doneContainmentRepair.map(item => {  
              if (item.name ==res.doneContainmentRepair)
                {item.uv += 1}
            })
            
            total.doneFireRingRemoval.map(item => {
              if (item.name ==res.doneFireRingRemoval)
                {item.uv += 1}
            })
            total.doneSignageFix.map(item => {
              if (item.name ==res.doneSignageFix)
                {item.uv += 1}
            })
            total.doneTrashPickup.map(item => {
              if (item.name ==res.doneTrashPickup)
                {item.uv += 1}
            })
            total.needContainmentRepair.map(item => {
              console.log(item.name, res.needContainmentRepair)
              if (item.name ==res.needContainmentRepair)
                {item.uv += 1}
            })
            total.needFireRingRemoval.map(item => {
              if (item.name ==res.needFireRingRemoval)
                {item.uv += 1}
            })
            total.needSignageFix.map(item => {
              if (item.name ==res.needSignageFix)
                {item.uv += 1}
            })
            total.needTrashPickup.map(item => {
              if (item.name ==res.needTrashPickup)
                {item.uv += 1}
            })
        })
      }
  
    return(
        <>
              <p>has it been contained?</p>
              <Chart form={total.contained}/>  
              <p>is there erosion?</p>
              <Chart form={total.erosion}/> 
              <p>is there human waste?</p>
              <Chart form={total.humanWaste}/> 
              <p>is there improvments?</p>
              <Chart form={total.improvements}/> 
              <p>is near a trail?</p>
              <Chart form={total.nearTrail}/> 
              <p>is it near water?</p>
              <Chart form={total.nearWater}/> 
              <p>is there trash?</p>
              <Chart form={total.trash}/> 
              <p>containment repair done?</p>
              <Chart form={total.doneContainmentRepair}/> 
              <p>need containment repair?</p>
              <Chart form={total.needContainmentRepair}/> 
              <p>fire ring removal done?</p>
              <Chart form={total.doneFireRingRemoval}/> 
              <p>need fire ringsremoved?</p>
              <Chart form={total.needFireRingRemoval}/> 
              <p>signage fixed?</p>
              <Chart form={total.doneSignageFix}/> 
              <p>need sigange fix?</p>
              <Chart form={total.needSignageFix}/> 
              <p>trash picked up?</p>
              <Chart form={total.doneTrashPickup}/> 
              <p>need trash pickup?</p>
              <Chart form={total.needTrashPickup}/> 
        </>
    )
}
export default SitePage