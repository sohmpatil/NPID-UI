import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Detailed.css';

function Detailed({backendURL}) {

  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch table chart data
    axios.get(backendURL + '/api/details')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching table data:', error));
  }, [backendURL]);

  return (
    <div className="Detailed Detailed-Table">
      {data ?
        <table>
          <tr>
            <th>Name</th>
            <th>Race</th>
            <th>Age</th>
            <th>Death Year</th>
            <th>Gender</th>
            <th>Mental Illness</th>
            <th>Manner of Death</th>
            <th>Weapon</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.race}</td>
                <td>{val.age}</td>
                <td>{val.deathyear}</td>
                <td>{val.gender}</td>
                <td>{val.mentalillness}</td>
                <td>{val.mannerofdeath}</td>
                <td>{val.weapon}</td>
              </tr>
            )
          })}
        </table>
        : 'Loading Table Data'
      }
    </div>
  );
}

export default Detailed;