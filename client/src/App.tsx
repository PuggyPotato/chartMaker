//import {Chart as ChartJS,ArcElement,Tooltip,Legend,LineElement,PointElement,LinearScale,CategoryScale, ChartData} from "chart.js";
//import {Chart } from "react-chartjs-2";
import Landing from "./Landing.tsx"



function App(){
 /* ChartJS.register(ArcElement,Tooltip,Legend,LineElement,PointElement,LinearScale,CategoryScale);


  const exampleData:ChartData<"line"> = {
    labels:["Jan","Feb","Mar","Apr","May"],
    datasets:[
      {
        label:"Sales",
        data:[10,20,30,40,50],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor : "rgba(75,192,192,0.2)",
        fill:true
      },
    ],
  };*/

  return(
    <>
      <div>
          <Landing/> 

        
        {/*<Chart type="line" data={exampleData}></Chart>*/}


      </div>
    </>
  )
}


export default App