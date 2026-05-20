import logo from './logo.svg';
import './App.css';
import BarChart from "./chart/BarChart";
import PieChart from "./chart/PieChart";

function App() {
  return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <PieChart
          data={[20, 13, 45, 78, 34]}
          colors={["#ef4444", "#f97316", "#f59e0b", "#10b981", "#3b82f6"]}
          labels={["ianuarie", "februarie", "martie", "aprilie", "mai"]}
          width={300}
          height={350}
      />
    </div>
  );
}

export default App;
