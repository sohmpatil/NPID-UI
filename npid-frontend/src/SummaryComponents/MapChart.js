import React, { useState } from 'react';
import './MapChart.css'
import { geoCentroid } from "d3-geo";
import { ComposableMap, Geographies, Geography, Annotation, Marker } from 'react-simple-maps';

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

export default function MapChart({ data, onStateClick }) {
    const maxMurder = Math.max(...Object.values(data));

    const handleStateClick = (geography) => {
        const clickedState = stateMappings[geography.properties.name];
        onStateClick(clickedState);
    };
    const [tooltipContent, setTooltipContent] = useState('');
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [tooltipDisplay, setTooltipDisplay] = useState('none');


    return (
        <>
        <ComposableMap projection="geoAlbersUsa">
            <Geographies geography={geoUrl}>
                {({ geographies }) => (
                    <>
                        {geographies.map(geo => {
                            const cur = data[geo.properties.name];
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={cur ? `rgba(44, 62, 80, ${0.1 + 0.9 * cur / maxMurder})` : "#D3D3D3"}
                                    onClick={() => handleStateClick(geo)}
                                    onMouseEnter={(evt) => {
                                        const { name } = geo.properties;
                                        setTooltipContent(`${name}: ${cur}`);
                                        setTooltipPosition({ x: evt.clientX, y: evt.clientY });
                                        setTooltipDisplay('block');
                                    }}
                                    onMouseMove={(evt) => {
                                        const { name } = geo.properties;
                                        setTooltipContent(`${name}: ${cur}`);
                                        setTooltipPosition({ x: evt.clientX, y: evt.clientY });
                                        setTooltipDisplay('block'); // Show the tooltip
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent('');
                                        setTooltipDisplay('none'); 
                                    }}
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
        <div className="tooltip" style={{ left: `${tooltipPosition.x}px`, top: `${tooltipPosition.y}px`, display: tooltipDisplay }}>{tooltipContent}</div>
        </>
    )
}