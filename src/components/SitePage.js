
import React, {Component,useEffect} from "react"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'

function SitePage(props) {
       
    let db_url = process.env.DB_URL || "https://campsite-manager.herokuapp.com/form/"

    const data = [
        {
          name: 'Yes',
          uv: 40,
        //   pv: 2400,
          amt: 2400,
        },
        {
          name: 'No',
          uv: 30,
        //   pv: 1398,
          amt: 2210,
        },
        {
          name: 'N/a',
          uv: 20,
        //   pv: 9800,
          amt: 2290,
        }

      ];

    let forms = []

    useEffect(() => {
        axios.get(db_url + props.currentSite)
        .then(res => console.log('axios',res.data))
        .catch(err => console.log(err))
        }
    )

    return(
        <>
        <p>{props.currentSite}</p>
        <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
      <Bar datakey="na" fill="#000000"/>
    </BarChart>
        </>
    )
}
export default SitePage