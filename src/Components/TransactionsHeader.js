
function TransactionsHeader(props) {
    return (
        <tr>
            {props.transHeadingsArray.map(function (entry, index) {
                return (<th key={index}> {entry} </th>);
            })}
        </tr>


    );
}
export default TransactionsHeader;

