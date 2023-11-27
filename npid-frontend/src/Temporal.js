import React from 'react';
import ReactECharts from 'echarts-for-react';
import chroma from 'chroma-js';

const data = {
    "2015": 1100,
    "2016": 2000,
    "2017": 2500
  };

const data2 = {
    "White": {"2015": 1234, "2016": 3243, "2017": 4533},
    "Black": {"2015": 123, "2016": 344, "2017": 3453},
    "Native American": {"2015": 3234, "2016": 432, "2017": 6544},
    "Asian": {"2015": 3423, "2016": 5442, "2017": 3452},
    "Hispanic": {"2015": 4324, "2016": 5435, "2017": 4533}
  };
function DeathChart() {
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

  const colorScale = chroma.scale(['#2c3e50', '#bdc3c7']).mode('lch').colors(Object.keys(data2).length);
  const option2 = {
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
      data: Object.keys(data2["White"]),
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
    series: Object.keys(data2).map((race, index) => ({
        name: race,
        type: 'line',
        itemStyle: {
          color: colorScale[index]
        },
        data: Object.values(data2[race])
      })),
      legend: {
        data: Object.keys(data2)
      },
  };
  return (
    <div>
        <div>
            <ReactECharts  style={{height: '400px'}} option={option} />
        </div>
        <div>
            <ReactECharts style={{height: '400px'}} option={option2} />
        </div>
    </div>
  );
}

export default DeathChart;