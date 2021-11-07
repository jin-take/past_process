import {Pie, Doughnut } from 'react-chartjs-2'
import React from 'react'

const data = {
    labels: ['Output', 'Input'],
    datasets: [
        {
            data: [60,40],
            backgroundColor: ["#4169e1","#ff1493","#FFCE56"],
            hoverBackgroundColor:  ["#36A2EB","#FF6384","#FFCE56"],
            borderColor: ["transparent","transparent","transparent"]
        }
    ]
} 

const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}

export const PiePlot: React.FC = () => {
    return (
        <div>
            <Pie 
                data={data} 
                width={100}
                height={50}
            />
            {/* <Doughnut data={data} /> */}
        </div>
    )
}
