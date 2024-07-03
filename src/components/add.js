import { useState } from "react"

function AddTransaction(props){

    

    const [transactionItem, setTransactionItem] = useState("");
    const [amount, setAmount] = useState("");
    const [transactionType, setTransactionType] = useState("");
    
    const add = (() => {
        props.add(transactionItem, amount, transactionType);
    });

    return (
        <div>
            <h1>Add a new transaction</h1>

            <input type="text" placeholder="Enter your amount" onChange={(event) => setTransactionItem(event.target.value)}></input><br></br>
            <input type="text" placeholder="Enter your amount" onChange={(event) => setAmount(event.target.value)}></input><br></br>

            <select onClick={(event) => setTransactionType(event.target.value)}>
                <option>Income</option>
                <option>Expense</option>
            </select>
            <br></br>
            <button onClick={add}>Add transation</button>
        </div>
    )
}

export default AddTransaction