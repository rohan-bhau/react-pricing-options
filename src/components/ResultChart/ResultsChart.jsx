import React from 'react';
// import { Line, LineChart, XAxis, YAxis } from 'recharts';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


const ResultsChart = () => {
    const data = [
      { id: 1, name: "Arif", physics: 78, chemistry: 72, math: 85 },
      { id: 2, name: "Rahim", physics: 88, chemistry: 81, math: 90 },
      { id: 3, name: "Karim", physics: 65, chemistry: 70, math: 68 },
      { id: 4, name: "Sakib", physics: 92, chemistry: 89, math: 95 },
      { id: 5, name: "Naim", physics: 74, chemistry: 76, math: 79 },
      { id: 6, name: "Tanvir", physics: 83, chemistry: 78, math: 82 },
      { id: 7, name: "Hasan", physics: 59, chemistry: 64, math: 61 },
      { id: 8, name: "Fahim", physics: 91, chemistry: 87, math: 93 },
      { id: 9, name: "Rafi", physics: 69, chemistry: 73, math: 71 },
      { id: 10, name: "Imran", physics: 85, chemistry: 80, math: 88 },
    ];
    return (
      <div className="px-20 py-10 flex justify-center">
        <LineChart width={600} height={300} data={data}>

          <XAxis dataKey="name" />


          <YAxis />

          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="physics" stroke="#8884d8" />
          <Line type="monotone" dataKey="chemistry" stroke="#82ca9d" />
          <Line type="monotone" dataKey="math" stroke="#ffc658" />
        </LineChart>
      </div>
    );
}

export default ResultsChart;
