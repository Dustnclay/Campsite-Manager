
import React, {Component,useEffect,useState} from "react"
import axios from 'axios'
import Chart from "./Chart"

function SitePage(props) {

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
  }

  const totalwork = []
       
    let db_url = process.env.DB_URL || "https://campsite-manager.herokuapp.com/form/"

    const forms = [
      {collector: "dusty",
          contained: "No",
          date: "2021-04-01",
          disturbedArea: "1-5 sqft",
          doneContainmentRepair: "false",
          doneFireRingRemoval: "false",
          doneSignageFix: "false",
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
          },{collector: "dusty",
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
          },]

      const endresult = forms

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
        })

    // useEffect(() => {
    //     console.log("currentsSite",props.currentSite)
    //     axios.get(db_url + props.currentSite)
    //     .then(res => setFormData(res.data))
    //     .catch(err => console.log(err))
    //     },[])
  
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
        </>
    )
}
export default SitePage