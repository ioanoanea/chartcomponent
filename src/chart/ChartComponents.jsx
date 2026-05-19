import React from 'react';

const ChartLine = (value, index, xPos, yPos, width, height, color="#4f46e5") => {
    return (
        <g key={index}>
            <rect
                x={xPos}
                y={yPos}
                width={width}
                height={height}
                fill={color}
                rx="4"
            />

            <text
                x={xPos + width / 2}
                y={yPos - 6}
                textAnchor="middle"
                style={{ fontSize: '11px', fill: color, fontWeight: 'bold', fontFamily: 'sans-serif' }}
            >
                {value}
            </text>
        </g>
    );
}

const BoldLine = (yPos, width, padding) => {
    return (
        <line
            x1={padding.left}
            y1={yPos}
            x2={width - padding.right}
            y2={yPos}
            stroke={'#333'}
            strokeWidth={2}
            strokeDasharray={'0'}
        />
    )
}

const YAxisTick = (index, tick, yPos, width, padding) => {
    return (
        <g key={index}>
            {/* value label */}
            <text
                x={padding.left - 15}
                y={yPos}
                textAnchor="end"
                alignmentBaseline="middle"
                style={{ fontSize: '12px', fill: '#555', fontFamily: 'sans-serif' }}
            >
                {tick}
            </text>

            {/* grid line */}
            <line
                x1={padding.left}
                y1={yPos}
                x2={width - padding.right}
                y2={yPos}
                stroke={tick === 0 ? '#333' : '#e0e0e0'}
                strokeWidth={tick === 0 ? 2 : 1}
                strokeDasharray={tick === 0 ? '0' : '4,4'}
            />
        </g>
    );
}

const ChartLegend = (labels, fill, width, height, padding) => {
    return (
        <g className="chart-legend">
            {labels.map((label, index) => {
                const color = fill[index % fill.length];

                const itemSpacing = 70;

                const yIndex = Math.floor((index * itemSpacing + 70) / (width - padding.left - padding.right));
                const xIndex = Math.floor(((index * itemSpacing + Math.min(70 * yIndex, 70)) % (width - padding.left - padding.right)) / 70);
                const legendX = padding.left + (xIndex * itemSpacing);
                const legendY = (height - padding.bottom + 10) + yIndex * 15;

                return (
                    <g key={`legend-item-${index}`}>
                        <rect
                            x={legendX}
                            y={legendY}
                            width={10}
                            height={10}
                            fill={color}
                            rx="2"
                        />
                        <text
                            x={legendX + 12}
                            y={legendY + 8}
                            fontSize="11px"
                            fontFamily="sans-serif"
                            fill="#333"
                        >
                            {label}
                        </text>
                    </g>
                );
            })}
        </g>
    )
}

export {YAxisTick, BoldLine, ChartLine, ChartLegend};