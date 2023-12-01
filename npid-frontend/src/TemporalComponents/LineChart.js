import React from 'react';
import ReactECharts from 'echarts-for-react';
import chroma from 'chroma-js';

export default function LineChart({ data }) {
    const colorScale = chroma.scale(['#2c3e50', '#bdc3c7']).mode('lch').colors(Object.keys(data).length);
    const option = {
        title: {
            text: 'Deaths per Year by Race',
            left: 'center',
            top: '20px',
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                let result = '';
                params.forEach((param) => {
                    result += `${param.seriesName}: ${param.value}<br/>`;
                });
                return result;
            }
        },
        xAxis: {
            name: 'Year',
            data: Object.keys(data["White"]),
            axisLabel: {
                show: true
            }
        },
        yAxis: {
            name: 'Number of Deaths',
            axisLabel: {
                show: true
            }
        },
        series: Object.keys(data).map((race, index) => ({
            name: race,
            type: 'line',
            itemStyle: {
                color: colorScale[index]
            },
            data: Object.values(data[race])
        })),
        legend: {
            top: '350px',
            data: Object.keys(data)
        },
    };
    return <ReactECharts style={{ height: '400px' }} option={option} />;
}