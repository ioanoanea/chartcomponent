import {BoldLine, ChartLegend, ChartLine, YAxisTick} from "./ChartComponents";
import React from "react";
import {calculatePadding} from "./ChartUtils";

const ClusterBarChart = ({
                      data = [[20, 50], [30, 45]],
                      colors = ["#4f46e5", "#f59e0b"],
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
    const barSpacing = (chartWidth / data.length) * 0.4;

    const fill = Array.isArray(colors) ? colors : [colors];

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
            {data.map((group, groupIndex) => {
                return group.map((value, index) => {
                    const barHeight = (value / maxValue) * chartHeight;

                    // Width allocated for one whole cluster (group of bars)
                    const clusterWidth = chartWidth / data.length;

                    const clusterStartX = padding.left + (groupIndex * clusterWidth);
                    const barsPerCluster = group.length;

                    // Calculate the actual width of a single bar inside the cluster
                    const actualBarWidth = (clusterWidth - barSpacing) / barsPerCluster;

                    // Final X position: Start of cluster + half spacing + offset for this specific bar
                    const xPos = clusterStartX + (barSpacing / 2) + (index * actualBarWidth);

                    // y pos (from top to bottom in svg)
                    const yPos = chartHeight + padding.top - barHeight;

                    const color = fill[index % fill.length];

                    // 2. Wrap in a Fragment/Group with a UNIQUE KEY
                    return (
                        <g key={`cluster-${groupIndex}-bar-${index}`}>
                            {ChartLine(value, index, xPos, yPos, actualBarWidth, barHeight, color)}
                        </g>
                    );
                })

            })}

            {
                ChartLegend(labels, fill, width, height, padding)
            }

        </svg>
    )
}

export default ClusterBarChart;