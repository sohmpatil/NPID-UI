import React, { useState, useEffect } from 'react';

import MapChart from './SummaryComponents/MapChart';
import FleeChart from './SummaryComponents/FleeChart';
import GenderChart from './SummaryComponents/GenderChart';
import MIChart from './SummaryComponents/MIChart';
import MoDChart from './SummaryComponents/MoDChart';
import RaceChart from './SummaryComponents/RaceChart';


// Replace this with your actual data
const murderData = {
    'Alabama': 4822023,
    'Alaska': 731449,
    'Arizona': 6553255,
    'Arkansas': 2949131,
    'California': 38041430,
    'Colorado': 5187582,
    'Connecticut': 3590347,
    'Delaware': 917092,
    'District of Columbia': 632323,
    'Florida': 19317568,
    'Georgia': 9919945,
    'Hawaii': 1392313,
    'Idaho': 1595728,
    'Illinois': 12875255,
    'Indiana': 6537334,
    'Iowa': 3074186,
    'Kansas': 2885905,
    'Kentucky': 4380415,
    'Louisiana': 4601893,
    'Maine': 1329192,
    'Maryland': 5884563,
    'Massachusetts': 6646144,
    'Michigan': 9883360,
    'Minnesota': 5379139,
    'Mississippi': 2984926,
    'Missouri': 6021988,
    'Montana': 1005141,
    'Nebraska': 1855525,
    'Nevada': 2758931,
    'New Hampshire': 1320718,
    'New Jersey': 8864590,
    'New Mexico': 2085538,
    'New York': 19570261,
    'North Carolina': 9752073,
    'North Dakota': 699628,
    'Ohio': 11544225,
    'Oklahoma': 3814820,
    'Oregon': 3899353,
    'Pennsylvania': 12763536,
    'Rhode Island': 1050292,
    'South Carolina': 4723723,
    'South Dakota': 833354,
    'Tennessee': 6456243,
    'Texas': 26059203,
    'Utah': 2855287,
    'Vermont': 626011,
    'Virginia': 8185867,
    'Washington': 6897012,
    'West Virginia': 1855413,
    'Wisconsin': 5726398,
    'Wyoming': 576412,
    'Puerto Rico': 3667084,
};

const genderCrimeData = {
    'Male': 5000,
    'Female': 3000
};

const raceCrimeData = {
    'White': 5000,
    'Black': 3000,
    'Native American': 2000,
    'Asian': 1000,
    'Hispanic': 4000
};

const mannerOfDeathData = {
    'Shot': 6000,
    'Shot and Tasered': 4000
};

const fleeData = {
    'Car': 3000,
    'Foot': 2000,
    'Other': 1000,
    'Not Fleeing': 4000
};

const mentalIllnessData = {
    'TRUE': 3000,
    'FALSE': 7000
};

function State() {
    const [selectedYears, setSelectedYears] = useState(['2015', '2016', '2017']);

    const handleCheckboxChange = (event) => {
        const year = event.target.value;
        setSelectedYears((prevSelectedYears) => {
            const updatedYears = event.target.checked
                ? [...prevSelectedYears, year]
                : prevSelectedYears.filter((selectedYear) => selectedYear !== year);
            return updatedYears;
        });
    };
    useEffect(() => {
        console.log(selectedYears);
    }, [selectedYears]);

    return (
        <div style={{ height: '40%' }}>
            <div>
                <label>
                    Select Years:
                </label>
                <label>
                    <input type="checkbox" value="2015" onChange={handleCheckboxChange} checked={selectedYears.includes('2015')} />
                    2015
                </label>
                <label>
                    <input type="checkbox" value="2016" onChange={handleCheckboxChange} checked={selectedYears.includes('2016')} />
                    2016
                </label>
                <label>
                    <input type="checkbox" value="2017" onChange={handleCheckboxChange} checked={selectedYears.includes('2017')} />
                    2017
                </label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                <div style={{ width: '50%' }}>
                    <MapChart data={murderData} />
                </div>
                <div style={{ width: '25%', height: '40%' }}>
                    <div style={{ height: '20%' }}>
                        <GenderChart data={genderCrimeData} />
                    </div>
                    <div style={{ height: '20%' }}>
                        <RaceChart data={raceCrimeData} />
                    </div>
                    <div style={{ height: '20%' }}>
                        <MoDChart data={mannerOfDeathData} />
                    </div>
                </div>
                <div style={{ width: '25%', height: '40%' }}>
                    <div style={{ height: '20%' }}>
                        <FleeChart data={fleeData} />
                    </div>
                    <div style={{ height: '20%' }}>
                        <MIChart data={mentalIllnessData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default State;

