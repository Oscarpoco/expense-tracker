
function DisplayTransaction(props){

    return (
        <div>
            <h4>History of your transactions</h4>

    {props.transactions.map((data) =>(

        <div>
            <h6>{data.transationItem}</h6>
            <h6>{data.amount}</h6>
            <h6>{data.transationType}</h6>
        </div>
    ) )}

        </div>
    )
}

export default DisplayTransaction