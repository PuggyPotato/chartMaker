import { useNavigate } from "react-router-dom"




function Home(){
    const navigate = useNavigate()


    return(
        <div>
            <button onClick={() =>navigate("/ManualChart")} className="border-2">Manual Input Chart</button>
            <button onClick={() =>navigate("/ExcelChart")} className="border-2 m-2">Input Data With CSV/Excel</button>
        </div>
    )
}


export default Home