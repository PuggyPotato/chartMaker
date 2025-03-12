



function Landing(){



    return(
        <>
            <div id="landingDiv" className="">
                <div id="topLeftBox">
                    <h1 className="" id="landingHeader">Chart Makers</h1>
                    <p id="landingDescription">Chart Makers provides powerful and easy-to-use tools for creating visually stunning charts and graphs. Whether you need bar charts, pie charts, or interactive data visualizations, our platform helps you present complex information in a clear and engaging way.</p>
                </div>
                <div id="topRightBox">
                    <h2 id="topRightHeader">Stop wasting time manually creating charts. With Chart Makers, you can turn raw data into stunning, insightful visualizations in seconds—no coding, no hassle. Just upload your dataset, choose a chart type, and let our Program handle the rest.</h2>
                    <button id="tryNowButton">Try it Now!</button>
                    <img src="./landingChart.png" id="landingChartIMG"></img>
                </div>
            </div>
        </>
    )
}

export default Landing