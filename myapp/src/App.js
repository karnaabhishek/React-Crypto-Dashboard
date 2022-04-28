import './App.css';
import BarChart from './Charts/BarChart';
import Table from './Charts/Table';
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<BarChart />} />
        <Route path="/about" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
