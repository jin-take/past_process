import { Bar } from 'react-chartjs-2';
import React from 'react';

const data = {
    // x 軸のラベル
    labels: ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11 月', '12 月'],
    datasets: [
        {
        label: '月毎のアウトプット数',
        // データの値
        data: [65, 59, 80, 81, 56, 55, 40, 20, 80, 92, 75, 55],
        // グラフの背景色
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
        ],
        // グラフの枠線の色
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
        ],
        // グラフの枠線の太さ
        borderWidth: 3,
        },
    ],
};

const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}

// レンダリング
export const BarPlot: React.FC = () => {
    return (
        <div>
            <Bar 
                data={data} 
                width={200} 
                height={200} 
            />
        </div>
    )
}