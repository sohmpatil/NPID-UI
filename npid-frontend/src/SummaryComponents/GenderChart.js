import React from 'react';
import ReactECharts from 'echarts-for-react';
import chroma from 'chroma-js';


export default function GenderChart({ data }) {
    const option = {
        title: {
            text: 'Gender Crime Data',
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
                color: chroma.scale(['#ecf0f1', '#2c3e50']).mode('lch').colors(2),
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