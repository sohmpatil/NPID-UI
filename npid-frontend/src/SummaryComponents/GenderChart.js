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
                name: 'Crimes By',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: data['Male'], name: 'Male' },
                    { value: data['Female'], name: 'Female' }
                ],
                color: chroma.scale(['#2c3e50', '#ecf0f1']).mode('lch').colors(2),
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