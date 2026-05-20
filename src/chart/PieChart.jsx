import React from "react";
import {calculatePadding} from "./ChartUtils";
import {ChartLegend} from "./ChartComponents";

const PieChart = ({
                      data=[35, 65],
                      colors=["#4f46e5", "#f59e0b"],
                      labels=[],
                      width=200,
                      height=200
                  }) => {
    const padding = calculatePadding(labels.length, 0, width, height);

    let cumulativeAngle = 0;

    const cx = width / 2 + padding.left - padding.right;
    const cy = height / 2  + padding.top - padding.bottom;
    const radius = Math.min(width, height) / 2 - 30;

    // calculate total sum
    const total = data.reduce((sum, item) => sum + item, 0);

    // transform polar coordinates to cartesian
    const polarToCartesian = (centerX, centerY, r, angleInDegrees) => {
        // In SVG, angle 0 e is at 15pm. To start at 12 subtract 90
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + r * Math.cos(angleInRadians),
            y: centerY + r * Math.sin(angleInRadians)
        };
    };

    const fill = Array.isArray(colors) ? colors : [colors];
    return (
        <svg width={width} height={height} style={{ border: '1px solid #eee', background: '#f9f9f9' }}>
            {data.map((value, index) => {
                const sliceAngle = (value / total) * 360; // Ex: (50/100) * 360 = 180 grade

                const startAngle = cumulativeAngle;
                const endAngle = cumulativeAngle + sliceAngle;
                cumulativeAngle += sliceAngle; // Adunăm pentru a muta punctul de start pentru următoarea felie

                // compute svg points
                const start = polarToCartesian(cx, cy, radius, endAngle);
                const end = polarToCartesian(cx, cy, radius, startAngle);


                const largeArcFlag = sliceAngle > 180 ? "1" : "0";

                // M = move to center
                // L = draw a line till the edge of the circle
                // A = draw an arc
                // Z = close the path
                const pathData = [
                    "M", cx, cy,
                    "L", start.x, start.y,
                    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
                    "Z"
                ].join(" ");

                const labelAngle = startAngle + (sliceAngle / 2);
                const labelPos = polarToCartesian(cx, cy, radius + 20, labelAngle); // raza + 20px

                return (
                    <g key={index}>
                        <path
                            d={pathData}
                            fill={fill[index % fill.length]}
                            stroke="#ffffff"
                            strokeWidth="2"
                        />
                        <text
                            x={labelPos.x}
                            y={labelPos.y}
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            fontSize="12"
                            fontWeight="bold"
                            fill="#374151"
                        >
                            {value}
                        </text>
                    </g>
                )
            })}

            {
                ChartLegend(labels, fill, width, height, padding)
            }

        </svg>
    )
}

export default PieChart;