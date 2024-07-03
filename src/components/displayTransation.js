
function DisplayTransaction(props){

    return (
        <div>
            <h4>History of your transactions</h4>

    {props.transactions.map((data) =>(

        <div>
            <div className="list-items">
                <div>
                    <h6>{data.transactionItem}</h6>
                </div>
                
                <div>
                    <h6>{data.amount}</h6>
                </div>

                <div>
                    <h6>{data.transactionType}</h6>
                </div>
            </div>
        </div>
    ) )}

        </div>
    )
}

export default DisplayTransaction