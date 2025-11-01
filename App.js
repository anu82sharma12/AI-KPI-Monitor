import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

function App() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("http://127.0.0.1:5000/metrics").then(res => {
        const timestamp = new Date().toLocaleTimeString();
        setMetrics(prev => [...prev.slice(-9), { time: timestamp, ...res.data }]);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "2rem" }}>
      <h2>AI-Driven KPI Monitor</h2>
      <LineChart width={600} height={300} data={metrics}>
        <XAxis dataKey="time" /><YAxis />
        <Tooltip /><Legend />
        <Line dataKey="Revenue" stroke="#8884d8" />
        <Line dataKey="Customer_Satisfaction" stroke="#82ca9d" />
        <Line dataKey="Conversion_Rate" stroke="#ff7300" />
      </LineChart>
    </div>
  );
}

export default App;
