
function TotalsBox(props) {

    return (
        <div class={props.totalBoxClass}>
            <div class="header-container">
                <h3 class="section-header">{props.headerText}</h3>
                <i class="fa-solid fa-square-dollar"></i>
            </div>
            <h1 class="price">
                {props.price}<span class="price-currency">({props.currency})</span>
            </h1>
            <p>
                <span class={props.percentClass}>{props.percent}</span> {props.percentText}
            </p>
        </div>

    );
}

export default TotalsBox;