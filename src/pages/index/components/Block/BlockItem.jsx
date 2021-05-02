import React, { memo } from 'react'

import { BLOCK_LIST_CONFIG } from './blockListConfig'

import './Block.css'

const BlockItem = (props) => {
    const { name, value, render } = props
    return (
        <div className="block__list-item">
            <span className="block__list-item-name">{BLOCK_LIST_CONFIG[name].name}</span>
            <span className="block__list-item-render">{render ? render(value) : value}</span>
        </div>
    )
}

export default memo(BlockItem)
