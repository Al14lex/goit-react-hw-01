import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
    return (
        <table className={css.tableTrans}>
            <thead>
                <tr>
                    <th><strong>Type</strong></th>
                    <th><strong>Amount</strong></th>
                    <th><strong>Currency</strong></th>
                </tr>
            </thead>
            <tbody>
                {items.map(transaction => (
                  <tr key={transaction.id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>  
                ))}
            </tbody>
        </table>
    );
}
