import React from 'react';
import ReactECharts from 'echarts-for-react';
import chroma from 'chroma-js';


export default function PopulationChart({ data }) {
    const baseColor = '#2c3e50';
    const colorScale = chroma.scale([baseColor, '#aaaaaa']).mode('lch').colors(5);

    const option = {
        title: {
            text: 'Population Percentage',
            left: 'center',
            top: '20px',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['White', 'Black', 'Native American', 'Asian', 'Hispanic']
        },
        xAxis: [
            {
                name: 'City Names',
                axisLabel: {
                    show: true,
                    rotate: 90,
                    interval: 0
                },
                type: 'category',
                axisTick: { show: false },
                data: data.map((cityData) => cityData.city)
            }
        ],
        yAxis: [
            {
                name: 'Percentage',
                axisLabel: {
                    show: true
                },
                type: 'value',
                height: '500px'
            }
        ],
        series: [
            {
                name: 'White',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    color: colorScale[0]
                },
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: data.map((cityData) => cityData.white)
            },
            {
                name: 'Black',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    color: colorScale[1]
                },
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: data.map((cityData) => cityData.black)
            },
            {
                name: 'Native American',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    color: colorScale[2]
                },
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: data.map((cityData) => cityData.nativeamerican)
            },
            {
                name: 'Asian',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    color: colorScale[3]
                },
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: data.map((cityData) => cityData.asian)
            },
            {
                name: 'Hispanic',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    color: colorScale[4]
                },
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: data.map((cityData) => cityData.hispanic)
            }
        ]
    };

    return <ReactECharts style={{ height: '400px' }} option={option} />;
}