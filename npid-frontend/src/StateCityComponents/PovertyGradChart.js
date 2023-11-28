import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import chroma from 'chroma-js';

export default function PovertyGradChart({ data }) {
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