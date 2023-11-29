import React from 'react';
import ReactECharts from 'echarts-for-react';
import chroma from 'chroma-js';

export default function MIChart({ data }) {
    const option = {
        title: {
            text: 'Mental Illness Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return params.name === 'yes' ? 'Yes: ' + params.value : 'No: ' + params.value;
            }
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Yes', 'No']
        },
        series: [
            {
                name: 'Mental Illness',
                type: 'pie',
                radius: '50%',
                data: Object.entries(data).map(([name, value]) => ({ name: name === 'yes' ? 'Yes' : 'No', value })),
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