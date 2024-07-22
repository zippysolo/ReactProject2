

function DateInput(props) {
    function updateHandler(e) {
        props.updateDate(e.target.value);
    }
    return (
        <input onChange={updateHandler} name={props.name} type="date" value={props.value} required="required"></input>
    );
}

export default DateInput;