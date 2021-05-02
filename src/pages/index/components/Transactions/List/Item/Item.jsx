import React, { useMemo, memo } from 'react'
import dayjs from 'dayjs'
import './Item.css'

const formatBTC = number => (number / 100000000).toFixed(8)

const Item = (props) => {
    const { item } = props
    const { hash, time, inputs, out, fee } = item
    const toalSpent = useMemo(() => {
        return out.reduce((prev = 0, current) => {
            return prev + current.value
        }, 0);
    }, [item.out]);
    return (
        <div className="item-container">
            <div className="item-container__hash">
                <div className="item__description">
                    <span className="item__label">Hash</span>
                    <span className="item__value">
                        <a href={`https://www.blockchain.com/btc/tx/${hash}`}>{hash}</a>
                    </span>
                </div>
                <div className="item__time">
                    <span>{dayjs(time * 1000).format('YYYY-MM-DD HH:mm')}</span>
                </div>
            </div>

            <div className="item-transaction">
                <span className="item-whereabouts">From</span>

                <div className="item-transaction__inputs-container">
                {
                    inputs.map(item => {
                        const { prev_out } = item
                        return (
                            prev_out ? (
                                <div className="item-transaction__inputs">
                                    <span className="item-transaction__inputs-hash">
                                        <a href={`https://www.blockchain.com/btc/address/${prev_out.addr}`}>{prev_out.addr}</a>
                                    </span>
                                    <span className="item-transaction__inputs-fee">{formatBTC(+prev_out.value)} BTC</span>
                                </div>
                            ): <span className="item-transaction__inputs" style={{ color: '#7BA23F' }}>COINBASE (Newly Generated Coins)</span>
                        )
                    })
                }
                </div>

                <span className="item-whereabouts">TO</span>

                <div className="item-transaction__out-container">
                    {
                        out.map(item => {
                            const { spent, addr, value } = item
                            return (
                                <div className="item-transaction__out">
                                    <span className="item-transaction__out-hash">
                                        { spent ?
                                            <a href={`https://www.blockchain.com/btc/address/${addr}`}>{addr}</a>
                                            : 'OP_RETURN' }
                                    </span>
                                    <span className="item-transaction__out-fee">{formatBTC(+value)} BTC</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="item-container__fee">
                <div className="item__description">
                    <span className="item__label">Fee</span>
                    <span className="item__value">{formatBTC(+fee)} BTC</span>
                </div>
                <div className="item__spent-total">{formatBTC(+toalSpent)} BTC</div>
            </div>
        </div>
    )
}

export default memo(Item)
