import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import chroma from 'chroma-js';

export default function KillingsChart({ data }) {
    return <ReactECharts style={{ height: '400px' }} option={option} />;
}