import PieChartLabels from "./PieChartLabels";

function Spending(props) {
    return (
        <div class="box spending-box">
            <div class="header-container">
                <h3 class="section-header">Donations by category</h3>
            </div>
            <div class="pie-chart">
                <div id="my-pie-chart"></div>
            </div>
            <div class="overall-spending">
                <h4>Overall</h4>
                <span>$583,530.00</span>
            </div>
            <div class="pie-chart__labels">
                {props.categories.map(function (entry) {
                    return (<PieChartLabels key={entry.index} text={entry.text} class={entry.class} ></PieChartLabels>);
                })}

            </div>
        </div>


    );
}

export default Spending;