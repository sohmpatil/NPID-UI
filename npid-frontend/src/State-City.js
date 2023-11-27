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
        type: 'category',
        axisTick: { show: false },
        data: statesAndCities[selectedState].map((cityData) => cityData.city)
      }
    ],
    yAxis: [
      {
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
        type: 'category',
        axisTick: { show: false },
        data: statesAndCitiesDeath[selectedState].map((cityData) => cityData.city)
      }
    ],
    yAxis: [
      {
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
        </div>
    </div>
  );
}

export default StateCitySelector;