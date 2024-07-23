
import Button from "./Button";
function TransactionsBody2(props) {
    return (
        <>
            {props.transArray.map(function (entry, index) {
                return (<tr>
                    {entry.map(function (subEntry) {
                        return (<td key={index}> {subEntry}</td>);
                    })}
                    <Button text="Edit" class="btn-purple submit-btn"></Button>
                    <Button text="Delete" class="btn-purple submit-btn"></Button>
                </tr>
                );
            })}

        </>
    );

}
export default TransactionsBody2;
