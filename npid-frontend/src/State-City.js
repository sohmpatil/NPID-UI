import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import './StateCitySelector.css';
import chroma from 'chroma-js';

const data = [
  { city: 'CA - Napa', state: 'CA', share_white: 75.1, share_black: 0.6, share_native_american: 0.8, share_asian: 2.3, share_hispanic: 27.6},
  { city: 'CO - Grand Junction', state: 'CO', share_white: 88.7, share_black: 0.8, share_native_american: 1, share_asian: 1.1, share_hispanic: 13.9},
  { city: 'NY - Greece', state: 'NY', share_white: 88.2, share_black: 5.4, share_native_american: 0.3, share_asian: 2.4, share_hispanic: 5.4},
  { city: 'CA - NAPLES', state: 'CA', share_white: 75.1, share_black: 0.6, share_native_american: 0.8, share_asian: 2.3, share_hispanic: 37.6},
  { city: 'CO - GrandJunction2', state: 'CO', share_white: 88.7, share_black: 0.8, share_native_american: 1, share_asian: 1.1, share_hispanic: 13.9},
  { city: 'NY - Greececa', state: 'NY', share_white: 88.2, share_black: 5.3, share_native_american: 0.3, share_asian: 2.4, share_hispanic: 5.4},
  { city: 'CA - Napa3', state: 'CA', share_white: 75.1, share_black: 0.6, share_native_american: 0.8, share_asian: 2.3, share_hispanic: 37.6},
  { city: 'CO - Grand Junction3', state: 'CO', share_white: 88.7, share_black: 0.8, share_native_american: 1, share_asian: 1.1, share_hispanic: 13.9},
  { city: 'NY - Greece3', state: 'NY', share_white: 88.2, share_black: 5.2, share_native_american: 0.3, share_asian: 2.4, share_hispanic: 5.4},
  { city: 'CA - NAPLES4', state: 'CA', share_white: 75.1, share_black: 0.6, share_native_american: 0.8, share_asian: 2.3, share_hispanic: 37.6},
  { city: 'CO - GrandJunction24', state: 'CO', share_white: 88.7, share_black: 0.8, share_native_american: 1, share_asian: 1.1, share_hispanic: 13.9},
];
const data_death = [
    { city: 'CA - Napa', state: 'CA', share_white: 72.1, share_black: 0.6, share_native_american: 0.8, share_asian: 2.3, share_hispanic: 27.6},
    { city: 'CO - Grand Junction', state: 'CO', share_white: 82.7, share_black: 0.8, share_native_american: 1, share_asian: 1.1, share_hispanic: 13.9},
    { city: 'NY - Greece', state: 'NY', share_white: 82.2, share_black: 5.4, share_native_american: 0.3, share_asian: 2.4, share_hispanic: 5.4},
    { city: 'CA - NAPLES', state: 'CA', share_white: 72.1, share_black: 0.6, share_native_american: 0.8, share_asian: 2.3, share_hispanic: 37.6},
    { city: 'CO - GrandJunction2', state: 'CO', share_white: 82.7, share_black: 0.8, share_native_american: 1, share_asian: 1.1, share_hispanic: 13.9},
    { city: 'NY - Greececa', state: 'NY', share_white: 82.2, share_black: 5.3, share_native_american: 0.3, share_asian: 2.4, share_hispanic: 5.4},
    { city: 'CA - Napa3', state: 'CA', share_white: 72.1, share_black: 0.6, share_native_american: 0.8, share_asian: 2.3, share_hispanic: 37.6},
    { city: 'CO - Grand Junction3', state: 'CO', share_white: 82.7, share_black: 0.8, share_native_american: 1, share_asian: 1.1, share_hispanic: 13.9},
    { city: 'NY - Greece3', state: 'NY', share_white: 82.2, share_black: 5.2, share_native_american: 0.3, share_asian: 2.4, share_hispanic: 5.4},
    { city: 'CA - NAPLES4', state: 'CA', share_white: 72.1, share_black: 0.6, share_native_american: 0.8, share_asian: 2.3, share_hispanic: 37.6},
    { city: 'CO - GrandJunction24', state: 'CO', share_white: 82.7, share_black: 0.8, share_native_american: 1, share_asian: 1.1, share_hispanic: 13.9},
];

