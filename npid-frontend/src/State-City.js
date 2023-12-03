import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './StateCitySelector.css';

import PopulationChart from './StateCityComponents/PopulationChart';
import PovertyGradChart from './StateCityComponents/PovertyGradChart';
import IncomeChart from './StateCityComponents/IncomeChart';
import KillingsChart from './StateCityComponents/KillingsChart';

// const test_data = [
//   {
//     "asian": 1.7,
//     "black": 1.0,
//     "city": "Kingman",
//     "hispanic": 12.5,
//     "nativeamerican": 1.7,
//     "white": 88.0
//   },
//   {
//     "asian": 5.8,
//     "black": 3.4,
//     "city": "Gilbert",
//     "hispanic": 14.9,
//     "nativeamerican": 0.8,
//     "white": 81.8
//   },
//   {
//     "asian": 0.2,
//     "black": 0.2,
//     "city": "Wilhoit",
//     "hispanic": 9.3,
//     "nativeamerican": 0.7,
//     "white": 94.2
//   },
//   {
//     "asian": 2.6,
//     "black": 5.1,
//     "city": "Surprise",
//     "hispanic": 18.5,
//     "nativeamerican": 0.7,
//     "white": 80.6
//   },
//   {
//     "asian": 0.8,
//     "black": 0.4,
//     "city": "Show Low",
//     "hispanic": 12.8,
//     "nativeamerican": 4.1,
//     "white": 87.6
//   }]

// const test_data1 = [
//   {
//     "city": "Prescott",
//     "deaths": 2,
//     "percent_completed_hs": 92.8,
//     "poverty_rate": 15.5
//   },
//   {
//     "city": "Bisbee",
//     "deaths": 1,
//     "percent_completed_hs": 87.3,
//     "poverty_rate": 29.1
//   },
//   {
//     "city": "Golden Shores",
//     "deaths": 1,
//     "percent_completed_hs": 77.9,
//     "poverty_rate": 7.4
//   },
//   {
//     "city": "Mesa",
//     "deaths": 6,
//     "percent_completed_hs": 87.5,
//     "poverty_rate": 16.5
//   },
//   {
//     "city": "Show Low",
//     "deaths": 1,
//     "percent_completed_hs": 88.7,
//     "poverty_rate": 18.4
//   },
//   {
//     "city": "Scottsdale",
//     "deaths": 3,
//     "percent_completed_hs": 96.2,
//     "poverty_rate": 9.5
//   },
//   {
//     "city": "Sun City",
//     "deaths": 2,
//     "percent_completed_hs": 91.0,
//     "poverty_rate": 8.4
//   },
//   {
//     "city": "Lake Havasu City",
//     "deaths": 1,
//     "percent_completed_hs": 88.5,
//     "poverty_rate": 13.8
//   },
//   {
//     "city": "Chandler",
//     "deaths": 2,
//     "percent_completed_hs": 91.5,
//     "poverty_rate": 10.0
//   },
//   {
//     "city": "Maricopa",
//     "deaths": 1,
//     "percent_completed_hs": 91.7,
//     "poverty_rate": 8.1
//   }]

// const test_data2 = [
//   {
//     "city": "Kingman",
//     "deaths": 5,
//     "median_income": 43246
//   },
//   {
//     "city": "Gilbert",
//     "deaths": 2,
//     "median_income": 82424
//   },
//   {
//     "city": "Wilhoit",
//     "deaths": 1,
//     "median_income": 34167
//   },
//   {
//     "city": "Surprise",
//     "deaths": 1,
//     "median_income": 59916
//   },
//   {
//     "city": "Show Low",
//     "deaths": 1,
//     "median_income": 42614
//   },
//   {
//     "city": "Flagstaff",
//     "deaths": 3,
//     "median_income": 48680
//   },
//   {
//     "city": "Golden Shores",
//     "deaths": 1,
//     "median_income": 29118
//   },
//   {
//     "city": "Glendale",
//     "deaths": 7,
//     "median_income": 46776
//   },
//   {
//     "city": "Bullhead City",
//     "deaths": 1,
//     "median_income": 35948
//   },
//   {
//     "city": "Lake Havasu City",
//     "deaths": 1,
//     "median_income": 42847
//   }]

