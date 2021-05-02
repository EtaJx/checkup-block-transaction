import React from 'react'
import dayjs from 'dayjs'

const formatNumber = (number) => number.toLocaleString()
const format0xNumber = (number) => `0x${number.toString(16)}`

export const BLOCK_LIST_CONFIG = {
    hash: {
        name: 'Hash'
    },
    time: {
        name: 'Timestamp',
        render: time => {
            return dayjs(time * 1000).format('YYYY-MM-DD HH:mm')
        }
    },
    height: {
        name: 'Height',
        render: height => formatNumber(+height)
    },
    n_tx: {
        name: 'Number of Transactions',
        render: n_tx => formatNumber(+n_tx)
    },
    mrkl_root: {
        name: 'Merkle root'
    },
    ver: {
        name: 'Version',
        render: ver => format0xNumber(+ver)
    },
    bits: {
        name: 'Bits',
        render : bits => formatNumber(+bits)
    },
    weight: {
        name: 'Weight',
        render: weight => `${formatNumber(+weight)} WU`
    },
    size: {
        name: 'Size',
        render: size => `${formatNumber(+size)} bytes`
    },
    nonce: {
        name: 'Nonce',
        render: nonce => formatNumber(+nonce)
    },
    fee: {
        name: 'Fee Reward',
        render: fee => `${parseFloat(fee / 100000000).toFixed(8)} BTC`,
    }
}
