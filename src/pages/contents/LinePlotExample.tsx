import React from 'react';
import {Line} from 'react-chartjs-2';


const data ={
    labels: ["Mon","Tue","Wed","Thu","Fir","Sat","Sun"],
    datasets: [
        {
            label: "１週間でのインプット数",
            backgroundColor: "#000000",
            borderColor: "#7fffd4",
            pointBorderWidth: 10,
            data: [1,1,3,2,7,2,5]
        }
    ]
}


export const LinePlotExample: React.FC = () => {
    return (
        <div>
            <Line 
                data={data} 
                width={100}
                height={100}
            />
        </div>
    )
}

