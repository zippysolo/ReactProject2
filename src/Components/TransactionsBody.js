
function TransactionsBody(props) {
    { console.log("transaction body", props) }
    return (
        <>
            {props.transArray && props.transArray.map(function (entry, index) {
                return (<tr>
                    {entry.map(function (subEntry) {
                        return (<td key={index}> {subEntry}</td>);
                    })}
                </tr>
                );
            })}

        </>
    );

}
export default TransactionsBody;
