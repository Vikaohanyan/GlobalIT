import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Հունվար', cards: 12 },
  { name: 'Փետրվար', cards: 19 },
  { name: 'Մարտ', cards: 32 },
  { name: 'Ապրիլ', cards: 45 },
  { name: 'Մայիս', cards: 28 },
  { name: 'Հունիս', cards: 55 },
];

const AdminChart = () => {
  return (
    <div style={{
      backgroundColor: '#1f2937', 
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
      color: '#fff',
      marginTop: '20px'
    }}>
      <h3 style={{ marginBottom: '15px', color: '#fbbf24', fontFamily: 'sans-serif' }}>
        Քարտերի Ավելացման Վիճակագրություն 📊
      </h3>
      
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            
            <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#fff' }} />
            
            <Area type="monotone" dataKey="cards" stroke="#fbbf24" fillOpacity={0.3} fill="#fbbf24" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminChart;