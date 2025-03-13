



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
                    <img src="./landingChart.png" id="landingChartIMG" ></img>
                </div>
                <div id="bottomBox">
                    <p id="bottomParagraph"> Manually creating charts can be frustrating, time-consuming, and prone to errors. With Chart Maker, you no longer have to struggle with spreadsheets, complex formulas, or design tools. Simply upload your data, select a chart type, and let our intelligent system generate a clean, professional visualization in seconds. Whether you’re a business analyst, student, or marketer, our tool helps you turn raw numbers into meaningful insights effortlessly. We support multiple chart types—including bar, line, pie, and scatter plots—so you always get the right visualization for your data. Plus, with real-time updates and customizable styles, you can tweak colors, labels, and formats to match your needs perfectly. No coding, no design skills—just instant, accurate charts that make your data work for you. Try it now and see how simple data visualization can be!</p>
                </div>
            </div>
        </>
    )
}

export default Landing