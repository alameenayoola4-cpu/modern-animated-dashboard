import { motion } from 'framer-motion';
import { transactions } from '../data/data';

function TransactionsTable() {
    return (
        <motion.div
            className="transactions-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <div className="transactions-header">
                <h3>Recent Transactions</h3>
                <button className="view-all-btn">View All</button>
            </div>

            <table className="transactions-table">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <motion.tr
                            key={transaction.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                        >
                            <td>
                                <div className="customer-cell">
                                    <div
                                        className="customer-avatar"
                                        style={{
                                            background: `linear-gradient(135deg, ${index % 2 === 0 ? '#2dd4bf' : '#f97316'
                                                }, ${index % 2 === 0 ? '#14b8a6' : '#ea580c'})`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            fontSize: '12px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        {transaction.avatar}
                                    </div>
                                    <span className="customer-name">{transaction.customer}</span>
                                </div>
                            </td>
                            <td className="date-cell">{transaction.date}</td>
                            <td className="amount-cell">{transaction.amount}</td>
                            <td>
                                <span className={`status-badge ${transaction.status}`}>
                                    {transaction.status}
                                </span>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    );
}

export default TransactionsTable;
