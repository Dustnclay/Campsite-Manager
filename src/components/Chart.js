import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart(props){
    console.log("forms in charts",props.title)

    const datadistrurbance = [
        {
          name: 'Yes',
          uv: 42,
        },
        {
          name: 'No',
          uv: 30,
        },
        {
          name: 'N/a',
          uv: 20,
        }
      ];
      // console.log("props102",props)
    return(
            <BarChart
    width={300}
    height={175}
    data={props.form}
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
    {/* <Bar dataKey="pv" fill="#8884d8" /> */}
    <Bar dataKey="uv" fill="#82ca9d" />
    {/* <Bar datakey="na" fill="#000000"/> */}
  </BarChart>
  )

}

export default Chart