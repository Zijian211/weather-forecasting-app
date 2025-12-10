import React, { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from 'recharts';

import IconsLabels from './IconsLabels';
import { weatherIcon } from '../../../utilities/IconsUtils';
import { ALL_DESCRIPTIONS } from '../../../utilities/DateConstants';


// -------------------------
// MAIN COMPONENT
// -------------------------
const TodayForecastChart = ({ forecastList, showActualTemperature = true }) => {

  const chartData = useMemo(() => {
    return forecastList.map((item) => {
      const predicted = Number(item.temperature.replace('°C', ''));

      // Convert night icon → day icon so mapping actually works
      const normalizedIcon = item.icon.endsWith("n")
        ? item.icon.replace("n", "d")
        : item.icon;

      const descObj = ALL_DESCRIPTIONS.find(
        (d) => d.icon === `${normalizedIcon}.png`
      );

      // Generate fake "actual" temp
      const actual = showActualTemperature
        ? (predicted + (Math.random() * 10 - 5)).toFixed(0)
        : null;

      return {
        time: item.time,
        predicted,
        actual,
        icon: weatherIcon(`${item.icon}.png`),
        condition: descObj ? descObj.description : "Unknown",
      };
    });
  }, [forecastList, showActualTemperature]);


  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={chartData}>
        <CartesianGrid stroke="rgba(255,255,255,0.1)" />

        <XAxis
          dataKey="time"
          tick={{ fill: 'white' }}
          stroke="white"
          fontSize={12}
        />

        <YAxis
          tick={{ fill: 'white' }}
          stroke="white"
          fontSize={12}
          unit="°C"
        />

        <Tooltip content={<CustomTooltip />} />

        {/* Predicted Temp Line */}
        <Line
          type="monotone"
          dataKey="predicted"
          name="Predicted Temp (°C)"
          stroke="#4FC3F7"
          strokeWidth={3}
          dot={{ r: 4, strokeWidth: 2 }}
          activeDot={{ r: 6 }}
        >
          <LabelList dataKey="icon" content={<IconsLabels />} />
        </Line>

        {/* Actual Temp Line */}
        {showActualTemperature && (
          <Line
            type="monotone"
            dataKey="actual"
            name="Actual Temp (°C)"
            stroke="#FFD54F"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};


// -------------------------
// TOOLTIP COMPONENT
// -------------------------
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  const data = payload[0].payload;

  return (
    <div
      style={{
        backgroundColor: '#08340F',
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid rgba(255,255,255,0.2)',
        color: 'white',
      }}
    >
      <p><strong>Time:</strong> {label}</p>
      <p>Predicted: {data.predicted}°C</p>

      {data.actual && <p>Actual: {data.actual}°C</p>}

      <p><strong>Condition:</strong> {data.condition}</p>

      {data.icon && (
        <img
          src={data.icon}
          alt="weather icon"
          style={{ width: '34px', marginTop: '6px' }}
        />
      )}
    </div>
  );
};

export default TodayForecastChart;
