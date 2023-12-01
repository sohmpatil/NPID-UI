import React from 'react';
import ReactECharts from 'echarts-for-react';

export default function PovertyGradChart({ data }) {
    const option = {
        title: {
            text: 'Poverty and Highschool Completion Rate vs Deaths',
            left: 'center',
            top: '20px',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
            },
        },
        legend: {
            data: ['Poverty Rate', 'HS Completion', 'Deaths']
        },
        xAxis: {
            type: 'category',
            data: data.map((item) => item.city),
            axisLabel: {
                show: true,
                rotate: 90,
                interval: 0
            },
        },
        yAxis: [
            {
                type: 'value',
                name: 'Poverty Rate & HS Completion',
            },
            {
                type: 'value',
                name: 'Deaths',
            },
        ],
        series: [
            {
                name: 'Poverty Rate',
                data: data.map((item) => item.poverty_rate),
                type: 'line',
                color: '#2c3e50',
                lineStyle: {
                    width: 2,
                },
            },
            {
                name: 'HS Completion',
                data: data.map((item) => item.percent_completed_hs),
                type: 'line',
                color: '#0077b6',
                lineStyle: {
                    width: 3,
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