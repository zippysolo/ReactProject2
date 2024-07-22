
function PieChartLabels(props) {
    return (
        <div className="pie-chart__labels-item">
            <div className="label">
                <div className={`label__color ${props.class}`}></div>
                {props.text}
            </div>
            ${props.amt}
        </div>
    );
}

export default PieChartLabels;