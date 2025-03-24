//import {Chart as ChartJS,ArcElement,Tooltip,Legend,LineElement,PointElement,LinearScale,CategoryScale, ChartData} from "chart.js";
//import {Chart } from "react-chartjs-2";
import ExcelChart from "./ExcelChart.tsx";
import Landing from "./Landing.tsx"
import ManualChart from "./ManualChart.tsx";
import Home from "./Home.tsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App(){
 

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/Home.tsx" element={<Home/>}></Route>
          <Route path="/ManualChart.tsx" element={<ManualChart/>}></Route>
          <Route path="/ExcelChart.tsx" element={<ExcelChart/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App