const data_poverty_hs = [
    {city: 'CA - Napa', state: 'CA', poverty_rate: 10.1, percent_completed_hs: 55.1, deaths: 120},
    {city: 'CA - Napa2', state: 'CA', poverty_rate: 10.2, percent_completed_hs: 55.2, deaths: 122},
    {city: 'CA - Napa3', state: 'CA', poverty_rate: 10.3, percent_completed_hs: 55.3, deaths: 123},
    {city: 'CA - Napa4', state: 'CA', poverty_rate: 10.4, percent_completed_hs: 55.4, deaths: 124},
    {city: 'CA - Napa5', state: 'CA', poverty_rate: 10.5, percent_completed_hs: 55.5, deaths: 125},
    {city: 'CA - Napa6', state: 'CA', poverty_rate: 10.6, percent_completed_hs: 55.6, deaths: 126},
    {city: 'CA - Napa7', state: 'CA', poverty_rate: 10.7, percent_completed_hs: 55.7, deaths: 127},
    {city: 'CA - Napa8', state: 'CA', poverty_rate: 10.8, percent_completed_hs: 55.8, deaths: 128},
    {city: 'CA - Napa9', state: 'CA', poverty_rate: 10.9, percent_completed_hs: 55.9, deaths: 129},
];


const data_median_income = [
    {city: 'CA - Napa', state: 'CA', median_income: 55.1, deaths: 120},
    {city: 'CA - Napa2', state: 'CA', median_income: 55.2, deaths: 122},
    {city: 'CA - Napa3', state: 'CA', median_income: 55.3, deaths: 123},
    {city: 'CA - Napa4', state: 'CA', median_income: 55.4, deaths: 124},
    {city: 'CA - Napa5', state: 'CA', median_income: 55.5, deaths: 125},
    {city: 'CA - Napa6', state: 'CA', median_income: 55.6, deaths: 126},
    {city: 'CA - Napa7', state: 'CA', median_income: 55.7, deaths: 127},
    {city: 'CA - Napa8', state: 'CA', median_income: 55.8, deaths: 128},
    {city: 'CA - Napa9', state: 'CA', median_income: 55.9, deaths: 129},
];

const statesAndCities = data.reduce((acc, item) => {
  if (!acc[item.state]) {
    acc[item.state] = [];
  }
  acc[item.state].push(item);
  return acc;
}, {});

const statesAndCitiesDeath = data_death.reduce((acc, item) => {
    if (!acc[item.state]) {
      acc[item.state] = [];
    }
    acc[item.state].push(item);
    return acc;
  }, {});

