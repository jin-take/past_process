import React from 'react';
import {Line} from 'react-chartjs-2';


const data ={
    labels: ["Mon","Tue","Wed","Thu","Fir","Sat","Sun"],
    datasets: [
        {
            label: "１週間でのアウトプット数",
            backgroundColor: "#000000",
            borderColor: "#7fffd4",
            pointBorderWidth: 20,
            data: [3,5,10,6,3,12,8]
        }
    ]
}


export const LinePlot: React.FC = () => {
    return (
        <div>
            <Line 
                data={data} 
                width={100}
                height={100}
            />
        </div>
        // <div className="mx-auto bg-black max-w-min">
        //     <Line data={data} height={400} width={500} />
        // </div>
    )
}

