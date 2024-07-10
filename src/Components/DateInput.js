

function DateInput(props) {
    return (
        <input name={props.name} type="date" value={props.value} required="required"></input>
    );
}

export default DateInput;