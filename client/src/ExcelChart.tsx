import { useState } from "react"


function ExcelChart(){
    const [insertedFile,setInsertedFile] = useState([]);

    return(
        <>
            <div className="border-2">
                <h1>Test</h1>
                <input type="file" value={insertedFile} className="border-2"></input>
            </div>
        </>
    )
}

export default ExcelChart