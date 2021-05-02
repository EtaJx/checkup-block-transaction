import React, { memo } from 'react'
import List from './List'

import './Transactions.css'

const Transactions = (props) => {
    const { data, isLoading } = props
    return (
        <div className="transactions-container">
            <h4>Transactions</h4>
            {
                isLoading ?
                    <span>loading...</span>
                    :
                    <List data={data} />
            }

        </div>
    )
}

export default memo(Transactions)
