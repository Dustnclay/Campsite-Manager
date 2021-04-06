
import React, {Component,useEffect,useState} from "react"
import axios from 'axios'
import Chart from "./Chart"

function SitePage(props) {

    const [formData, setFormData] = useState([
          {
            name: 'Yes',
            uv: 42,
            name:1
          },
          {
            name: 'No',
            uv: 30,
            name:2
          },
          {
            name: 'N/a',
            uv: 20,
            name:3
          }]           
    )
       
    let db_url = process.env.DB_URL || "https://campsite-manager.herokuapp.com/form/"

    const forms = []

    useEffect(() => {
        console.log("currentsSite",props.currentSite)
        axios.get(db_url + props.currentSite)
        .then(res => setFormData(res.data))
        .catch(err => console.log(err))
        },[]    )
  

    return(
        <>
            {formData.map(form => {
            
            })}
              <Chart form={formData}/>  
        </>
    )
}
export default SitePage