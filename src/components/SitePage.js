
import React, {Component,useEffect,useState} from "react"
import axios from 'axios'
import Chart from "./Chart"

function SitePage(props) {

const total={
 "contained":[
          {
            name: 'Yes',
            uv: 0,
          },
          {
            name: 'No',
            uv: 0,
          },
          {
            name: 'N/a',
            uv: 0,
          }]           
}

const totalwork = []
       
    let db_url = process.env.DB_URL || "https://campsite-manager.herokuapp.com/form/"

    const forms = [
      {collector: "dusty",
          contained: "no",
          date: "2021-04-01",
          disturbedArea: "1-5 sqft",
          doneContainmentRepair: "false",
          doneFireRingRemoval: "false",
          doneSignageFix: "false",
          doneTrashPickup: "true",
          erosion: "yes",
          fireRings: "1",
          groundDisturbance: "site has recovered",
          hours: "1",
          humanWaste: "no",
          id: 6,
          image: "",
          improvements: "yes",
          location: "107",
          nearTrail: "yes",
          nearWater: "yes",
          needContainmentRepair: "false",
          needFireRingRemoval: "false",
          needSignageFix: "false",
          needTrashPickup: "true",
          notes: "n/a",
          residential: "yes",
          siteDescription: "terrible",
          socialRoad: "-4",
          socialTrail: "2",
          survey: "newSurvey",
          trash: "no",
          treesDamaged: "-2",
      }]

      const endresult = forms

      // endresult.map(res => {if (res.contained == "no"){total.contained}})

      
      console.log("supposed", total.contained)

    // useEffect(() => {
    //     console.log("currentsSite",props.currentSite)
    //     axios.get(db_url + props.currentSite)
    //     .then(res => setFormData(res.data))
    //     .catch(err => console.log(err))
    //     },[])
  


    return(
        <>
            {/* {formData.map(form => {
            
            })} */}
              {/* <Chart form={formData}/>   */}
        </>
    )
}
export default SitePage