import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddTransaction from './components/add';
import DisplayTransaction from './components/displayTransation';

function App() {

  const [transactions, setTransactions] = useState([]);
  const add = ((transactionItem, amount, transactionType) => {
      setTransactions ((transactions) => [...transactions, {transactionItem:transactionItem, amount:amount, transactionType:transactionType}]);

  console.log(transactions);
    })

  return (
    <div className="container">

      <DisplayTransaction transactions={transactions}/>

      <AddTransaction add={add}/>
    </div>
  );
}

export default App;
