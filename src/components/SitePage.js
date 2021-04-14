
import React, {Component,useEffect,useState} from "react"
import axios from 'axios'
import Chart from "./Chart"

function SitePage(props) {

const timeout = false

  const db_url = process.env.DB_URL || "https://campsite-manager.herokuapp.com/form/"
useEffect(() => {
      axios.get(db_url + props.currentSite)
    .then(res => populateTotal(res.data))
    .catch(err => console.log(err))  
},[props.currentSite])


  // const [formData,setFormData] = useState([
  //   {collector: "dummy",
  //   contained: "No",
  //   date: "2021-04-01",
  //   disturbedArea: "1-5 sqft",
  //   doneContainmentRepair: "false",
  //   doneFireRingRemoval: "true",
  //   doneSignageFix: "true",
  //   doneTrashPickup: "true",
  //   erosion: "Yes",
  //   fireRings: "1",
  //   groundDisturbance: "site has recovered",
  //   hours: "1",
  //   humanWaste: "No",
  //   id: 6,
  //   image: "",
  //   improvements: "Yes",
  //   location: "dummy",
  //   nearTrail: "Yes",
  //   nearWater: "Yes",
  //   needContainmentRepair: "false",
  //   needFireRingRemoval: "false",
  //   needSignageFix: "false",
  //   needTrashPickup: "true",
  //   notes: "N/a",
  //   residential: "yes",
  //   siteDescription: "terrible",
  //   socialRoad: "-4",
  //   socialTrail: "2",
  //   survey: "newSurvey",
  //   trash: "No",
  //   treesDamaged: "-2",
  //   },
  // ])


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

//   Axios in current site change is good
// In the response is set end result

// After axios make populate total take t as an argument



// Don’t need to have use effect for update
// When this changes fetch the data,
// When data is changed calculate the total
// St a variable to it
// Populate the total with data that I know is good,
// Then pass that data to component

// Remove use effect

// Only use useState in use effect

// Get data set it to a variable
// Pass it to a function
// Parse the data
// Set the state after its arsed,
// Once the state is updated 

    let forms = [
      {collector: "dummy",
      contained: "Yes",
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
      location: "dummy",
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
    ]

      function populateTotal(inputData) {
        console.log("props in poptotal",inputData)
        inputData.map(
          res => {
            // console.log("res in map",res.contained)
            if (res.contained === "yes"){
              

              const tempstate = total
              console.log(tempstate.contained[0].name, res.contained)
              console.log("what is this??",tempstate.contained.indexOf(element => element.name.toUppercase() == res.contained.toUppercase()))

              tempstate.contained[0].uv +=1
              // console.log("contained",tempstate.contained)

              setTotal({ ...total , contained: tempstate.contained})
              // console.log("total in poptotalafter",total)
            };



//with a const total
            // total.contained.map(item => {
            //   if (item.name ==res.contained )
            //     {return item.uv += 1}     
            // }),
            // total.erosion.map(item => {
            //   if (item.name ==res.erosion )
            //     {return item.uv += 1}
            // }),
            // total.humanWaste.map(item => {
            //   if (item.name ==res.humanWaste )
            //     {return item.uv += 1}
            // }),
            // total.improvements.map(item => {
            //   if (item.name ==res.improvements)
            //     {item.uv += 1}
            // }),
            // total.nearTrail.map(item => {

            //   if (item.name ==res.nearTrail)
            //       {item.uv += 1
            //     }
            // }),
            // total.nearWater.map(item => {
            //   if (item.name ==res.nearWater)
            //     {item.uv += 1}
            // }),
            // total.trash.map(item => {
            //   if (item.name ==res.trash)
            //     {item.uv += 1}
            // }),
            // //
            // total.doneContainmentRepair.map(item => {  
            //   if (item.name ==res.doneContainmentRepair)
            //     {item.uv += 1}
            // }),
            
            // total.doneFireRingRemoval.map(item => {
            //   if (item.name ==res.doneFireRingRemoval)
            //     {item.uv += 1}
            // }),
            // total.doneSignageFix.map(item => {
            //   if (item.name ==res.doneSignageFix)
            //     {item.uv += 1}
            // }),
            // total.doneTrashPickup.map(item => {
            //   if (item.name ==res.doneTrashPickup)
            //     {item.uv += 1}
            // }),
            // total.needContainmentRepair.map(item => {
            //   console.log(item.name, res.needContainmentRepair)
            //   if (item.name ==res.needContainmentRepair)
            //     {item.uv += 1}
            // }),
            // total.needFireRingRemoval.map(item => {
            //   if (item.name ==res.needFireRingRemoval)
            //     {item.uv += 1}
            // }),
            // total.needSignageFix.map(item => {
            //   if (item.name ==res.needSignageFix)
            //     {item.uv += 1}
            // }),
            // total.needTrashPickup.map(item => {
            //   if (item.name ==res.needTrashPickup)
            //     {item.uv += 1}
            // }),
            // console.log("total",total)
        })
      }

      // setTimeout(() => {
      //   timeout = true
      // }, 4000);
  console.log("container", total)
    return(
        <>
          
              <p>has it been contained?</p>
              <Chart title={"contained"} form={total.contained}/>  
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
export default SitePage