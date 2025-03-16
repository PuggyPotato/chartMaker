import { useState } from "react"



function Home(){
    const [dataName,setDataName] = useState("Data Name");
    const [dataValue,setDataValue] = useState("Value");




    return(
        <>
            <div id="dataTable">
                <div id="dataHeader">
                    <h3 className="dataHeader border-2 w-auto px-[58.8px] border-l-0">{dataName}</h3>
                    <h3 className="dataHeader border-2 w-auto px-[75px]">{dataValue}</h3>
                </div>
                <div className="dataName">
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>   
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                    <input className="dataNameInput"></input>
                </div>
                <div id="value" className="absolute top-[27px] left-[192px] ">
                    <input className="dataValueInput  value px-[2px]"></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                    <input className="dataValueInput  value px-[4px] "></input>
                </div>
            </div>
        </>
    )
}

export default Home