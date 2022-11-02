import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    const datapointValue = props.dataPoint.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...datapointValue);

  return (
    <div className='chart'>
        {props.dataPoint.map((dataPoint) => (
            <ChartBar
                key = {dataPoint.label}
                value = {dataPoint.value}
                maxValue = {totalMax}
                label = {dataPoint.label}
            />
        ))}
    </div>
  )
}

export default Chart