function StateCitySelector() {
  const [selectedState, setSelectedState] = useState(Object.keys(statesAndCities)[0]);
  const baseColor = '#2c3e50';
  const colorScale = chroma.scale([baseColor, '#aaaaaa']).mode('lch').colors(5);
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

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
            show: true
        },
        type: 'category',
        axisTick: { show: false },
        data: statesAndCities[selectedState].map((cityData) => cityData.city)
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
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: statesAndCities[selectedState].map((cityData) => cityData.share_white)
      },
      {
        name: 'Black',
        type: 'bar',
        stack: 'total',
        itemStyle: {
          color: colorScale[1]
        },
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: statesAndCities[selectedState].map((cityData) => cityData.share_black)
      },
      {
        name: 'Native American',
        type: 'bar',
        stack: 'total',
        itemStyle: {
          color: colorScale[2]
        },
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: statesAndCities[selectedState].map((cityData) => cityData.share_native_american)
      },
      {
        name: 'Asian',
        type: 'bar',
        stack: 'total',
        itemStyle: {
          color: colorScale[3]
        },
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: statesAndCities[selectedState].map((cityData) => cityData.share_asian)
      },
      {
        name: 'Hispanic',
        type: 'bar',
        stack: 'total',
        itemStyle: {
          color: colorScale[4]
        },
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: statesAndCities[selectedState].map((cityData) => cityData.share_hispanic)
      }
    ]
  };

  const deathOption = {
    title: {
      text: 'Death Percentage',
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
            show: true
        },
        type: 'category',
        axisTick: { show: false },
        data: statesAndCitiesDeath[selectedState].map((cityData) => cityData.city)
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
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: statesAndCitiesDeath[selectedState].map((cityData) => cityData.share_white)
      },
      {
        name: 'Black',
        type: 'bar',
        stack: 'total',
        itemStyle: {
          color: colorScale[1]
        },
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: statesAndCitiesDeath[selectedState].map((cityData) => cityData.share_black)
      },
      {
        name: 'Native American',
        type: 'bar',
        stack: 'total',
        itemStyle: {
          color: colorScale[2]
        },
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: statesAndCitiesDeath[selectedState].map((cityData) => cityData.share_native_american)
      },
      {
        name: 'Asian',
        type: 'bar',
        stack: 'total',
        itemStyle: {
          color: colorScale[3]
        },
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: statesAndCitiesDeath[selectedState].map((cityData) => cityData.share_asian)
      },
      {
        name: 'Hispanic',
        type: 'bar',
        stack: 'total',
        itemStyle: {
          color: colorScale[4]
        },
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: statesAndCitiesDeath[selectedState].map((cityData) => cityData.share_hispanic)
      }
    ]
  };

  const poverty_hs_option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    xAxis: {
      type: 'category',
      data: data_poverty_hs.filter(item => item.state === selectedState).map((item) => item.city),
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
        data: data_poverty_hs.filter(item => item.state === selectedState).map((item) => item.poverty_rate),
        type: 'line',
        color: '#2c3e50',
        lineStyle: {
            width: 2,
        },
      },
      {
        name: 'HS Completion',
        data: data_poverty_hs.filter(item => item.state === selectedState).map((item) => item.percent_completed_hs),
        type: 'line',
        color: '#0077b6',
        lineStyle: {
            width: 3,
        },
      },
      {
        name: 'Deaths',
        data: data_poverty_hs.filter(item => item.state === selectedState).map((item) => item.deaths),
        type: 'line',
        yAxisIndex: 1,
        color: '#023e8a',
        lineStyle: {
            width: 4,
        },
      },
    ],
  };


  const median_income_option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    xAxis: {
      type: 'category',
      data: data_median_income.filter(item => item.state === selectedState).map((item) => item.city),
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
        name: 'Median Income',
        data: data_median_income.filter(item => item.state === selectedState).map((item) => item.median_income),
        type: 'line',
        color: '#2c3e50',
        lineStyle: {
            width: 2,
        },
      },
      {
        name: 'Deaths',
        data: data_median_income.filter(item => item.state === selectedState).map((item) => item.deaths),
        type: 'line',
        yAxisIndex: 1,
        color: '#023e8a',
        lineStyle: {
            width: 4,
        },
      },
    ],
  };

  return (
    <div>
        <div className="dropdown-container">
            <select className="dropdown" value={selectedState} onChange={handleStateChange}>
                {Object.keys(statesAndCities).map((state) => (
                <option key={state} value={state}>
                    {state}
                </option>
                ))}
            </select>
        </div>
        <div className='chart-container'>
            <ReactECharts option={option}  style={{ height: '400px' }} />
            <ReactECharts option={deathOption}  style={{ height: '400px' }} />
            <ReactECharts option={poverty_hs_option} style={{ height: '400px' }} />;
            <ReactECharts option={median_income_option} style={{ height: '400px' }} />;
        </div>
    </div>
  );
}

export default StateCitySelector;