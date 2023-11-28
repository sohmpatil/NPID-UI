import React from 'react';
import ReactECharts from 'echarts-for-react';

export default function BarChart({ data }) {
    const option = {
        title: {
            text: 'Deaths by Years',
            left: 'center',
            top: '20px',
        },
        tooltip: {},
        xAxis: {
            name: 'Year',
            data: Object.keys(data),
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
        series: [{
            name: 'Deaths',
            type: 'bar',
            color: '#2c3e50',
            data: Object.values(data)
        }]
    };
    return <ReactECharts style={{ height: '400px' }} option={option} />;
}