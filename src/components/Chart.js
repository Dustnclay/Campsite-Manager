import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function Chart(props){
    // console.log(props.title,props)

    // const datadistrurbance = [
    //     {
    //       name: 'Yes',
    //       uv: 4,
    //     },
    //     {
    //       name: 'No',
    //       uv: 30,
    //     },
    //   ];
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
          }}>
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