import logo from './logo.svg';
import './App.css';
import BarChart from "./chart/BarChart";

function App() {
  return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <BarChart
          data={[120, 290, 113, 89]}
          colors={["#ef4444", "#f97316", "#10b981", "#3b82f6"]}
          labels={["ianuarie", "februarie", "martie", "aprilie"]}
          maxValue={300}
          yInterval={100}
      />
    </div>
  );
}

export default App;
