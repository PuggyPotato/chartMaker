import { useState } from "react"



function Home(){
    const [dataName,setDataName] = useState("Data Name");
    const [dataValueHeader,setDataValueHeader] = useState("Value");

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



    const [data1,setData1] = useState("");
    const [data2,setData2] = useState("");
    const [data3,setData3] = useState("");
    const [data4,setData4] = useState("");
    const [data5,setData5] = useState("");
    const [data6,setData6] = useState("");
    const [data7,setData7] = useState("");
    const [data8,setData8] = useState("");
    const [data9,setData9] = useState("");
    const [data10,setData10] = useState("");
    const [data11,setData11] = useState("");
    const [data12,setData12] = useState("");
    const [data13,setData13] = useState("");
    const [data14,setData14] = useState("");
    const [data15,setData15] = useState("");
    const [data16,setData16] = useState("");
    const [data17,setData17] = useState("");
    const [data18,setData18] = useState("");
    const [data19,setData19] = useState("");
    const [data20,setData20] = useState("");







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
                    <input className="dataValueInput  value px-[0px] " value={data1} onChange={(e) =>setData1(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data2} onChange={(e) =>setData2(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data3} onChange={(e) =>setData3(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data4} onChange={(e) =>setData4(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data5} onChange={(e) =>setData5(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data6} onChange={(e) =>setData6(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data7} onChange={(e) =>setData7(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data8} onChange={(e) =>setData8(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data9} onChange={(e) =>setData9(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data10} onChange={(e) =>setData10(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data11} onChange={(e) =>setData11(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data12} onChange={(e) =>setData12(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data13} onChange={(e) =>setData13(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data14} onChange={(e) =>setData14(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data15} onChange={(e) =>setData15(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data16} onChange={(e) =>setData16(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data17} onChange={(e) =>setData17(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data18} onChange={(e) =>setData18(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data19} onChange={(e) =>setData19(e.target.value)} placeholder="0" type="number"></input>
                    <input className="dataValueInput  value px-[4px] " value={data20} onChange={(e) =>setData20(e.target.value)} placeholder="0" type="number"></input>
                </div>
            </div>
        </>
    )
}

export default Home