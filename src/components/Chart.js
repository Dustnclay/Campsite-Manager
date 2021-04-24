import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';


function Chart(props){

    return(
        <BarChart
          width={500}
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
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
  )
}

export default Chart