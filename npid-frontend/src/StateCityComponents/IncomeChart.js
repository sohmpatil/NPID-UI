import React from 'react';
import ReactECharts from 'echarts-for-react';


export default function IncomeChart({ data }) {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
            },
        },
        xAxis: {
            type: 'category',
            data: data.map((item) => item.city),
        },
        yAxis: [
            {
                type: 'value',
                name: 'Median Income',
            },
            {
                type: 'value',
                name: 'Deaths',
            },
        ],
        series: [
            {
                name: 'Median Income',
                data: data.map((item) => item.median_income),
                type: 'line',
                color: '#2c3e50',
                lineStyle: {
                    width: 2,
                },
            },
            {
                name: 'Deaths',
                data: data.map((item) => item.deaths),
                type: 'line',
                yAxisIndex: 1,
                color: '#023e8a',
                lineStyle: {
                    width: 4,
                },
            },
        ],
    };
    return <ReactECharts style={{ height: '400px' }} option={option} />;
}