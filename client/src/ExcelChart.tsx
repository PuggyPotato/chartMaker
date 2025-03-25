import { ReactElement, useEffect, useMemo, useState,useRef } from "react"
import {Chart as ChartJS,ArcElement,Tooltip,Legend,LineElement,PointElement,LinearScale,CategoryScale, ChartData,ChartOptions} from "chart.js/auto";
import {Chart,Line ,Pie,Bar,Doughnut,Scatter} from "react-chartjs-2";
import { jsx } from "react/jsx-runtime";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { color } from "chart.js/helpers";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";


function ExcelChart(){
    const [insertedFile,setInsertedFile] = useState([]);


    const reader = new FileReader();
    const handleUploadedFile = (event:React.ChangeEvent<HTMLInputElement>) =>{
        const file = event.target.files?.[0];
        if(!file)
            return;

        reader.onload = (event:ProgressEvent<FileReader>) =>{
            const text = event.target?.result;
            if(typeof text === "string"){
                console.log("File Content:",text)
            }
        };
        reader.readAsText(file);

        

    }

    ChartJS.register(ArcElement,Tooltip,Legend,LineElement,PointElement,LinearScale,CategoryScale,ChartDataLabels);
    return(
        <>
            <div className="">
                <h1>Test</h1>
                <input type="file" value={insertedFile} className="border-2" accept=".csv" onChange={handleUploadedFile}></input>
            </div>
            <div>

            </div>
        </>
    )
}

export default ExcelChart