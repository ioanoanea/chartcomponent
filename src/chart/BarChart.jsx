import React from 'react';
import {BoldLine, ChartLegend, YAxisTick} from "./ChartComponents";
import {ChartLine} from "./ChartComponents";
import {calculatePadding} from "./ChartUtils";

const BarChart = ({
                      data = [20, 50],
                      colors = ["#4f46e5"],
                      labels = [],
                      maxValue = 100,
                      yInterval = 0,
                      width = 300,
                      height = 200
                      }) => {

    const padding = calculatePadding(labels.length, yInterval, width, height);

    // canvas size
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Values for y axis
    const yTicks = [];
    if (yInterval > 0) {
        for (let i = 0; i <= maxValue; i += yInterval) {
            yTicks.push(i);
        }
    }

    const barWidth = (chartWidth / data.length) * 0.6;
    const barSpacing = (chartWidth / data.length) * 0.4;

    const fill = Array.isArray(colors) ? colors : [colors];

    let la = labels;
    return (
        <svg width={width} height={height} style={{ border: '1px solid #eee', background: '#f9f9f9' }}>

            {/* Bottom line */}
            {
                BoldLine(chartHeight + padding.top, width, padding)
            }
            {/* Y axis ticks */}
            {yTicks.map((tick, index) => {
                const yPos = chartHeight + padding.top - (tick / maxValue) * chartHeight;
                return YAxisTick(index, tick, yPos, width, padding);
            })}

            {/* Chart lines */}
            {data.map((value, index) => {
                // Line height related to chart
                const barHeight = (value / maxValue) * chartHeight;
                // x pos
                const xPos = padding.left + index * (chartWidth / data.length) + barSpacing / 2;
                // y pos (from top to bottom in svg)
                const yPos = chartHeight + padding.top - barHeight;

                const color = fill[index % fill.length];

                return ChartLine(value, index, xPos, yPos, barWidth, barHeight, color)

            })}

            {
                ChartLegend(labels, fill, width, height, padding)
            }

        </svg>
    );
};

export default BarChart;