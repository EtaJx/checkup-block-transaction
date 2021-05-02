import React, { useEffect, useState, memo } from 'react'
import BlockItem from './BlockItem';
import './Block.css'
import { BLOCK_LIST_CONFIG } from './blockListConfig'

const Block = (props) => {
    const { data, isLoading } = props
    const { block_index } = data
    const [summarizeData, setSummarizeData] = useState([])

    useEffect(() => {
        if (Object.keys(data).length !== 0) {
            const calculateData = Object.entries(data).reduce((prevValue = [], currentValue) => {
                const [key, value] = currentValue
                const blockConfig = BLOCK_LIST_CONFIG[key]
                if (blockConfig) {
                    return prevValue.concat({
                        key,
                        value,
                        render: blockConfig.render
                    })
                } else {
                    return prevValue
                }
            }, [])
            setSummarizeData(calculateData)
        }
    }, [data])

    return (
        <div className="block-container">
            <h4 className="block__title">Block {block_index}</h4>
            {isLoading ?
                <span>Loading...</span>
                :
                <>
                    {
                        summarizeData.map(item => {
                            const {key, value, render} = item;
                            return (
                                <BlockItem
                                    key={value}
                                    name={key}
                                    value={value}
                                    render={render}
                                />
                            )
                        })
                    }
                </>
            }
        </div>
    )
}

export default memo(Block);
