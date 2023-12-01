import React from 'react';
import ReactECharts from 'echarts-for-react';
import chroma from 'chroma-js';


export default function RaceChart({ data }) {
    const option = {
        title: {
            text: 'Race Crime Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Crimes Against',
                type: 'pie',
                radius: '50%',
                data: Object.entries(data).map(([name, value]) => ({ name, value })),
                color: chroma.scale(['#2c3e50', '#ecf0f1']).mode('lch').colors(6),
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    return <ReactECharts option={option} />;
}