import { ReactElement, useEffect, useMemo, useState } from "react"
import {Chart as ChartJS,ArcElement,Tooltip,Legend,LineElement,PointElement,LinearScale,CategoryScale, ChartData} from "chart.js/auto";
import {Chart,Line ,Pie,Bar} from "react-chartjs-2";
import { jsx } from "react/jsx-runtime";

function Home(){
    const [dataName,setDataName] = useState("Data Name");
    const [dataValueHeader,setDataValueHeader] = useState("Value");
    const [typeOfChart,setTypeOfChart] = useState("line");
    const [chartShown,setChartShown] = useState<ReactElement | null>(null)
    

    const [dataHeader1,setDataHeader1] = useState("");
    const [dataHeader2,setDataHeader2] = useState("");
    const [dataHeader3,setDataHeader3] = useState("");
    const [dataHeader4,setDataHeader4] = useState("");
    const [dataHeader5,setDataHeader5] = useState("");
    const [dataHeader6,setDataHeader6] = useState("");
    const [dataHeader7,setDataHeader7] = useState("");
    const [dataHeader8,setDataHeader8] = useState("");
    const [dataHeader9,setDataHeader9] = useState("");
    const [dataHeader10,setDataHeader10] = useState("");
    const [dataHeader11,setDataHeader11] = useState("");
    const [dataHeader12,setDataHeader12] = useState("");
    const [dataHeader13,setDataHeader13] = useState("");
    const [dataHeader14,setDataHeader14] = useState("");
    const [dataHeader15,setDataHeader15] = useState("");
    const [dataHeader16,setDataHeader16] = useState("");
    const [dataHeader17,setDataHeader17] = useState("");
    const [dataHeader18,setDataHeader18] = useState("");
    const [dataHeader19,setDataHeader19] = useState("");
    const [dataHeader20,setDataHeader20] = useState("");



    const [data1,setData1] = useState<number>(0)
    const [data2,setData2] = useState(0);
    const [data3,setData3] = useState(0);
    const [data4,setData4] = useState(0);
    const [data5,setData5] = useState(0);
    const [data6,setData6] = useState(0);
    const [data7,setData7] = useState(0);
    const [data8,setData8] = useState(0);
    const [data9,setData9] = useState(0);
    const [data10,setData10] = useState(0);
    const [data11,setData11] = useState<number>(0);
    const [data12,setData12] = useState(0);
    const [data13,setData13] = useState(0);
    const [data14,setData14] = useState(0);
    const [data15,setData15] = useState(0);
    const [data16,setData16] = useState(0);
    const [data17,setData17] = useState(0);
    const [data18,setData18] = useState(0);
    const [data19,setData19] = useState(0);
    const [data20,setData20] = useState(0);



    ChartJS.register(ArcElement,Tooltip,Legend,LineElement,PointElement,LinearScale,CategoryScale);


    const exampleData:ChartData<any> = useMemo(() =>({
        labels:[dataHeader1,dataHeader2,dataHeader3,dataHeader4,dataHeader5,
            dataHeader6,dataHeader7,dataHeader8,dataHeader9,dataHeader10,
            dataHeader11,dataHeader12,dataHeader13,dataHeader14,dataHeader15
            ,dataHeader16,dataHeader17,dataHeader18,dataHeader19,dataHeader20],
    datasets:[
      {
        label:"Sales",
        data:[data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12,data13,data14,data15,
          data16,data17,data18,data19,data20],
          backgroundColor: "rgba(75,192,192,0.6)", // Bar color
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
      },
    ],
    }),[dataHeader1,dataHeader2,dataHeader3,dataHeader4,dataHeader5,
        dataHeader6,dataHeader7,dataHeader8,dataHeader9,dataHeader10,
        ,dataHeader11,dataHeader12,dataHeader13,dataHeader14,dataHeader15
        ,dataHeader16,dataHeader17,dataHeader18,dataHeader19,dataHeader20,data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12,data13,data14,data15,
        data16,data17,data18,data19,data20]) 

    useEffect(() =>{

    
    if(typeOfChart == "bar"){
        setChartShown(<Bar data={exampleData}></Bar>)
    }
    else if(typeOfChart == "line"){
        setChartShown(<Line data={exampleData}></Line>)
    }
    else if(typeOfChart == "pie"){
        setChartShown(<Pie data={exampleData}></Pie>)
    }
    },[typeOfChart])

    return(
        <>
            <div id="dataTable">
                <div id="dataHeader">
                    <h3 className="dataHeader border-2 w-auto px-[58.8px] border-l-0">{dataName}</h3>
                    <h3 className="dataHeader border-2 w-auto px-[75px]">{dataValueHeader}</h3>
                </div>
                <div className="dataName">
                    <input className="dataNameInput" value={dataHeader1} onChange={(e) =>setDataHeader1(e.target.value)} placeholder="Name 1"></input>
                    <input className="dataNameInput" value={dataHeader2} onChange={(e) =>setDataHeader2(e.target.value)} placeholder="Name 2"></input>
                    <input className="dataNameInput" value={dataHeader3} onChange={(e) =>setDataHeader3(e.target.value)} placeholder="Name 3"></input>
                    <input className="dataNameInput" value={dataHeader4} onChange={(e) =>setDataHeader4(e.target.value)} placeholder="Name 4"></input>
                    <input className="dataNameInput" value={dataHeader5} onChange={(e) =>setDataHeader5(e.target.value)} placeholder="Name 5"></input>
                    <input className="dataNameInput" value={dataHeader6} onChange={(e) =>setDataHeader6(e.target.value)} placeholder="Name 6"></input>
                    <input className="dataNameInput" value={dataHeader7} onChange={(e) =>setDataHeader7(e.target.value)} placeholder="Name 7"></input>
                    <input className="dataNameInput" value={dataHeader8} onChange={(e) =>setDataHeader8(e.target.value)} placeholder="Name 8"></input>
                    <input className="dataNameInput" value={dataHeader9} onChange={(e) =>setDataHeader9(e.target.value)} placeholder="Name 9"></input>
                    <input className="dataNameInput" value={dataHeader10} onChange={(e) =>setDataHeader10(e.target.value)} placeholder="Name 10"></input>
                    <input className="dataNameInput" value={dataHeader11} onChange={(e) =>setDataHeader11(e.target.value)} placeholder="Name 11"></input>
                    <input className="dataNameInput" value={dataHeader12} onChange={(e) =>setDataHeader12(e.target.value)} placeholder="Name 12"></input>
                    <input className="dataNameInput" value={dataHeader13} onChange={(e) =>setDataHeader13(e.target.value)} placeholder="Name 13"></input>
                    <input className="dataNameInput" value={dataHeader14} onChange={(e) =>setDataHeader14(e.target.value)} placeholder="Name 14"></input>
                    <input className="dataNameInput" value={dataHeader15} onChange={(e) =>setDataHeader15(e.target.value)} placeholder="Name 15"></input>
                    <input className="dataNameInput" value={dataHeader16} onChange={(e) =>setDataHeader16(e.target.value)} placeholder="Name 16"></input>   
                    <input className="dataNameInput" value={dataHeader17} onChange={(e) =>setDataHeader17(e.target.value)} placeholder="Name 17"></input>
                    <input className="dataNameInput" value={dataHeader18} onChange={(e) =>setDataHeader18(e.target.value)} placeholder="Name 18"></input>
                    <input className="dataNameInput" value={dataHeader19} onChange={(e) =>setDataHeader19(e.target.value)} placeholder="Name 19"></input>
                    <input className="dataNameInput" value={dataHeader20} onChange={(e) =>setDataHeader20(e.target.value)} placeholder="Name 20"></input>
                </div>
                <div id="value" className="absolute top-[27px] left-[193px] ">
                    <input className="dataValueInput  value px-[0px] " value={data1} onChange={(e) =>setData1(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data2} onChange={(e) =>setData2(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data3} onChange={(e) =>setData3(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data4} onChange={(e) =>setData4(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data5} onChange={(e) =>setData5(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data6} onChange={(e) =>setData6(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data7} onChange={(e) =>setData7(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data8} onChange={(e) =>setData8(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data9} onChange={(e) =>setData9(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data10} onChange={(e) =>setData10(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data11} onChange={(e) =>setData11(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data12} onChange={(e) =>setData12(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data13} onChange={(e) =>setData13(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data14} onChange={(e) =>setData14(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data15} onChange={(e) =>setData15(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data16} onChange={(e) =>setData16(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data17} onChange={(e) =>setData17(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data18} onChange={(e) =>setData18(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data19} onChange={(e) =>setData19(Number(e.target.value))} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data20} onChange={(e) =>setData20(Number(e.target.value))} placeholder="0" type="number"></input>
                </div>
            </div>
            <div className="absolute right-30 size-100 top-50 ">
                    {chartShown}
                    
                    <select className="border-2" onChange={(e) =>{
                        setTypeOfChart(e.target.value)
                        console.log(e.target.value)}}>
                        <option value={"bar"}>Bar</option>
                        <option value={"line"}>Line</option>
                        <option value={"pie"}>Pie</option>
                    </select>
                </div>
        </>
    )
}

export default Home