import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
} from 'recharts';

const Sparkline = ({ data }) => {
  if (!data || data.length === 0) {
    return <div style={{ width: '100px', height: '40px' }}></div>;
  }

  return (
    <div style={{ width: '100px', height: '40px', margin: '0 auto' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#4FC3F7"
            strokeWidth={2}
            dot={false}
            isAnimationActive={true}
            animationDuration={500}
          />
          <Tooltip
            contentStyle={{
              background: '#1E1E1E',
              border: 'none',
              borderRadius: '6px',
              color: 'white',
              padding: '4px 8px',
            }}
            labelFormatter={() => ''}
            formatter={(value) => [`${Math.round(value)}°C`, 'Temperature']}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Sparkline;