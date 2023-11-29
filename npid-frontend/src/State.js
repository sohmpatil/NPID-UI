import React, { useState, useEffect } from 'react';
import { geoCentroid } from "d3-geo";
import { ComposableMap, Geographies, Geography, Annotation, Marker } from 'react-simple-maps';

import FleeChart from './SummaryComponents/FleeChart';
import GenderChart from './SummaryComponents/GenderChart';
import MIChart from './SummaryComponents/MIChart';
import MoDChart from './SummaryComponents/MoDChart';
import RaceChart from './SummaryComponents/RaceChart';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const stateMappings = {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'District of Columbia': 'DC',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Pennsylvania': 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY',
    'Puerto Rico': 'PR',
};

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
const offsets = {
    VT: [50, -8],
    NH: [34, 2],
    MA: [30, -1],
    RI: [28, 2],
    CT: [35, 10],
    NJ: [34, 1],
    DE: [33, 0],
    MD: [47, 10],
    DC: [49, 21]
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
    const maxMurder = Math.max(...Object.values(murderData));
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
                    <ComposableMap projection="geoAlbersUsa">
                        <Geographies geography={geoUrl}>
                            {({ geographies }) => (
                                <>
                                    {geographies.map(geo => {
                                        const cur = murderData[geo.properties.name];
                                        return (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill={cur ? `rgba(44, 62, 80, ${0.1 + 0.9 * cur / maxMurder})` : "#D3D3D3"}
                                                onClick={() => console.log(stateMappings[geo.properties.name])}
                                            />
                                        );
                                    })}
                                    {geographies.map(geo => {
                                        const centroid = geoCentroid(geo);
                                        const cur = Object.keys(stateMappings).find(s => stateMappings[s] === stateMappings[geo.properties.name]);
                                        return (
                                            <g key={geo.rsmKey + "-name"}>
                                                {cur &&
                                                    centroid[0] > -160 &&
                                                    centroid[0] < -67 &&
                                                    (Object.keys(offsets).indexOf(stateMappings[cur]) === -1 ? (
                                                        <Marker coordinates={centroid}>
                                                            <text y="2" fontSize={10} textAnchor="middle">
                                                                {stateMappings[cur]}
                                                            </text>
                                                        </Marker>
                                                    ) : (
                                                        <Annotation
                                                            subject={centroid}
                                                            dx={offsets[stateMappings[cur]][0]}
                                                            dy={offsets[stateMappings[cur]][1]}
                                                        >
                                                            <text x={4} fontSize={10} alignmentBaseline="middle">
                                                                {stateMappings[cur]}
                                                            </text>
                                                        </Annotation>
                                                    ))}
                                            </g>
                                        );
                                    })}
                                </>
                            )}
                        </Geographies>
                    </ComposableMap>
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