// const test_data3 = [
//   {
//     "asian": 0,
//     "black": 0,
//     "city": "Bisbee",
//     "hispanic": 1,
//     "nativeamerican": 0,
//     "white": 0
//   },
//   {
//     "asian": 0,
//     "black": 0,
//     "city": "Kearny",
//     "hispanic": 0,
//     "nativeamerican": 0,
//     "white": 1
//   },
//   {
//     "asian": 0,
//     "black": 0,
//     "city": "Marana",
//     "hispanic": 0,
//     "nativeamerican": 0,
//     "white": 1
//   },
//   {
//     "asian": 0,
//     "black": 0,
//     "city": "Kingman",
//     "hispanic": 1,
//     "nativeamerican": 0,
//     "white": 4
//   },
//   {
//     "asian": 0,
//     "black": 0,
//     "city": "Bullhead City",
//     "hispanic": 0,
//     "nativeamerican": 0,
//     "white": 1
//   },
//   {
//     "asian": 0,
//     "black": 1,
//     "city": "Scottsdale",
//     "hispanic": 0,
//     "nativeamerican": 0,
//     "white": 2
//   }]

const stateMappings = {
  'AL': 'Alabama',
  'AK': 'Alaska',
  'AZ': 'Arizona',
  'AR': 'Arkansas',
  'CA': 'California',
  'CO': 'Colorado',
  'CT': 'Connecticut',
  'DE': 'Delaware',
  'DC': 'District of Columbia',
  'FL': 'Florida',
  'GA': 'Georgia',
  'HI': 'Hawaii',
  'ID': 'Idaho',
  'IL': 'Illinois',
  'IN': 'Indiana',
  'IA': 'Iowa',
  'KS': 'Kansas',
  'KY': 'Kentucky',
  'LA': 'Louisiana',
  'ME': 'Maine',
  'MD': 'Maryland',
  'MA': 'Massachusetts',
  'MI': 'Michigan',
  'MN': 'Minnesota',
  'MS': 'Mississippi',
  'MO': 'Missouri',
  'MT': 'Montana',
  'NE': 'Nebraska',
  'NV': 'Nevada',
  'NH': 'New Hampshire',
  'NJ': 'New Jersey',
  'NM': 'New Mexico',
  'NY': 'New York',
  'NC': 'North Carolina',
  'ND': 'North Dakota',
  'OH': 'Ohio',
  'OK': 'Oklahoma',
  'OR': 'Oregon',
  'PA': 'Pennsylvania',
  'RI': 'Rhode Island',
  'SC': 'South Carolina',
  'SD': 'South Dakota',
  'TN': 'Tennessee',
  'TX': 'Texas',
  'UT': 'Utah',
  'VT': 'Vermont',
  'VA': 'Virginia',
  'WA': 'Washington',
  'WV': 'West Virginia',
  'WI': 'Wisconsin',
  'WY': 'Wyoming',
  'PR': 'Puerto Rico',
};

function StateCitySelector({backendURL}) {
  const [dropdownStates, setDropdownStates] = useState(['AZ']);
  const [selectedState, setSelectedState] = useState('AZ');

  const [populationChartData, setpopulationChartData] = useState(null);
  const [killingsChartData, setkillingsChartData] = useState(null);
  const [povertygradChartData, setpovertygradChartData] = useState(null);
  const [incomeChartData, setincomeChartData] = useState(null);

  useEffect(() => {
    axios.get(backendURL + '//api/statecity/states')
      .then(response => setDropdownStates(response.data))
      .catch(error => console.error('Error fetching dropdown values:', error));
  }, [backendURL]);

  useEffect(() => {
    axios.get(backendURL + `/api/statecity/cityrace?state=${selectedState}`)
      .then(response => setpopulationChartData(response.data))
      .catch(error => console.error('Error fetching bar chart data:', error));

    axios.get(backendURL + `/api/statecity/cityracevictimcount?state=${selectedState}`)
      .then(response => setkillingsChartData(response.data))
      .catch(error => console.error('Error fetching line chart data:', error));

    axios.get(backendURL + `/api/statecity/rates?state=${selectedState}`)
      .then(response => setpovertygradChartData(response.data))
      .catch(error => console.error('Error fetching line chart data:', error));

    axios.get(backendURL + `/api/statecity/income?state=${selectedState}`)
      .then(response => setincomeChartData(response.data))
      .catch(error => console.error('Error fetching line chart data:', error));


  }, [selectedState, backendURL]);

  const handleDropdownChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
  };

  return (
    <div>
      <div className="dropdown-container">
      <select className='dropdown' value={selectedState} onChange={handleDropdownChange}>
          <option value="AZ">Arizona</option>
          {dropdownStates.map(value => (
              <option key={value} value={value}>{stateMappings[value]}</option>
          ))}
      </select>
      </div>
      <div className='chart-container'>
        {populationChartData ? <PopulationChart data={populationChartData} /> : 'Loading Chart...'}
        {killingsChartData ? <KillingsChart data={killingsChartData} /> : 'Loading Chart...'}
        {povertygradChartData ? <PovertyGradChart data={povertygradChartData} /> : 'Loading Chart...'}
        {incomeChartData ? <IncomeChart data={incomeChartData} /> : 'Loading Chart...'}
      </div>
    </div>
  );
}

export default StateCitySelector;