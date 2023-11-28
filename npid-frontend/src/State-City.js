import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import './StateCitySelector.css';
import chroma from 'chroma-js';

import PopulationChart from './StateCityComponents/PopulationChart';
import PovertyGradChart from './StateCityComponents/PovertyGradChart';
import IncomeChart from './StateCityComponents/IncomeChart';


const data_death = [
  { city: 'CA - Napa', state: 'CA', share_white: 72.1, share_black: 0.6, share_native_american: 0.8, share_asian: 2.3, share_hispanic: 27.6 },
  { city: 'CO - Grand Junction', state: 'CO', share_white: 82.7, share_black: 0.8, share_native_american: 1, share_asian: 1.1, share_hispanic: 13.9 },
  { city: 'NY - Greece', state: 'NY', share_white: 82.2, share_black: 5.4, share_native_american: 0.3, share_asian: 2.4, share_hispanic: 5.4 },
  { city: 'CA - NAPLES', state: 'CA', share_white: 72.1, share_black: 0.6, share_native_american: 0.8, share_asian: 2.3, share_hispanic: 37.6 },
  { city: 'CO - GrandJunction2', state: 'CO', share_white: 82.7, share_black: 0.8, share_native_american: 1, share_asian: 1.1, share_hispanic: 13.9 },
  { city: 'NY - Greececa', state: 'NY', share_white: 82.2, share_black: 5.3, share_native_american: 0.3, share_asian: 2.4, share_hispanic: 5.4 },
  { city: 'CA - Napa3', state: 'CA', share_white: 72.1, share_black: 0.6, share_native_american: 0.8, share_asian: 2.3, share_hispanic: 37.6 },
  { city: 'CO - Grand Junction3', state: 'CO', share_white: 82.7, share_black: 0.8, share_native_american: 1, share_asian: 1.1, share_hispanic: 13.9 },
  { city: 'NY - Greece3', state: 'NY', share_white: 82.2, share_black: 5.2, share_native_american: 0.3, share_asian: 2.4, share_hispanic: 5.4 },
  { city: 'CA - NAPLES4', state: 'CA', share_white: 72.1, share_black: 0.6, share_native_american: 0.8, share_asian: 2.3, share_hispanic: 37.6 },
  { city: 'CO - GrandJunction24', state: 'CO', share_white: 82.7, share_black: 0.8, share_native_american: 1, share_asian: 1.1, share_hispanic: 13.9 },
];


const test_data = [
  {
    "asian": 1.7,
    "black": 1.0,
    "city": "Kingman",
    "hispanic": 12.5,
    "nativeamerican": 1.7,
    "white": 88.0
  },
  {
    "asian": 5.8,
    "black": 3.4,
    "city": "Gilbert",
    "hispanic": 14.9,
    "nativeamerican": 0.8,
    "white": 81.8
  },
  {
    "asian": 0.2,
    "black": 0.2,
    "city": "Wilhoit",
    "hispanic": 9.3,
    "nativeamerican": 0.7,
    "white": 94.2
  },
  {
    "asian": 2.6,
    "black": 5.1,
    "city": "Surprise",
    "hispanic": 18.5,
    "nativeamerican": 0.7,
    "white": 80.6
  },
  {
    "asian": 0.8,
    "black": 0.4,
    "city": "Show Low",
    "hispanic": 12.8,
    "nativeamerican": 4.1,
    "white": 87.6
  }]

const test_data1 = [
  {
    "city": "Prescott",
    "deaths": 2,
    "percent_completed_hs": 92.8,
    "poverty_rate": 15.5
  },
  {
    "city": "Bisbee",
    "deaths": 1,
    "percent_completed_hs": 87.3,
    "poverty_rate": 29.1
  },
  {
    "city": "Golden Shores",
    "deaths": 1,
    "percent_completed_hs": 77.9,
    "poverty_rate": 7.4
  },
  {
    "city": "Mesa",
    "deaths": 6,
    "percent_completed_hs": 87.5,
    "poverty_rate": 16.5
  },
  {
    "city": "Show Low",
    "deaths": 1,
    "percent_completed_hs": 88.7,
    "poverty_rate": 18.4
  },
  {
    "city": "Scottsdale",
    "deaths": 3,
    "percent_completed_hs": 96.2,
    "poverty_rate": 9.5
  },
  {
    "city": "Sun City",
    "deaths": 2,
    "percent_completed_hs": 91.0,
    "poverty_rate": 8.4
  },
  {
    "city": "Lake Havasu City",
    "deaths": 1,
    "percent_completed_hs": 88.5,
    "poverty_rate": 13.8
  },
  {
    "city": "Chandler",
    "deaths": 2,
    "percent_completed_hs": 91.5,
    "poverty_rate": 10.0
  },
  {
    "city": "Maricopa",
    "deaths": 1,
    "percent_completed_hs": 91.7,
    "poverty_rate": 8.1
  }]

const test_data2 = [
  {
    "city": "Kingman",
    "deaths": 5,
    "median_income": 43246
  },
  {
    "city": "Gilbert",
    "deaths": 2,
    "median_income": 82424
  },
  {
    "city": "Wilhoit",
    "deaths": 1,
    "median_income": 34167
  },
  {
    "city": "Surprise",
    "deaths": 1,
    "median_income": 59916
  },
  {
    "city": "Show Low",
    "deaths": 1,
    "median_income": 42614
  },
  {
    "city": "Flagstaff",
    "deaths": 3,
    "median_income": 48680
  },
  {
    "city": "Golden Shores",
    "deaths": 1,
    "median_income": 29118
  },
  {
    "city": "Glendale",
    "deaths": 7,
    "median_income": 46776
  },
  {
    "city": "Bullhead City",
    "deaths": 1,
    "median_income": 35948
  },
  {
    "city": "Lake Havasu City",
    "deaths": 1,
    "median_income": 42847
  }]

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
        {/* <ReactECharts option={option} style={{ height: '400px' }} /> */}
        <PopulationChart data={test_data} />
        <ReactECharts option={deathOption} style={{ height: '400px' }} />
        {/* <ReactECharts option={poverty_hs_option} style={{ height: '400px' }} />; */}
        <PovertyGradChart data={test_data1} />
        {/* <ReactECharts option={median_income_option} style={{ height: '400px' }} />; */}
        <IncomeChart data={test_data2} />
      </div>
    </div>
  );
}

export default StateCitySelector;