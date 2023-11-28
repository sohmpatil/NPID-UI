import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarChart from './TemporalComponents/BarChart';
import LineChart from './TemporalComponents/LineChart';

// const data = {
//   "2015": 1100,
//   "2016": 2000,
//   "2017": 2500
// };

// const data2 = {
//   "White": { "2015": 1234, "2016": 3243, "2017": 4533 },
//   "Black": { "2015": 123, "2016": 344, "2017": 3453 },
//   "Native American": { "2015": 3234, "2016": 432, "2017": 6544 },
//   "Asian": { "2015": 3423, "2016": 5442, "2017": 3452 },
//   "Hispanic": { "2015": 4324, "2016": 5435, "2017": 4533 }
// };

function DeathChart() {
  const [barChartData, setBarChartData] = useState(null);
  const [lineChartData, setLineChartData] = useState(null);

  useEffect(() => {
    // Fetch bar chart data
    axios.get('http://127.0.0.1:5000/api/temporal/count')
      .then(response => setBarChartData(response.data))
      .catch(error => console.error('Error fetching bar chart data:', error));

    // Fetch line chart data
    axios.get('http://127.0.0.1:5000/api/temporal/racecount')
      .then(response => setLineChartData(response.data))
      .catch(error => console.error('Error fetching line chart data:', error));
  }, []);

  return (
    <div>
      <div>
        {/* <BarChart data={barChartData} /> */}
        {barChartData ? <BarChart data={barChartData} /> : 'Loading Bar Chart...'}
      </div>
      <div>
        {/* <LineChart data={lineChartData} /> */}
        {lineChartData ? <LineChart data={lineChartData} /> : 'Loading Line Chart...'}
      </div>
    </div>
  );
}

export default DeathChart;